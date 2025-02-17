import { j as e } from "./jsx-runtime-CfatFE5O.js";
import { r as n } from "./index-ClcD9ViR.js";
import { S as o } from "./Skeleton-Ci9aWoFK.js";
const t = "_skeletonUserInfo_7h3ku_1",
  r = "_skeletonUserInfo_avatar_7h3ku_5",
  l = "_skeletonUserInfo_aboutUser_7h3ku_8",
  _ = "_skeletonUserInfo_userInfo_7h3ku_17",
  a = "_skeletonUserInfo_userInfo_skeleton_7h3ku_20",
  k = "_skeletonUserInfo_aboutCompany_skeleton_7h3ku_58",
  s = {
    skeletonUserInfo: t,
    skeletonUserInfo_avatar: r,
    skeletonUserInfo_aboutUser: l,
    skeletonUserInfo_userInfo: _,
    skeletonUserInfo_userInfo_skeleton: a,
    skeletonUserInfo_aboutCompany_skeleton: k,
  },
  f = n.memo(() =>
    e.jsxs("div", {
      className: s.skeletonUserInfo,
      "data-testid": "skeleton_user_info",
      children: [
        e.jsxs("div", {
          className: s.skeletonUserInfo_aboutUser,
          children: [
            e.jsxs("div", {
              className: s.skeletonUserInfo_avatar,
              children: [
                e.jsx(o, { width: 100, height: 30 }),
                e.jsx(o, { border: "50%", width: 230, height: 230 }),
              ],
            }),
            e.jsx("div", {
              className: s.skeletonUserInfo_userInfo,
              children: e.jsx(o, {
                className: s.skeletonUserInfo_userInfo_skeleton,
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: s.skeletonUserInfo_aboutCompany,
          children: e.jsx(o, {
            className: s.skeletonUserInfo_aboutCompany_skeleton,
          }),
        }),
      ],
    }),
  );
f.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "SkeletonUserInfo",
};
export { f as S };
