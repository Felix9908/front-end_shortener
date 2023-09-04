import { useState, useContext, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { Link as NextUILink} from "@nextui-org/react";
import { EyeSlashed } from "../../assets/svg/EyeSlashed"
import { Eye } from "../../assets/svg/Eye"
import { MailIcon } from "../../assets/svg/MailIcon"
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    // Aquí puedes agregar la lógica de creación de cuenta
    console.log('Creando cuenta con:', username, email, phoneNumber, password);
  };

  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="w-full min-h-screen bg-yellow-100">

      <div className="flex-h bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <div>
          <h2>Texto de prueba</h2>
          <p>Crea una nueva cuenta rapido y comienza a generar ingresos</p>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'><rect fill='#ee5522' width='2000' height='1500' /><defs><radialGradient id='a' gradientUnits='objectBoundingBox'><stop offset='0' stop-color='#FB3' /><stop offset='1' stop-color='#ee5522' /></radialGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'><stop offset='0' stop-color='#f7882b' /><stop offset='1' stop-color='#ee5522' /></linearGradient><path id='s' fill='url(#b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z' /><g id='g'><use href='#s' transform='scale(0.12) rotate(60)' /><use href='#s' transform='scale(0.2) rotate(10)' /><use href='#s' transform='scale(0.25) rotate(40)' /><use href='#s' transform='scale(0.3) rotate(-20)' /><use href='#s' transform='scale(0.4) rotate(-30)' /><use href='#s' transform='scale(0.5) rotate(20)' /><use href='#s' transform='scale(0.6) rotate(60)' /><use href='#s' transform='scale(0.7) rotate(10)' /><use href='#s' transform='scale(0.835) rotate(-40)' /><use href='#s' transform='scale(0.9) rotate(40)' /><use href='#s' transform='scale(1.05) rotate(25)' /><use href='#s' transform='scale(1.2) rotate(8)' /><use href='#s' transform='scale(1.333) rotate(-60)' /><use href='#s' transform='scale(1.45) rotate(-30)' /><use href='#s' transform='scale(1.6) rotate(10)' /></g></defs><g transform='rotate(0 0 0)'><g transform='rotate(0 0 0)'><circle fill='url(#a)' r='3000' /><g opacity='0.5'><circle fill='url(#a)' r='2000' /><circle fill='url(#a)' r='1800' /><circle fill='url(#a)' r='1700' /><circle fill='url(#a)' r='1651' /><circle fill='url(#a)' r='1450' /><circle fill='url(#a)' r='1250' /><circle fill='url(#a)' r='1175' /><circle fill='url(#a)' r='900' /><circle fill='url(#a)' r='750' /><circle fill='url(#a)' r='500' /><circle fill='url(#a)' r='380' /><circle fill='url(#a)' r='250' /></g><g transform='rotate(0 0 0)'><use href='#g' transform='rotate(10)' /><use href='#g' transform='rotate(120)' /><use href='#g' transform='rotate(240)' /></g><circle fill-opacity='0.02' fill='url(#a)' r='3000' /></g></g></svg>
        </div>

        <div>
          <div>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary" data-content="🔒"></li>
              <li className="step" data-content="🪙"></li>
              <li className="step" data-content="✅"></li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Crear una cuenta</h2>
          <p className="text-lg font-semibold mb-4">Crear una cuenta</p>

          <div className="bg-gray-500">
            <div className="mb-4">
              {/*  Aqui es basicamente lo mismo, en caso que se detecte un inicio de sesion no valido
            lo que hay que hacer es cambiar el validationState="invalid" y se pone en rojo */}
              <Input
                type="text"
                label="Username"
                validationState="valid"
                placeholder="Jhon Doe"
                labelPlacement="outside"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

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

            <div>
              <div className="flex flex-col gap-2">
                <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
                  <NextUILink showAnchorIcon href="TODO--redirect_to_terms_of_use" color="primary">
                    Acepto los terminos y condiciones
                  </NextUILink>
                </Checkbox>
                <p className="text-default-500">
                  Selected: {isSelected ? "true" : "false"}
                </p>
              </div>
            </div>

            <div className="bg-red-500">
              <Button color="primary">
                Siguiente
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
