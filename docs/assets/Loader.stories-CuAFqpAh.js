import { j as n } from "./jsx-runtime-CfatFE5O.js";
import { c as g } from "./classNames-mpNP1gNJ.js";
import { r as u } from "./index-ClcD9ViR.js";
import { u as f } from "./useTranslation-qApjsL5e.js";
import { T as d, a as p } from "./ThemeDecorator-D9J30xas.js";
import { P as h } from "./ProviderDecorator-DdqBfATL.js";
/* empty css              */ import "./_commonjsHelpers-Cpj98o6Y.js";
import "./i18nInstance-DCxlOlkw.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./index-DjdpWOF8.js";
import "./PostsList-DtL6sFQy.js";
const x = "_lds_ellipsis_1e61i_1",
  L = "_lds_ellipsis1_1e61i_1",
  T = "_lds_ellipsis3_1e61i_1",
  D = "_lds_ellipsis2_1e61i_1",
  j = {
    lds_ellipsis: x,
    "lds-ellipsis1": "_lds-ellipsis1_1e61i_1",
    "lds-ellipsis2": "_lds-ellipsis2_1e61i_1",
    "lds-ellipsis3": "_lds-ellipsis3_1e61i_1",
    lds_ellipsis1: L,
    lds_ellipsis3: T,
    lds_ellipsis2: D,
  },
  c = u.memo(({ className: m }) => {
    const { t: _ } = f("loading");
    return n.jsx("div", {
      className: g(j.lds_ellipsis, {}, [m]),
      "data-testid": "loader",
      children: _("loading"),
    });
  });
c.__docgenInfo = { description: "", methods: [], displayName: "Loader" };
const H = {
    title: "shared/Loader",
    component: c,
    decorators: [h],
    tags: ["autodocs"],
    argTypes: { backgroundColor: { color: "control" } },
  },
  s = { args: {} };
s.decorators = [d(p.LIGHT)];
const e = { args: {} };
e.decorators = [d(p.DARK)];
var r, o, i;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((r = s.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((i = (o = s.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : i.source),
    },
  },
};
var l, a, t;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((t = (a = e.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : t.source),
    },
  },
};
const K = ["Light", "Dark"];
export { e as Dark, s as Light, K as __namedExportsOrder, H as default };
