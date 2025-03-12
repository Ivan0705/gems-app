const loadPathBeforeProd=`./locales/{{lng}}/{{ns}}.json`;
const loadPathAfterProd=`/gems-app/locales/{{lng}}/{{ns}}.json`;

export const loadPathBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? loadPathAfterProd
    : loadPathBeforeProd;
