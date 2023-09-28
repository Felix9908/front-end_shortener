import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const login = async ({ username, password }) => {
    try {
      await axios
        .post("http://localhost:3000/login", { username, password })
        .then((res) => {
          console.log(res.data.msg);
          if (res.data.msg == "AUTEMTICACION EXITOSA") {
            setLogged(true);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("priv", res.data.userData[0].Priv);
          } else {
            console.log("error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const createAccount = async ({ user, email, password, privUser }) => {
    console.log({ user, email, password, privUser })
    try {
      await axios
        .post("http://localhost:3000/createAccount", {
          user,
          email,
          password,
          privUser,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {}
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
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

export default LoginContext;
