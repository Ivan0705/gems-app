import { j as a } from "./jsx-runtime-CfatFE5O.js";
import { r as n } from "./index-ClcD9ViR.js";
import { N as s } from "./Navbar-C7Gcun5b.js";
import { F as p } from "./Footer-DiBXA_HS.js";
const r = "_main_15ip7_1",
  _ = "_main_wrapper_15ip7_7",
  o = "_main_empty_15ip7_10",
  c = "_main_empty_title_15ip7_13",
  e = { main: r, main_wrapper: _, main_empty: o, main_empty_title: c },
  d = n.memo((m) => {
    const { children: i } = m,
      t = a.jsx("div", {
        className: e.main_empty,
        children: a.jsx("b", {
          className: e.main_empty_title,
          children: "Empty",
        }),
      });
    return a.jsxs("div", {
      className: e.main,
      "data-testid": "main_page",
      children: [
        a.jsx(s, {}),
        a.jsx("main", { className: e.main_wrapper, children: i || t }),
        a.jsx(p, {}),
      ],
    });
  });
d.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "MainPage",
  props: {
    children: { required: !1, tsType: { name: "ReactNode" }, description: "" },
  },
};
export { d as M };
