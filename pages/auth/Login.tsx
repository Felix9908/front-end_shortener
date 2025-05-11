import LanguageSwitcher from "components/common/LanguageSwitcher"
import { LoginPageVars } from "constants/ui/auth/LoginPageVars"
import { useTranslation } from "react-i18next"

const Login = () => {
  const { t } = useTranslation("auth");

  return (
    <div className="login-page">
        <section className="left-secton">
          <img src={LoginPageVars.bgPath} alt="" />
          <LanguageSwitcher/>
          <h1>{t("loginPage.title")}</h1>
        </section>

        <section className="right-section">

        </section>
    </div>
  )
}

export default Login