import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Importa react-hook-form
import axios from "axios"; // Importa axios
import { Button, Input } from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed";
import { Eye } from "../../assets/svg/Eye";
import { MailIcon } from "../../assets/svg/MailIcon";
import { PasswordIcon } from "../../assets/svg/PasswordIcon";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, data);

      if (response.data.success) {

        localStorage.setItem("token", response.data.token);

        navigate("/statistics");
      } else {
        console.log(response.data.msg);
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Input
                type="text"
                label="UserName"
                validationState={errors.username ? "invalid" : "valid"}
                placeholder="jhondoe@gmail.com"
                labelPlacement="outside"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("username", { required: "El nombre de usuaruio es requerido" })} // Usa react-hook-form
              />
              {errors.username && <span className="text-red-500">{errors.username.message}</span>}
            </div>

            <div className="mb-4">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                label="Contraseña"
                validationState={errors.password ? "invalid" : "valid"}
                placeholder="Escribe tu contraseña"
                labelPlacement="outside"
                startContent={
                  <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0 w-7" />
                }
                endContent={
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!isPasswordVisible)}
                    className="focus:outline-none"
                  >
                    {isPasswordVisible ? (
                      <Eye className="text-2xl text-default-400" />
                    ) : (
                      <EyeSlashed className="text-2xl text-default-400" />
                    )}
                  </button>
                }
                {...register("password", { required: "La contraseña es requerida" })} 
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>

            <Button type="submit" color="primary" className="w-full py-2 px-4">
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <Link to="/createAcount" className="text-blue-500 hover:underline">
                Crear una nueva cuenta
              </Link>
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:underline">
                Olvidé mi contraseña
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
