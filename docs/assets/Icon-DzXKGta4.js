import { j as m } from "./jsx-runtime-CfatFE5O.js";
import { c as i } from "./classNames-mpNP1gNJ.js";
import { r } from "./index-ClcD9ViR.js";
const e = "_icon_sx9ii_1",
  l = "_normal_sx9ii_5",
  _ = "_small_sx9ii_14",
  s = { icon: e, normal: l, small: _ },
  p = r.memo((o) => {
    const { className: c, Svg: n, size: t } = o,
      a = { [s[t]]: !0 };
    return m.jsx(n, { className: i(s.icon, a, [c]), "data-testid": "icon" });
  });
p.__docgenInfo = { description: "", methods: [], displayName: "Icon" };
export { p as I };
