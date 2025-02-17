import { U as p } from "./User-D9ZIX-9s.js";
import { P as d } from "./ProviderDecorator-DdqBfATL.js";
import { T as n, a as c } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import "./jsx-runtime-CfatFE5O.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./Button-CEQMFML8.js";
import "./classNames-mpNP1gNJ.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./index-DjdpWOF8.js";
import "./PostsList-DtL6sFQy.js";
const b = {
    title: "entities/users/User/User",
    component: p,
    decorators: [d],
    argTypes: { backgroundColor: { control: "control" } },
    tags: ["autodocs"],
  },
  u = { id: 1, name: "Maria Cat" },
  r = { args: { user: { id: 1, name: "Maria Cat" } } };
r.decorators = [n(c.LIGHT)];
const o = { args: { user: u } };
o.decorators = [n(c.DARK)];
var a, e, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((a = r.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    user: {
      id: 1,
      name: "Maria Cat"
    }
  }
}`,
      ...((t = (e = r.parameters) == null ? void 0 : e.docs) == null
        ? void 0
        : t.source),
    },
  },
};
var s, m, i;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((s = o.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    user: user
  }
}`,
      ...((i = (m = o.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : i.source),
    },
  },
};
const v = ["Light", "Dark"];
export { o as Dark, r as Light, v as __namedExportsOrder, b as default };
