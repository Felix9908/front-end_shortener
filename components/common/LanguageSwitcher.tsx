import i18n from "i18next";

const LanguageSwitcher = () => {
  return (
    <div className="flex gap-2">
      <button onClick={() => i18n.changeLanguage("es")}>🇪🇸 Español</button>
      <button onClick={() => i18n.changeLanguage("en")}>🇺🇸 English</button>
    </div>
  );
};

export default LanguageSwitcher;
