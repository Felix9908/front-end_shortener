import React, { createContext, useContext } from "react";
import axios from "axios";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

  const login = async ({ username, password }) => {
    try {
      await axios
        .post("http://localhost:3000/login", { username, password })
        .then((res) => {
          console.log(res)
          // if (res.data.msg == "AUTEMTICACION EXITOSA") {
          //   setLogged(true);
          //   sessionStorage.setItem("token", res.data.token);
          //   sessionStorage.setItem("privUser", res.data.userData[0].privUser);
          //   sessionStorage.setItem("dataUser", res.data.userData[0].fullName);
          // } else {
          //   console.log("error")
          // }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
