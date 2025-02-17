import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { A as m } from "./Avatar-DgzAITNe.js";
import { r as c } from "./index-ClcD9ViR.js";
import { c as o } from "./classNames-mpNP1gNJ.js";
const n = "_gemCard_koz1b_1",
  _ = "_gemCard_text_koz1b_14",
  p = "_gemCard_wrapper_side_koz1b_22",
  l = "_card_koz1b_29",
  g = "_title_koz1b_35",
  x = "_avatar_koz1b_45",
  r = {
    gemCard: n,
    gemCard_text: _,
    gemCard_wrapper_side: p,
    card: l,
    title: g,
    avatar: x,
  },
  C = c.memo((a) => {
    const { title: t, text: s, avatar: i, className: d } = a;
    return e.jsxs("article", {
      className: o(r.gemCard, {}, [d]),
      "data-testid": "gemcard",
      children: [
        e.jsx("div", {
          className: r.gemCard_wrapper_side,
          children: e.jsxs("div", {
            className: r.card,
            children: [
              e.jsx("b", { className: r.title, children: t }),
              e.jsx("div", {
                className: r.avatar,
                children: e.jsx(m, { size: 100, src: i }),
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: r.gemCard_text,
          children: e.jsx("div", { children: s }),
        }),
      ],
    });
  });
C.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "GemCard",
  props: {
    className: { required: !0, tsType: { name: "string" }, description: "" },
    title: { required: !0, tsType: { name: "string" }, description: "" },
    text: { required: !0, tsType: { name: "string" }, description: "" },
    avatar: { required: !0, tsType: { name: "string" }, description: "" },
  },
};
const b = "" + new URL("ruby1-Bs4YJ-7Q.jpg", import.meta.url).href;
export { C as G, b as r };
