import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { c as s } from "./classNames-mpNP1gNJ.js";
import { B as x } from "./Button-CEQMFML8.js";
/* empty css              */ import { u as T } from "./useTheme-B5stbttY.js";
import { u as j } from "./useTranslation-qApjsL5e.js";
import { T as d, a as g } from "./ThemeDecorator-D9J30xas.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./i18nInstance-DCxlOlkw.js";
const E = "_error_page_q0ffd_1",
  N = { error_page: E },
  l = (u) => {
    const { className: _ } = u,
      { t: a } = j("error"),
      { theme: h } = T(),
      f = () => {
        window.location.reload();
      };
    return e.jsx("section", {
      className: s("app", {}, [h]),
      "data-testid": "error_page",
      children: e.jsxs("div", {
        className: s(N.error_page, {}, [_]),
        children: [
          e.jsx("p", { children: a("error") }),
          e.jsx(x, { onClick: f, children: a("reload page") }),
        ],
      }),
    });
  };
l.__docgenInfo = { description: "", methods: [], displayName: "ErrorPage" };
const b = {
    title: "widget/error-page/ErrorPage",
    component: l,
    argTypes: { background: { color: "control" } },
    tags: ["autodocs"],
  },
  r = { args: {} };
r.decorators = [d(g.LIGHT)];
const o = { args: {} };
o.decorators = [d(g.DARK)];
var t, c, m;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((m = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var n, p, i;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((n = o.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((i = (p = o.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : i.source),
    },
  },
};
const q = ["Light", "Dark"];
export { o as Dark, r as Light, q as __namedExportsOrder, b as default };
