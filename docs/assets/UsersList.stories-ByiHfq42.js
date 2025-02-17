import { P as n } from "./ProviderDecorator-DdqBfATL.js";
import { T as p, a as c } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import {
  B as d,
  K as u,
} from "./index-ck4AHZPN.js";
import { U as g } from "./UsersList-Da7bLEEp.js";
import { S as h } from "./SuspenseDecorator-BrMsz2HA.js";
import "./jsx-runtime-CfatFE5O.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./classNames-mpNP1gNJ.js";
import "./index-DjdpWOF8.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./PostsList-DtL6sFQy.js";
import "./index-CBV61OJ-.js";
import "./User-D9ZIX-9s.js";
import "./Button-CEQMFML8.js";
const I = {
    title: "entities/users/UsersList/UsersList",
    component: g,
    decorators: [n, d, h],
    parameters: { reactRouter: u({ routing: { path: "*" } }) },
    tags: ["autodocs"],
  },
  r = { args: { search: "" } };
r.decorators = [p(c.LIGHT)];
const o = { args: { search: "" } };
o.decorators = [p(c.DARK)];
var s, e, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((s = r.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    search: ""
  }
}`,
      ...((t = (e = r.parameters) == null ? void 0 : e.docs) == null
        ? void 0
        : t.source),
    },
  },
};
var a, m, i;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((a = o.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    search: ""
  }
}`,
      ...((i = (m = o.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : i.source),
    },
  },
};
const O = ["Light", "Dark"];
export { o as Dark, r as Light, O as __namedExportsOrder, I as default };
