import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { LoginProvider } from "./Context/LoginContext.jsx";
import { ModalProvider } from "./Context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <LoginProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </LoginProvider>
    </ModalProvider>
  </React.StrictMode>
);
