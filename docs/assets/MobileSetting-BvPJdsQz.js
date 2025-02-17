import { j as t } from "./jsx-runtime-CfatFE5O.js";
import { r as e } from "./index-ClcD9ViR.js";
import { S as m } from "./SwitcherLanguage-KFz3PFIk.js";
import { u as p } from "./useTheme-B5stbttY.js";
import { a as h } from "./ThemeDecorator-D9J30xas.js";
import { I as o } from "./Icon-DzXKGta4.js";
import { B as w, a as d } from "./Button-CEQMFML8.js";
const _ = "_mobile_setting_1xawp_1",
  g = "_mobile_setting_wrapper_1xawp_7",
  x = "_item_1xawp_11",
  b = "_btn_1xawp_16",
  r = { mobile_setting: _, mobile_setting_wrapper: g, item: x, btn: b },
  v = ({ title: n, titleId: c, ...i }, s) =>
    e.createElement(
      "svg",
      {
        width: "800px",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "0 0 56 56",
        xmlSpace: "preserve",
        ref: s,
        "aria-labelledby": c,
        ...i,
      },
      n ? e.createElement("title", { id: c }, n) : null,
      e.createElement("path", {
        style: { fill: "--primary-color" },
        d: "M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28 s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z",
      }),
    ),
  S = e.forwardRef(v),
  u = ({ title: n, titleId: c, ...i }, s) =>
    e.createElement(
      "svg",
      {
        fill: "--black-icon",
        id: "Capa_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "75px",
        height: "75px",
        viewBox: "0 0 579.496 579.496",
        xmlSpace: "preserve",
        ref: s,
        "aria-labelledby": c,
        ...i,
      },
      n ? e.createElement("title", { id: c }, n) : null,
      e.createElement(
        "g",
        null,
        e.createElement(
          "g",
          null,
          e.createElement("path", {
            d: "M565.41,199.958c-0.869-3.237-3.023-5.385-6.475-6.469l-94.48-31.053V63.421c0-3.452-1.407-6.242-4.211-8.415 c-3.237-2.148-6.364-2.577-9.382-1.292l-94.48,30.411L298.144,3.892C296.216,1.297,293.407,0,289.741,0 c-3.672,0-6.469,1.303-8.415,3.892l-58.238,80.233l-94.48-30.411c-3.023-1.291-6.145-0.856-9.382,1.292 c-2.803,2.173-4.204,4.969-4.204,8.415v99.016L20.546,193.49c-3.452,1.089-5.612,3.237-6.475,6.469 c-1.083,3.464-0.643,6.585,1.292,9.388l58.244,80.233l-58.244,80.245c-1.94,2.589-2.375,5.723-1.292,9.388 c0.863,3.238,3.017,5.398,6.475,6.47l94.48,31.053v99.021c0,3.451,1.401,6.242,4.205,8.402c3.237,2.16,6.365,2.589,9.382,1.304 l94.48-30.423l58.238,80.246c2.154,2.803,4.963,4.21,8.415,4.21c3.446,0,6.255-1.401,8.416-4.21L356.4,495.04l94.48,30.423 c3.017,1.291,6.145,0.856,9.382-1.304c2.803-2.16,4.211-4.957,4.211-8.402v-99.016l94.48-31.053 c3.445-1.077,5.605-3.237,6.475-6.469c1.077-3.666,0.643-6.8-1.291-9.389l-58.244-80.245l58.244-80.233 C566.06,206.544,566.487,203.422,565.41,199.958z M461.389,361.899c-9.816,22.981-23.078,42.822-39.798,59.529 c-16.714,16.732-36.562,29.994-59.536,39.799c-22.974,9.822-47.074,14.725-72.314,14.725c-25.239,0-49.339-4.902-72.314-14.725 c-22.975-9.811-42.822-23.066-59.535-39.799c-16.714-16.707-29.982-36.555-39.798-59.529 c-9.817-22.974-14.719-47.081-14.719-72.319c0-25.227,4.902-49.34,14.719-72.308c9.816-22.98,23.078-42.809,39.798-59.542 c16.713-16.708,36.561-29.982,59.535-39.786c22.968-9.81,47.075-14.725,72.314-14.725c25.24,0,49.34,4.915,72.314,14.725 c22.969,9.811,42.816,23.079,59.536,39.786c16.713,16.732,29.981,36.567,39.798,59.542c9.816,22.962,14.725,47.081,14.725,72.308 C476.113,314.818,471.199,338.926,461.389,361.899z",
          }),
          e.createElement("circle", { cx: 289.741, cy: 289.745, r: 157.768 }),
        ),
      ),
    ),
  f = e.forwardRef(u),
  j = "_themeSwitcher_btn_46tfq_1",
  l = { themeSwitcher_btn: j },
  a = e.memo(() => {
    const { theme: n, toggleTheme: c } = p();
    return t.jsx(w, {
      theme: d.CLEAR,
      onClick: c,
      className: l.themeSwitcher,
      children:
        n === h.DARK
          ? t.jsx(o, { Svg: S, className: l.themeSwitcher_btn })
          : t.jsx(o, { Svg: f, className: l.themeSwitcher_btn }),
    });
  });
a.__docgenInfo = { description: "", methods: [], displayName: "ThemeSwitcher" };
const C = e.memo((n) => {
  const { onSetting: c, isShowGear: i } = n;
  return t.jsx("div", {
    className: r.mobile_setting,
    children:
      i &&
      t.jsxs("div", {
        className: r.mobile_setting_wrapper,
        children: [
          t.jsx("div", {
            className: r.item,
            onClick: c,
            children: t.jsx("div", {
              className: r.btn,
              children: t.jsx(a, {}),
            }),
          }),
          t.jsx("div", {
            className: r.item,
            onClick: c,
            children: t.jsx("div", {
              className: r.btn,
              children: t.jsx(m, {}),
            }),
          }),
        ],
      }),
  });
});
C.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "MobileSetting",
  props: {
    onSetting: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "",
    },
    isShowGear: { required: !0, tsType: { name: "boolean" }, description: "" },
  },
};
export { C as M, a as T };
