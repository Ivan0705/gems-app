import { B as S, K as D } from "./index-ck4AHZPN.js";
import { M as L } from "./MobileSidebar-CmK3Rb2S.js";
import { S as T } from "./SuspenseDecorator-BrMsz2HA.js";
import { P as b } from "./ProviderDecorator-DdqBfATL.js";
import { T as a, a as t } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import { f as n } from "./index-Bm9fFANh.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./index-CBV61OJ-.js";
import "./jsx-runtime-CfatFE5O.js";
import "./consts-CW8X5FCY.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./classNames-mpNP1gNJ.js";
import "./index-DjdpWOF8.js";
import "./PostsList-DtL6sFQy.js";
const F = {
    title: "widget/menu/MobileSidebar",
    component: L,
    argTypes: { background: { color: "control" } },
    decorators: [S, T, b],
    parameters: {
      reactRouter: D({ location: { pathParams: {} }, routing: { path: "/*" } }),
    },
    tags: ["autodocs"],
  },
  r = { args: { show: !0, onClose: n(), display: "grid" } };
r.decorators = [a(t.LIGHT)];
const o = { args: { show: !0, onClose: n(), display: "grid" } };
o.decorators = [a(t.DARK)];
const e = { args: { show: !0, onClose: n() } };
e.decorators = [a(t.LIGHT)];
const s = { args: { show: !0, onClose: n() } };
s.decorators = [a(t.DARK)];
var m, i, p;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    show: true,
    onClose: fn(),
    display: \`grid\`
  }
}`,
      ...((p = (i = r.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var c, d, l;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((c = o.parameters) == null ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    show: true,
    onClose: fn(),
    display: \`grid\`
  }
}`,
      ...((l = (d = o.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : l.source),
    },
  },
};
var u, g, h;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((u = e.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    show: true,
    onClose: fn()
  }
}`,
      ...((h = (g = e.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var f, w, C;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((f = s.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    show: true,
    onClose: fn()
  }
}`,
      ...((C = (w = s.parameters) == null ? void 0 : w.docs) == null
        ? void 0
        : C.source),
    },
  },
};
const J = ["LightShow", "DarkShow", "LightClose", "DarkClose"];
export {
  s as DarkClose,
  o as DarkShow,
  e as LightClose,
  r as LightShow,
  J as __namedExportsOrder,
  F as default,
};
