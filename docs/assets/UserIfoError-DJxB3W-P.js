import { j as r } from "./jsx-runtime-CfatFE5O.js";
import { u as e } from "./useTranslation-qApjsL5e.js";
const n = "_userInfoError_wlgez_1",
  t = "_error_wlgez_6",
  o = { userInfoError: n, error: t },
  a = () => {
    const { t: s } = e("error");
    return r.jsx("div", {
      className: o.userInfoError,
      "data-testid": "userInfoError",
      children: r.jsx("h1", { className: o.error, children: s("error") }),
    });
  };
a.__docgenInfo = { description: "", methods: [], displayName: "UserInfoError" };
export { a as U };
