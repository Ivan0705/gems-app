import { j as t } from "./jsx-runtime-CfatFE5O.js";
import { r as i } from "./index-ClcD9ViR.js";
import { B as o, a as u } from "./Button-CEQMFML8.js";
import { u as m } from "./useTranslation-qApjsL5e.js";
const c = "_user_ju9tf_1",
  d = "_user_title_ju9tf_7",
  p = "_btn_ju9tf_11",
  r = { user: c, user_title: d, btn: p },
  l = i.memo((s) => {
    const { user: e, openUser: n } = s,
      { t: a } = m("button");
    return t.jsxs(
      "article",
      {
        className: r.user,
        onClick: () => n(e.id),
        "data-testid": "user",
        children: [
          t.jsx("div", { className: r.user_title, children: e.name }),
          t.jsx(o, {
            theme: u.OUTLINE,
            className: r.btn,
            children: a("read more"),
          }),
        ],
      },
      e.id,
    );
  });
l.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "User",
  props: {
    user: {
      required: !0,
      tsType: {
        name: "Partial",
        elements: [{ name: "IUser" }],
        raw: "Partial<IUser>",
      },
      description: "",
    },
    openUser: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(id: number) => void",
        signature: {
          arguments: [{ type: { name: "number" }, name: "id" }],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
};
export { l as U };
