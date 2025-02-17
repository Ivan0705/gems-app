import { j as m } from "./jsx-runtime-CfatFE5O.js";
import { c as i } from "./classNames-mpNP1gNJ.js";
import { r as n } from "./index-ClcD9ViR.js";
const d = "_Avatar_1iq2y_1",
  l = { Avatar: d },
  p = (s) => {
    const { className: a, size: t, src: r, alt: o } = s,
      e = {},
      c = n.useMemo(() => ({ width: t || 100, height: t || 100 }), [t]);
    return m.jsx("img", {
      className: i(l.Avatar, e, [a]),
      src: r,
      style: c,
      alt: o,
      "data-testid": "avatar",
    });
  };
p.__docgenInfo = { description: "", methods: [], displayName: "Avatar" };
export { p as A };
