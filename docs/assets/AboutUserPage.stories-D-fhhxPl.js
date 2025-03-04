import { j as S } from "./jsx-runtime-CfatFE5O.js";
import { T as a, a as s } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import { AboutUserPage as T } from "./AboutUserPage-CfBjS_RU.js";
import { B as k, K as x } from "./index-ck4AHZPN.js";
import { P } from "./ProviderDecorator-DdqBfATL.js";
import { S as b } from "./SuspenseDecorator-BrMsz2HA.js";
import "./Users-CnNI20WX.js";
import { U as A } from "./UserInfo-BfUsFh4p.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./Page-CAHz9qws.js";
import "./classNames-mpNP1gNJ.js";
import "./index-CBV61OJ-.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./index-DjdpWOF8.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./PostsList-DtL6sFQy.js";
import "./UsersList-Da7bLEEp.js";
import "./User-D9ZIX-9s.js";
import "./Button-CEQMFML8.js";
import "./SkeletonUsersIsLoading-ZKDM5xBe.js";
import "./UserCard-Bx_-phAH.js";
import "./Avatar-DgzAITNe.js";
import "./SkeletonUserInfo-zqpT94n8.js";
import "./UserIfoError-DJxB3W-P.js";
const or = {
    title: "page/AboutUserPage",
    component: T,
    decorators: [k, P, b],
    argTypes: { backgroundColor: { control: "control" } },
  },
  m = (L) => ({
    render: () => S.jsx(A, { disabled: !0 }),
    parameters: {
      reactRouter: x({
        location: { pathParams: { id: 1 } },
        routing: { path: L },
      }),
    },
    args: {},
  }),
  r = m("/users/:id");
r.decorators = [a(s.LIGHT)];
const o = m("/users/:id");
o.decorators = [a(s.DARK)];
const e = m("/*");
e.decorators = [a(s.LIGHT)];
const t = m("/*");
t.decorators = [a(s.DARK)];
var p, i, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: 'helper("/users/:id")',
      ...((c = (i = r.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : c.source),
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
      originalSource: 'helper("/*")',
      ...((h = (g = e.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var f, D, E;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((f = t.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: 'helper("/*")',
      ...((E = (D = t.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : E.source),
    },
  },
};
const er = ["LightNormal", "DarkNormal", "LightError", "DarkError"];
export {
  t as DarkError,
  o as DarkNormal,
  e as LightError,
  r as LightNormal,
  er as __namedExportsOrder,
  or as default,
};
