export const loadPathBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? ` /gems-app/locales/{{lng}}/{{ns}}.json`
    : `/locales/{{lng}}/{{ns}}.json`;
