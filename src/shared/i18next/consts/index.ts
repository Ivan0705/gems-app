const loadPathBeforeProd=`./locales/{{lng}}/{{ns}}.json`;
const loadPathAfterProd=`/*/locales/{{lng}}/{{ns}}.json`;

export const loadPathBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? loadPathAfterProd
    : loadPathBeforeProd;
