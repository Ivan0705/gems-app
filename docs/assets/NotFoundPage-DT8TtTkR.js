import { j as o } from "./jsx-runtime-CfatFE5O.js";
import { P as n } from "./Page-CAHz9qws.js";
import { r as e } from "./index-ClcD9ViR.js";
import { u as s } from "./useTranslation-qApjsL5e.js";
const a = "_notFoundPage_182h7_1",
  r = { notFoundPage: a },
  d = e.memo(() => {
    const { t } = s("error");
    return o.jsx(n, {
      className: r.notFoundPage,
      children: o.jsx("section", {
        "data-testid": "not_found_page",
        children: t("not found"),
      }),
    });
  });
d.__docgenInfo = { description: "", methods: [], displayName: "NotFoundPage" };
export { d as N };
