import { createContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const login = useCallback(async ({ username, password }) => {
    try {
      await axios
        .post(`${apiUrl}/login`, { username, password })
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg === "AUTENTICACION EXITOSA") {
            setLogged(true);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("priv", res.data.userData[0].Priv);
          } else {
            console.log("error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, [apiUrl]);

  const createAccount = async ({ user, email, password, privUser }) => {
    try {
      await axios
        .post(`${apiUrl}/createAccount`, { 
          user,
          email,
          password,
          privUser,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  }, [login]); 

  return (
    <LoginContext.Provider
      value={{
        login,
        logged,
        createAccount,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

// Define PropTypes for the component
LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginContext;
