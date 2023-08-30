import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
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
    login({username,password})
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
          <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">
                Nombre de Usuario:
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Iniciar Sesión
            </button>
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
