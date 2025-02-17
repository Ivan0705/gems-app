import { j as e } from "./jsx-runtime-CfatFE5O.js";
const c = "_footer_1dpct_1",
  n = "_footer_title_1dpct_12",
  o = { footer: c, footer_title: n },
  a = () => {
    const t = new Date().getFullYear(),
      r = "2024-" + t.toString(),
      s = "Ⓒ " + (t === 2024 ? "2024" : r) + " Gems";
    return e.jsx("footer", {
      className: o.footer,
      "data-testid": "footer",
      children: e.jsxs("div", {
        className: o.footer_title,
        children: [s, " "],
      }),
    });
  };
a.__docgenInfo = { description: "", methods: [], displayName: "Footer" };
export { a as F };
