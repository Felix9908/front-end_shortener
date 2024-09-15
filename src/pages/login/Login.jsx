import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed";
import { Eye } from "../../assets/svg/Eye";
import { MailIcon } from "../../assets/svg/MailIcon";
import { PasswordIcon } from "../../assets/svg/PasswordIcon"; // Importa el icono de la contraseña
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, logged } = useContext(LoginContext);
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (logged === true) {
      navigate("/statistics");
    }
  }, [logged]);

  const handleLogin = () => {
    login({ username, password });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <Input
                type="email"
                label="Email"
                validationState="valid"
                placeholder="jhondoe@gmail.com"
                labelPlacement="outside"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                label="Contraseña"
                validationState="valid"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button color="primary" onClick={handleLogin} className="w-full py-2 px-4">
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
