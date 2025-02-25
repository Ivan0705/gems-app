import { U as T } from "./UserInfo-BfUsFh4p.js";
import { T as a, a as t } from "./ThemeDecorator-D9J30xas.js";
import { B as k, K as E } from "./index-ck4AHZPN.js";
import { P as I } from "./ProviderDecorator-DdqBfATL.js";
import { S as K } from "./SuspenseDecorator-BrMsz2HA.js";
/* empty css              */ import "./jsx-runtime-CfatFE5O.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./UserCard-Bx_-phAH.js";
import "./Avatar-DgzAITNe.js";
import "./classNames-mpNP1gNJ.js";
import "./Button-CEQMFML8.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./SkeletonUserInfo-zqpT94n8.js";
import "./Skeleton-Ci9aWoFK.js";
import "./UserIfoError-DJxB3W-P.js";
import "./index-CBV61OJ-.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./index-DjdpWOF8.js";
import "./PostsList-DtL6sFQy.js";
const Q = {
    title: "entities/users/UserInfo/UserInfo",
    component: T,
    argTypes: { background: { color: "control" } },
    decorators: [k, K, I],
    tags: ["autodocs"],
  },
  m = (S) => ({
    parameters: {
      reactRouter: E({
        location: { pathParams: { id: 5 } },
        routing: { path: S },
      }),
    },
    args: { disabled: !0 },
  }),
  r = m("/users/:id");
r.decorators = [a(t.LIGHT)];
const o = m("/users/:id");
o.decorators = [a(t.DARK)];
const e = m("*");
e.decorators = [a(t.LIGHT)];
const s = m("*");
s.decorators = [a(t.DARK)];
var p, c, i;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: 'helper("/users/:id")',
      ...((i = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : i.source),
    },
  },
};
var d, u, n;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((d = o.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: 'helper("/users/:id")',
      ...((n = (u = o.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var l, g, h;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: 'helper("*")',
      ...((h = (g = e.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var f, D, L;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((f = s.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: 'helper("*")',
      ...((L = (D = s.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : L.source),
    },
  },
};
const V = ["LightNormal", "DarkNormal", "LightError", "DarkError"];
export {
  s as DarkError,
  o as DarkNormal,
  e as LightError,
  r as LightNormal,
  V as __namedExportsOrder,
  Q as default,
};
