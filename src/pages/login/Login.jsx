import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import { Button, Input, Popover, PopoverTrigger, PopoverContent, Tooltip } from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed"
import { Eye } from "../../assets/svg/Eye"
import { MailIcon } from "../../assets/svg/MailIcon"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, logged } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged == true) {
      navigate("/statistics");
    }
  }, [logged]);

  const handleLogin = () => {
    login({ username, password })
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              {/*  Aqui es basicamente lo mismo, en caso que se detecte un inicio de sesion no valido
            lo que hay que hacer es cambiar el validationState="invalid" y se pone en rojo */}
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

            {/* TODO, aqui queda por hacer que el boton de mostrar contraseña funcione, esta pero no esta
            funcional del todo
            OJO NO DESCOMENTAR LAS LINEAS DE ABAJO
            */}
            <div className="mb-4">
              <Input
                type="password"
                label="Contraseña"
                validationState="valid"
                placeholder="Escribe tu contraseña"
                labelPlacement="outside"
                /* startContent={
                  <button className="focus:outline-none" type="button" onClick={alert("POR IMPLEMENTAR")}>
                    {isVisible ? (
                      <EyeSlashed className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <Eye className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                } */
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/*  Para hacer que pare de cargar quitas el atributo isLoading, o sea, hay que
            pasarle el atributo cuando se toca el boton de iniciar sesion, tambien hay que cambiar
            el texo a iniciando sesion cuando se presione el boton */}
            <Button color="primary" onClick={handleLogin} className="w-full py-2 px-4">
              Iniciar Sesión
            </Button>

          </form>

          <div className="mt-4 text-sm text-gray-600">
            <p>
              <Link
                to="/createAcount"
                className="text-blue-500 hover:underline"
              >
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
