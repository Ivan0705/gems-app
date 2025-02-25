import { j as a } from "./jsx-runtime-CfatFE5O.js";
import { r as e } from "./index-ClcD9ViR.js";
import { F as d } from "./diamond-CB7rjFlk.js";
import { I as i } from "./Icon-DzXKGta4.js";
import { D as p } from "./DesktopSidebar-Dvf619uw.js";
import { M as h } from "./MobileSidebar-CmK3Rb2S.js";
import { T as w, M as x } from "./MobileSetting-BvPJdsQz.js";
import { B as _, a as b } from "./Button-CEQMFML8.js";
import { S as f } from "./SwitcherLanguage-KFz3PFIk.js";
import { a as u } from "./index-ck4AHZPN.js";
const S = "_navbar_1mios_1",
  j = "_navbar_wrapper_1mios_17",
  M = "_navbar_burgerMenu_1mios_23",
  N = "_navbar_gearSetting_1mios_23",
  B = "_navbar_logo_1mios_27",
  L = "_navbar_logoPicture_1mios_39",
  E = "_navbar_btns_1mios_45",
  y = "_navbar_mobile_1mios_51",
  R = "_btn_1mios_56",
  k = "_burgerBtn_1mios_68",
  C = "_gearBtn_1mios_69",
  r = {
    navbar: S,
    navbar_wrapper: j,
    navbar_burgerMenu: M,
    navbar_gearSetting: N,
    navbar_logo: B,
    navbar_logoPicture: L,
    navbar_btns: E,
    navbar_mobile: y,
    btn: R,
    burgerBtn: k,
    gearBtn: C,
  },
  H = ({ title: s, titleId: n, ...t }, o) =>
    e.createElement(
      "svg",
      {
        className: "svg-inline--fa fa-fire fa-w-12 ",
        "data-icon": "fire",
        width: "800px",
        height: "800px",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: o,
        "aria-labelledby": n,
        ...t,
      },
      s ? e.createElement("title", { id: n }, s) : null,
      e.createElement("path", {
        d: "M5 6.5H19V8H5V6.5Z",
        fill: "--primary-color",
      }),
      e.createElement("path", {
        d: "M5 16.5H19V18H5V16.5Z",
        fill: "--primary-color",
      }),
      e.createElement("path", {
        d: "M5 11.5H19V13H5V11.5Z",
        fill: "--primary-color",
      }),
    ),
  V = e.forwardRef(H),
  D = ({ title: s, titleId: n, ...t }, o) =>
    e.createElement(
      "svg",
      {
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 512 512",
        style: { enableBackground: "new 0 0 512 512" },
        xmlSpace: "preserve",
        ref: o,
        "aria-labelledby": n,
        ...t,
      },
      s ? e.createElement("title", { id: n }, s) : null,
      e.createElement(
        "g",
        { id: "XMLID_1_" },
        e.createElement("path", {
          id: "XMLID_5_",
          style: { fill: "--primary-color" },
          d: "M512,284v-58.4L441,202l-16.6-40.2l32.3-67.1l-41-41l-66.3,33.1l-40.2-16.6L284,0h-58.4 l-22.9,71l-41,16.6L94.7,55.2l-41,41l33.1,66.3l-16.6,40.2L0,228v58.4L71,310l16.6,40.2l-32.3,67.1l41,41l66.3-33.1l40.2,16.6 L228,512h58.4l22.9-71l41-16.6l67.1,32.3l41-41l-33.9-66.3l17.4-40.2L512,284L512,284z M255.6,366.1 c-60.7,0-109.7-48.9-109.7-109.7s48.9-110.4,109.7-110.4s109.7,48.9,109.7,109.7S316.4,366.1,255.6,366.1z",
        }),
      ),
    ),
  F = e.forwardRef(D),
  G = e.memo(() => {
    const [s, n] = e.useState(!1),
      [t, o] = e.useState(!1),
      v = u(),
      c = () => {
        n((l) => !l), o(!1);
      },
      m = () => {
        o((l) => !l), n(!1);
      },
      g = () => {
        v("/");
      };
    return a.jsxs("header", {
      className: r.navbar,
      "data-testid": "navbar",
      children: [
        a.jsxs("div", {
          className: r.navbar_wrapper,
          children: [
            a.jsxs("div", {
              className: r.navbar_logo,
              "data-testid": "diamond",
              onClick: g,
              children: [
                a.jsx(i, {
                  Svg: d,
                  className: r.navbar_logoPicture,
                  "data-cy": "diamond",
                }),
                a.jsx("h4", { children: "Gems" }),
              ],
            }),
            a.jsxs("div", {
              className: r.navbar_btns,
              children: [
                a.jsx("div", {
                  className: r.btn,
                  role: "theme_switcher",
                  children: a.jsx(w, {}),
                }),
                a.jsx("div", { className: r.btn, children: a.jsx(f, {}) }),
                a.jsxs("div", {
                  className: r.navbar_mobile,
                  children: [
                    a.jsx(_, {
                      theme: b.CLEAR,
                      className: r.gearBtn,
                      onClick: m,
                      "data-testid": "gear",
                      children: a.jsx(i, {
                        Svg: F,
                        className: r.navbar_gearSetting,
                      }),
                    }),
                    a.jsx(_, {
                      theme: b.CLEAR,
                      className: r.burgerBtn,
                      onClick: c,
                      children: a.jsx(i, {
                        Svg: V,
                        className: r.navbar_burgerMenu,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s && a.jsx(h, { show: s, onClose: c }),
        t && a.jsx(x, { onSetting: m, isShowGear: t }),
        a.jsx(p, {}),
      ],
    });
  });
G.__docgenInfo = { description: "", methods: [], displayName: "Navbar" };
export { G as N };
