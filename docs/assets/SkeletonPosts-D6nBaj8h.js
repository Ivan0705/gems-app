import { j as s } from "./jsx-runtime-CfatFE5O.js";
import { r as l } from "./index-ClcD9ViR.js";
import { S as m } from "./Skeleton-Ci9aWoFK.js";
import { c as n } from "./classNames-mpNP1gNJ.js";
import { a } from "./index-DjdpWOF8.js";
const i = "_skeletonPosts_1h4gq_1",
  r = "_skeletonPosts_item_1h4gq_4",
  c = "_skl_1h4gq_8",
  t = { skeletonPosts: i, skeletonPosts_item: r, skl: c },
  k = l.memo(() =>
    s.jsx("div", {
      className: t.skeletonPosts,
      "data-testid": "skeletonposts",
      children: a.map((e, o) =>
        s.jsx(
          "div",
          {
            className: t.skeletonPosts_item,
            children: s.jsx(m, {
              width: e.width,
              height: e.height,
              className: n(t.skl, {}, []),
            }),
          },
          o,
        ),
      ),
    }),
  );
k.__docgenInfo = { description: "", methods: [], displayName: "SkeletonPosts" };
export { k as S };
