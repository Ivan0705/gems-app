import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { r as I } from "./index-ClcD9ViR.js";
import { u as h } from "./ProviderDecorator-DdqBfATL.js";
import { U } from "./UserCard-Bx_-phAH.js";
import { S as l } from "./SkeletonUserInfo-zqpT94n8.js";
import { U as x } from "./UserIfoError-DJxB3W-P.js";
import { u as j, a as _, b as g } from "./index-ck4AHZPN.js";
import { u as y } from "./useTranslation-qApjsL5e.js";
const N = "_userInfo_1ppvh_1",
  k = { userInfo: N },
  v = I.memo((n) => {
    var a, t;
    const { id: i } = j(),
      m = Number(i),
      { t: r } = y("button"),
      { disabled: c } = n,
      { data: o, isLoading: d, error: p } = h.useFetchUserByIdQuery(m),
      u = _(),
      f =
        ((t = (a = g().state) == null ? void 0 : a.from) == null
          ? void 0
          : t.pathname) || "/users",
      b = () => u(f);
    return e.jsxs("section", {
      className: k.userInfo,
      "data-testid": "user_info",
      children: [
        (o == null ? void 0 : o.length) === 0 &&
          e.jsx("h1", { children: r("oops") }),
        d && e.jsx(l, {}),
        p && e.jsx(x, {}),
        o &&
          o.map((s) =>
            e.jsx(
              U,
              {
                id: s.id,
                name: s.name,
                username: s.username,
                email: s.email,
                address: s.address,
                phone: s.phone,
                website: s.website,
                company: s.company,
                goToBack: b,
                btn_title: r("back"),
                disabled: c,
              },
              s.id,
            ),
          ),
      ],
    });
  });
v.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "UserInfo",
  props: {
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
  },
};
export { v as U };
