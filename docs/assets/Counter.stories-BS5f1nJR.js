import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { r as b } from "./index-ClcD9ViR.js";
import {
  e as x,
  f,
  g as N,
  i as T,
  h as j,
  P as D,
} from "./ProviderDecorator-DdqBfATL.js";
import { B as a, a as m } from "./Button-CEQMFML8.js";
import { T as h, a as g } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import "./_commonjsHelpers-Cpj98o6Y.js";
import "./SkeletonPosts-D6nBaj8h.js";
import "./Skeleton-Ci9aWoFK.js";
import "./classNames-mpNP1gNJ.js";
import "./index-DjdpWOF8.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
import "./PostsList-DtL6sFQy.js";
const k = "_counter_16t3a_1",
  E = "_counter_title_16t3a_5",
  L = "_counter_btns_16t3a_9",
  v = "_btn_16t3a_14",
  r = { counter: k, counter_title: E, counter_btns: L, btn: v },
  I = () => x(),
  S = (t) => t.counter,
  B = f(S, (t) => t.value),
  O = () => {
    const t = N(B),
      s = I();
    return {
      incrementCounter: () => s(T()),
      decrementCounter: () => s(j()),
      count: t,
    };
  },
  C = b.memo(() => {
    const { incrementCounter: t, decrementCounter: s, count: c } = O();
    return e.jsxs("section", {
      className: r.counter,
      "data-testid": "counter",
      children: [
        e.jsx("div", { className: r.counter_title, children: c }),
        e.jsxs("div", {
          className: r.counter_btns,
          children: [
            e.jsx(a, {
              onClick: t,
              theme: m.OUTLINE,
              className: r.btn,
              children: "+",
            }),
            e.jsx(a, {
              theme: m.OUTLINE,
              onClick: s,
              className: r.btn,
              children: "-",
            }),
          ],
        }),
      ],
    });
  });
C.__docgenInfo = { description: "", methods: [], displayName: "Counter" };
const Q = {
    title: "entities/counter/Counter",
    component: C,
    decorators: [D],
    tags: ["autodocs"],
    argTypes: { backgroundColor: { control: "color" } },
  },
  o = { args: {} };
o.decorators = [h(g.LIGHT)];
const n = { args: {} };
n.decorators = [h(g.DARK)];
var i, u, p;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((i = o.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((p = (u = o.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var d, l, _;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((d = n.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((_ = (l = n.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : _.source),
    },
  },
};
const W = ["Light", "Dark"];
export { n as Dark, o as Light, W as __namedExportsOrder, Q as default };
