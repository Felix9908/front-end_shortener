import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { LoginProvider } from "./Context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </LoginProvider>
  </React.StrictMode>
);
