import i18n from "../../i18next/config/i18next";

export const I18nextDecorator = i18n.on("languageChanged", (locale) => {
  const direction = i18n.dir(locale);
  document.dir = direction;
});
