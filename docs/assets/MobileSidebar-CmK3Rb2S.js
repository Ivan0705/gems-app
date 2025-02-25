import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { r as m } from "./index-ClcD9ViR.js";
import { L as d } from "./index-ck4AHZPN.js";
import { a as l } from "./consts-CW8X5FCY.js";
import { u as c } from "./useTranslation-qApjsL5e.js";
const b = "_mobileSidebar_1nr5u_1",
  p = "_mobileSidebar_menu_1nr5u_6",
  u = "_item_1nr5u_17",
  _ = "_title_1nr5u_35",
  i = { mobileSidebar: b, mobileSidebar_menu: p, item: u, title: _ },
  x = m.memo((s) => {
    const { onClose: t, show: o, display: a } = s,
      { t: n } = c("navbar");
    return e.jsx("aside", {
      "data-testid": "mobile-sidebar",
      children:
        o &&
        e.jsx("div", {
          className: i.mobileSidebar,
          style: { display: a },
          children: e.jsx("div", {
            className: i.mobileSidebar_menu,
            children: l.map((r) =>
              e.jsx(
                "div",
                {
                  className: i.item,
                  onClick: t,
                  children: e.jsx(d, {
                    to: r.to,
                    children: e.jsx("div", {
                      className: i.title,
                      children: n(r.title),
                    }),
                  }),
                },
                r.to,
              ),
            ),
          }),
        }),
    });
  });
x.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "MobileSidebar",
  props: {
    onClose: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "",
    },
    show: { required: !0, tsType: { name: "boolean" }, description: "" },
    display: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
export { x as M };
