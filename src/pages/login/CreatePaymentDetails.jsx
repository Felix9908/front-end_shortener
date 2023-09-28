
const CreatePaymentDetails = () => {
  
    return (
      <div className="w-full min-h-screen bg-yellow-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <div>
            <ul className="steps steps-vertical lg:steps-horizontal">
              <li className="step step-primary"></li>
              <li className="step"></li>
              <li className="step"></li>
            </ul>
          </div>
  
          <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
  
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
                  Subscribe (controlled)
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
    );
  };
  
  export default CreateAccount;