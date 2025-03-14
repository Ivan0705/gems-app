const loadPathBeforeProd = `/locales/{{lng}}/{{ns}}.json`;

const url = "gems-app";

const checkUrl = url === "gems-app" ? url : "docs";

const loadPathAfterProd = `/${checkUrl}/locales/{{lng}}/{{ns}}.json`;

export const loadPathBeforeAndAfterProd =
  process.env.NODE_ENV === "production"
    ? loadPathAfterProd
    : loadPathBeforeProd;
