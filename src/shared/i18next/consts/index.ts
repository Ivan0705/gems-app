const loadPathBeforeProd = `/locales/{{lng}}/{{ns}}.json`;

const url = "gems-app";

const loadPathAfterProd = `/${url}/locales/{{lng}}/{{ns}}.json`;

export const loadPathBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? loadPathAfterProd
    : loadPathBeforeProd;
