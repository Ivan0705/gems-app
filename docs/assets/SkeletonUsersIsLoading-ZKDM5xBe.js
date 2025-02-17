import { j as s } from "./jsx-runtime-CfatFE5O.js";
import { S as n } from "./Skeleton-Ci9aWoFK.js";
import { r as i } from "./index-ClcD9ViR.js";
import { c as a } from "./classNames-mpNP1gNJ.js";
const l = "_skeletonUsersIsLoading_14bce_1",
  h = "_skeletonUsersIsLoading_title_14bce_4",
  r = "_skeletonUsersIsLoading_btn_14bce_8",
  d = "_skeletonSearch_14bce_13",
  t = {
    skeletonUsersIsLoading: l,
    skeletonUsersIsLoading_title: h,
    skeletonUsersIsLoading_btn: r,
    skeletonSearch: d,
  },
  g = [
    { width: "30%", height: 25, clsName: "skeletonSearch" },
    { width: "60%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
    { width: "70%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
    { width: "65%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
    { width: "55%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
    { width: "45%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
    { width: "60%", height: 30, clsName: "skeletonUsersIsLoading_title" },
    { width: "57%", height: 40, clsName: "skeletonUsersIsLoading_btn" },
  ],
  c = i.memo(() =>
    s.jsx("div", {
      className: t.skeletonUsersIsLoading,
      "data-testid": "skeleton_users_isLoading",
      children: g.map((e, o) =>
        s.jsx(
          n,
          {
            width: e.width,
            height: e.height,
            className: a(t[e.clsName], {}, []),
          },
          o,
        ),
      ),
    }),
  );
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "SkeletonUsertsIsloading",
};
export { c as S };
