import { j as l } from "./jsx-runtime-CfatFE5O.js";
import { r as p } from "./index-ClcD9ViR.js";
import {
  u as U,
  b as L,
  c as g,
  d as x,
} from "./ProviderDecorator-DdqBfATL.js";
import { U as v } from "./User-D9ZIX-9s.js";
import { a as j } from "./index-ck4AHZPN.js";
import { u as _ } from "./useTranslation-qApjsL5e.js";
const w = () => {
    const [r, o] = p.useState(""),
      { data: a, isLoading: n, error: c } = U.useFetchAllUsersQuery(10),
      e = (s) => o(s.target.value),
      i = L((s) => e(s), 1e3),
      d = g((s) => e(s), 1e3);
    return {
      search: r,
      searchHandle: e,
      searchHandleThottled: i,
      searchHandleDebounced: d,
      users: a,
      isLoading: n,
      error: c,
    };
  },
  C = p.memo((r) => {
    const { search: o, error: a, isLoading: n } = r,
      c = j(),
      { users: e } = w(),
      { t: i } = _("notFoundUser"),
      d = (t) => {
        c(x(t));
      },
      s = "",
      m = (t) =>
        t.filter((h) =>
          o.toLowerCase() === s
            ? h
            : h.name.toLocaleLowerCase().includes(o.toLowerCase()) ||
              o.toLowerCase() === s,
        ),
      u = e && [...m(e)],
      f =
        a || (u != null && u.length)
          ? s
          : l.jsx("div", { children: i("not_found_user") });
    return l.jsxs("div", {
      "data-testid": "users_list",
      children: [
        n === !1 ? f : s,
        e && m(e).map((t) => l.jsx(v, { user: t, openUser: d }, t.id)),
      ],
    });
  });
C.__docgenInfo = { description: "", methods: [], displayName: "UsersList" };
export { C as U, w as u };
