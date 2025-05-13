import LanguageSwitcher from "components/common/LanguageSwitcher"
import { LoginPageVars } from "constants/ui/auth/LoginPageVars"
import { useTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="login-page">
        <section className="left-secton">
          <div className="absolute -left-10 rotate-y-180 lg:rotate-y-0">
            <img src={LoginPageVars.bgPath} alt=""/>
          </div>
          
          <div className="absolute flex flex-col gap-2 lg:gap-5 bottom-35 left-15">
          <LanguageSwitcher/>

            <h1 className="text-white font-bold text-5xl">{t("loginPage.welcomeMessage")}</h1>
            <h1 className="bg-gradient-to-b from-[#501794] to-[#AE69FF] bg-clip-text text-transparent font-bold text-5xl">{t("loginPage.welcomeMessageAccent")}</h1>
          </div>

          <h1>{t("loginPage.title")}</h1>
        </section>

        <section className="right-section">

        </section>

        <div className="login-fade-bottom"/>
    </div>
  )
}

export default Login