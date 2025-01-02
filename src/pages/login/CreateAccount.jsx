import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed";
import { Eye } from "../../assets/svg/Eye";
import { MailIcon } from "../../assets/svg/MailIcon";
import { FaFingerprint as PasswordIcon } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const password = watch("password");

  const onSubmit = async (data) => {
    const { username, email, password } = data;
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${apiUrl}/createAccount`, {
        user: username,
        email: email,
        password: password,
      });

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4">Crear Cuenta</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Nombre de usuario */}
            <div className="mb-4">
              <Input
                label="Nombre de Usuario"
                placeholder="Nombre de usuario"
                labelPlacement="outside"
                validationState={errors.username ? "invalid" : "valid"}
                {...register("username", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9* ]+$/,
                    message: "Solo se permiten letras, números, * y espacios",
                  },
                })}
                helperText={errors.username && errors.username.message}
                startContent={
                  <CgProfile className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>

            {/* Correo electrónico */}
            <div className="mb-4">
              <Input
                type="email"
                label="Correo Electrónico"
                placeholder="jhondoe@gmail.com"
                labelPlacement="outside"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                validationState={errors.email ? "invalid" : "valid"}
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Correo electrónico no válido",
                  },
                })}
                helperText={errors.email && errors.email.message}
              />
            </div>

            {/* Contraseña */}
            <div className="mb-4">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                label="Contraseña"
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
                validationState={errors.password ? "invalid" : "valid"}
                {...register("password", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
                helperText={errors.password && errors.password.message}
              />
            </div>

            {/* Confirmar contraseña */}
            <div className="mb-4">
              <Input
                type={isConfirmPasswordVisible ? "text" : "password"}
                label="Confirmar Contraseña"
                placeholder="Escribe nuevamente tu contraseña"
                labelPlacement="outside"
                startContent={
                  <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0 w-7" />
                }
                endContent={
                  <button
                    type="button"
                    onClick={() =>
                      setConfirmPasswordVisible(!isConfirmPasswordVisible)
                    }
                    className="focus:outline-none"
                  >
                    {isConfirmPasswordVisible ? (
                      <Eye className="text-2xl text-default-400" />
                    ) : (
                      <EyeSlashed className="text-2xl text-default-400" />
                    )}
                  </button>
                }
                validationState={errors.confirmPassword ? "invalid" : "valid"}
                {...register("confirmPassword", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
                helperText={
                  errors.confirmPassword && errors.confirmPassword.message
                }
              />
            </div>

            {/* Botón para crear cuenta */}
            <Button color="primary" type="submit" className="w-full py-2 px-4">
              Crear Cuenta
            </Button>
          </form>

          {/* Enlace para iniciar sesión */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Iniciar Sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
