import i18n from "i18next";

export const changeLang = (lang: string) => {
  i18n.changeLanguage(lang); // "es" o "en"
};
