import LanguageSwitcher from "components/common/LanguageSwitcher"
import { LoginPageVars } from "constants/ui/auth/LoginPageVars"
import { useTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="login-page">
        <section className="left-secton">
          <div className="relative min-w-screen">
            <img src={LoginPageVars.bgPath} className="relative lg:-left-10 left-0 rotate-y-180 lg:rotate-y-0" alt=""/>
            <div className="absolute w-full h-[150px] lg:h-[50px] bottom-0 left-0 bg-gradient-to-b from-transparent to-[#240B48] lg:to-[#160430]"/>
          </div>
          
          <div className="absolute lg:flex hidden lg:visible flex-col gap-2 lg:gap-5 bottom-35 left-15">
            <h1 className="text-white font-bold text-5xl">
              {t("loginPage.welcomeMessage")}
            </h1>

            <h1 className="bg-gradient-to-b from-[#501794] to-[#AE69FF] bg-clip-text text-transparent font-bold text-5xl">
              {t("loginPage.welcomeMessageAccent")}
            </h1>
          </div>
        </section>

        <section className="absolute flex flex-row justify-center items-center min-h-screen right-50">
          <div className="flex flex-col lg:p-10 p-5">
            <h1 className="font-bold text-white text-5xl">Iniciar sesion</h1>

            <div>
              <p className="text-white">Iniciar con email</p>
              <LanguageSwitcher/>
              <div>
                <img src="" alt="" />
                <input
                  type="text" 
                  placeholder="Email"
                  className="bg-[#261046] text-white rounded-lg pl-3 py-2 w-full mb-3"
                  />
                <button className="flex justify-center items-center w-full mb-3 rounded-xl text-white font-bold text-lg py-4 px-8 bg-gradient-to-r from-[#501794] to-[#3e70a1]">Iniciar sesion</button>
                <div className="w-full bg-[#727272] h-[2px] mb-2 rounded-xl"/>
                <div/>
              </div>
            </div>

            <div>
              <p>Continue with...</p>
              {/*componentes de iniciar sesion */}
              <p>Termofuse</p>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Login