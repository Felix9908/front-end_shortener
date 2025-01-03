import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed";
import { Eye } from "../../assets/svg/Eye";
import { MailIcon } from "../../assets/svg/MailIcon";
import { PasswordIcon } from "../../assets/svg/PasswordIcon";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";
import userService from "../../services/userService";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Llamada al servicio de login
      const response = await userService.login(data);
      mutate.apply("user", response.data.userData);

      if (response.data.success) {
        console.log("Login exitoso");
        navigate("/statistics"); 
      } else {
        console.error(response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error en la autenticación:", error);
      alert("Error en la autenticación. Intenta nuevamente.");
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
                label="Nombre de Usuario"
                validationState={errors.username ? "invalid" : "valid"}
                placeholder="TuNombreDeUsuario"
                labelPlacement="outside"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                {...register("username", {
                  required: "El nombre de usuario es requerido",
                  minLength: {
                    value: 3,
                    message: "El nombre de usuario debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "El nombre de usuario no puede tener más de 15 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._]+$/,
                    message: "El nombre de usuario solo puede contener letras, números, guiones bajos o puntos",
                  },
                })}
              />
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
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
                {...register("password", {
                  required: "La contraseña es requerida",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
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
