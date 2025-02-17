import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { r as o } from "./index-ClcD9ViR.js";
import { u as a, U as p } from "./UsersList-Da7bLEEp.js";
import { u as i } from "./useTranslation-qApjsL5e.js";
import { S as u } from "./SkeletonUsersIsLoading-ZKDM5xBe.js";
import { I as l } from "./ProviderDecorator-DdqBfATL.js";
const h = "_error_3x0i0_2",
  g = { error: h },
  c = o.memo(() => {
    const { error: s } = a(),
      { t: r } = i("error");
    return e.jsx("div", {
      "data-testid": "text-trans",
      children:
        s && e.jsx("h2", { className: g.error, children: r("error_loading") }),
    });
  });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "ErrorUsersList",
};
const d = o.memo((s) => {
  const { search: r, searchHandle: t } = s,
    { isLoading: n } = a(),
    { t: m } = i("input");
  return e.jsx("div", {
    "data-testid": "users_isLoading",
    children: n
      ? e.jsx(u, {})
      : e.jsx(l, {
          type: "text",
          placeholder: m("search"),
          value: r,
          onChange: t,
        }),
  });
});
d.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "UsersIsLoadingList",
  props: {
    search: { required: !0, tsType: { name: "string" }, description: "" },
    searchHandle: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "(e: React.ChangeEvent<HTMLInputElement>) => void",
        signature: {
          arguments: [
            {
              type: {
                name: "ReactChangeEvent",
                raw: "React.ChangeEvent<HTMLInputElement>",
                elements: [{ name: "HTMLInputElement" }],
              },
              name: "e",
            },
          ],
          return: { name: "void" },
        },
      },
      description: "",
    },
  },
};
const x = "_users_p22vk_1",
  _ = { users: x },
  L = o.memo(() => {
    const { search: s, searchHandle: r, error: t, isLoading: n } = a();
    return e.jsx("section", {
      className: _.users,
      "data-testid": "users",
      children: e.jsxs("div", {
        children: [
          e.jsx(d, { search: s, searchHandle: r }),
          e.jsx(c, {}),
          e.jsx(p, { search: s, error: t, isLoading: n }),
        ],
      }),
    });
  });
L.__docgenInfo = { description: "", methods: [], displayName: "Users" };
export { L as U };
