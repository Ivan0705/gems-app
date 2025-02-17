import { j as s } from "./jsx-runtime-CfatFE5O.js";
import { r as _ } from "./index-ClcD9ViR.js";
import { L as d } from "./index-ck4AHZPN.js";
import { a } from "./consts-CW8X5FCY.js";
import { u as o } from "./useTranslation-qApjsL5e.js";
const r = "_desktop_sidebar_menu_qlhq4_1",
  m = "_desktop_sidebar_menu_items_list_qlhq4_8",
  n = "_desktop_sidebar_menu_item_qlhq4_8",
  p = "_desktop_sidebar_qlhq4_1",
  l = "_title_qlhq4_36",
  e = {
    desktop_sidebar_menu: r,
    desktop_sidebar_menu_items_list: m,
    desktop_sidebar_menu_item: n,
    desktop_sidebar: p,
    title: l,
  },
  c = _.memo(() => {
    const { t: i } = o("navbar");
    return s.jsx("aside", {
      className: e.desktop_sidebar,
      "data-testid": "desktop-sidebar",
      children: s.jsx("div", {
        className: e.desktop_sidebar_menu,
        children: s.jsx("div", {
          className: e.desktop_sidebar_menu_items_list,
          children: a.map((t) =>
            s.jsx(
              "div",
              {
                className: e.desktop_sidebar_menu_item,
                children: s.jsx(d, {
                  className: e.title,
                  to: t.to,
                  children: i(t.title),
                }),
              },
              t.to,
            ),
          ),
        }),
      }),
    });
  });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "DesktopSidebar",
};
export { c as D };
