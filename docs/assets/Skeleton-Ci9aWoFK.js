import { j as l } from "./jsx-runtime-CfatFE5O.js";
import { c } from "./classNames-mpNP1gNJ.js";
import { r as d } from "./index-ClcD9ViR.js";
const m = "_Skeleton_76iau_1",
  i = "_load_76iau_1",
  p = { Skeleton: m, load: i },
  _ = d.memo((o) => {
    const { className: s, height: e, width: t, border: a } = o,
      n = {},
      r = { height: e, width: t, borderRadius: a };
    return l.jsx("div", {
      className: c(p.Skeleton, n, [s]),
      style: r,
      "data-testid": "skeleton",
    });
  });
_.__docgenInfo = { description: "", methods: [], displayName: "Skeleton" };
export { _ as S };
