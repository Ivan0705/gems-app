import { j as t } from "./jsx-runtime-CfatFE5O.js";
import { r as c } from "./index-ClcD9ViR.js";
import { u as f } from "./useTranslation-qApjsL5e.js";
const h = "_postItem_1a0yp_1",
  y = "_postItem_title_1a0yp_8",
  x = "_postItem_line_1a0yp_12",
  d = { postItem: h, postItem_title: y, postItem_line: x },
  l = c.memo((i) => {
    const { post: e } = i;
    return t.jsx("article", {
      className: d.postItem,
      "data-testid": "postitem",
      children: t.jsxs(
        "div",
        {
          children: [
            t.jsx("i", { children: e.id }),
            ".",
            t.jsxs("b", {
              className: d.postItem_title,
              children: [" ", e.title],
            }),
            t.jsx("hr", { className: d.postItem_line }),
            t.jsx("p", { children: e.body }),
          ],
        },
        e.id,
      ),
    });
  });
l.__docgenInfo = { description: "", methods: [], displayName: "PostItem" };
const j = c.memo((i) => {
  const { posts: e, search: n, error: p, isLoading: u } = i,
    { t: _ } = f("notFoundPost"),
    s = "",
    m = (o) =>
      o &&
      o.filter((r) =>
        n.toLowerCase() === s ||
        r.body.toLowerCase().includes(n) ||
        n.toLowerCase() === s
          ? r
          : r.title.toLowerCase().includes(n),
      ),
    a = e && [...m(e)],
    I =
      p || (a != null && a.length)
        ? s
        : t.jsx("div", { children: _("not_found_post") });
  return t.jsxs("div", {
    "data-testid": "postslist",
    children: [
      u === !1 ? I : s,
      e && m(e).map((o) => t.jsx(l, { post: o }, o.id)),
    ],
  });
});
j.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "PostsList",
  props: {
    posts: {
      required: !0,
      tsType: {
        name: "union",
        raw: "IPost[] | undefined",
        elements: [
          { name: "Array", elements: [{ name: "IPost" }], raw: "IPost[]" },
          { name: "undefined" },
        ],
      },
      description: "",
    },
    search: { required: !0, tsType: { name: "string" }, description: "" },
    error: {
      required: !1,
      tsType: {
        name: "union",
        raw: "FetchBaseQueryError | SerializedError | undefined",
        elements: [
          { name: "FetchBaseQueryError" },
          { name: "SerializedError" },
          { name: "undefined" },
        ],
      },
      description: "",
    },
    isLoading: { required: !1, tsType: { name: "boolean" }, description: "" },
  },
};
export { l as P, j as a };
