import LanguageSwitcher from "components/common/LanguageSwitcher"
import { LoginPageVars } from "constants/ui/auth/LoginPageVars"
import { useTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="login-page overflow-hidden">
        <section className="left-secton">
          <div className="absolute -left-10 rotate-y-180 lg:rotate-y-0">
            <img src={LoginPageVars.bgPath} alt=""/>
          </div>
          

          <LanguageSwitcher/>
          <h1>{t("loginPage.title")}</h1>
        </section>

        <section className="right-section">

        </section>

        <div className="fade"/>
    </div>
  )
}

export default Login