import { j as l } from "./jsx-runtime-CfatFE5O.js";
import { R as N, r as t } from "./index-ClcD9ViR.js";
import "./i18next-cOPaZ5Oq.js";
import { I as _ } from "./Icon-DzXKGta4.js";
import { B as F, a as M } from "./Button-CEQMFML8.js";
import { u as R } from "./useTranslation-qApjsL5e.js";
var b = { exports: {} },
  r = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n = typeof Symbol == "function" && Symbol.for,
  S = n ? Symbol.for("react.element") : 60103,
  x = n ? Symbol.for("react.portal") : 60106,
  i = n ? Symbol.for("react.fragment") : 60107,
  m = n ? Symbol.for("react.strict_mode") : 60108,
  p = n ? Symbol.for("react.profiler") : 60114,
  u = n ? Symbol.for("react.provider") : 60109,
  f = n ? Symbol.for("react.context") : 60110,
  L = n ? Symbol.for("react.async_mode") : 60111,
  g = n ? Symbol.for("react.concurrent_mode") : 60111,
  y = n ? Symbol.for("react.forward_ref") : 60112,
  d = n ? Symbol.for("react.suspense") : 60113,
  k = n ? Symbol.for("react.suspense_list") : 60120,
  w = n ? Symbol.for("react.memo") : 60115,
  h = n ? Symbol.for("react.lazy") : 60116,
  z = n ? Symbol.for("react.block") : 60121,
  T = n ? Symbol.for("react.fundamental") : 60117,
  j = n ? Symbol.for("react.responder") : 60118,
  A = n ? Symbol.for("react.scope") : 60119;
function o(e) {
  if (typeof e == "object" && e !== null) {
    var s = e.$$typeof;
    switch (s) {
      case S:
        switch (((e = e.type), e)) {
          case L:
          case g:
          case i:
          case p:
          case m:
          case d:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case f:
              case y:
              case h:
              case w:
              case u:
                return e;
              default:
                return s;
            }
        }
      case x:
        return s;
    }
  }
}
function v(e) {
  return o(e) === g;
}
r.AsyncMode = L;
r.ConcurrentMode = g;
r.ContextConsumer = f;
r.ContextProvider = u;
r.Element = S;
r.ForwardRef = y;
r.Fragment = i;
r.Lazy = h;
r.Memo = w;
r.Portal = x;
r.Profiler = p;
r.StrictMode = m;
r.Suspense = d;
r.isAsyncMode = function (e) {
  return v(e) || o(e) === L;
};
r.isConcurrentMode = v;
r.isContextConsumer = function (e) {
  return o(e) === f;
};
r.isContextProvider = function (e) {
  return o(e) === u;
};
r.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === S;
};
r.isForwardRef = function (e) {
  return o(e) === y;
};
r.isFragment = function (e) {
  return o(e) === i;
};
r.isLazy = function (e) {
  return o(e) === h;
};
r.isMemo = function (e) {
  return o(e) === w;
};
r.isPortal = function (e) {
  return o(e) === x;
};
r.isProfiler = function (e) {
  return o(e) === p;
};
r.isStrictMode = function (e) {
  return o(e) === m;
};
r.isSuspense = function (e) {
  return o(e) === d;
};
r.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === i ||
    e === g ||
    e === p ||
    e === m ||
    e === d ||
    e === k ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === h ||
        e.$$typeof === w ||
        e.$$typeof === u ||
        e.$$typeof === f ||
        e.$$typeof === y ||
        e.$$typeof === T ||
        e.$$typeof === j ||
        e.$$typeof === A ||
        e.$$typeof === z))
  );
};
r.typeOf = o;
b.exports = r;
var P = b.exports,
  $ = P,
  V = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  B = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  C = {};
C[$.ForwardRef] = V;
C[$.Memo] = B;
N.createElement;
const I = ({ title: e, titleId: s, ...a }, E) =>
    t.createElement(
      "svg",
      {
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 55.2 38.4",
        style: { enableBackground: "new 0 0 55.2 38.4" },
        xmlSpace: "preserve",
        ref: E,
        "aria-labelledby": s,
        ...a,
      },
      e ? t.createElement("title", { id: s }, e) : null,
      t.createElement(
        "style",
        { type: "text/css" },
        ".st0{fill:#FEFEFE;} .st1{fill:#C8102E;} .st2{fill:#012169;}",
      ),
      t.createElement(
        "g",
        null,
        t.createElement("path", {
          className: "st0",
          d: "M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z",
        }),
        t.createElement("polygon", {
          className: "st1",
          points:
            "23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03",
        }),
        t.createElement("path", {
          className: "st2",
          d: "M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z",
        }),
        t.createElement("path", {
          className: "st2",
          d: "M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z",
        }),
        t.createElement("path", {
          className: "st2",
          d: "M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z",
        }),
        t.createElement("path", {
          className: "st2",
          d: "M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z",
        }),
        t.createElement("polygon", {
          className: "st2",
          points: "0,12.8 7.65,12.8 0,8.97 0,12.8",
        }),
        t.createElement("polygon", {
          className: "st2",
          points: "55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8",
        }),
        t.createElement("polygon", {
          className: "st2",
          points: "55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6",
        }),
        t.createElement("polygon", {
          className: "st2",
          points: "0,25.6 7.65,25.6 0,29.43 0,25.6",
        }),
        t.createElement("polygon", {
          className: "st1",
          points: "55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25",
        }),
        t.createElement("polygon", {
          className: "st1",
          points: "19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6",
        }),
        t.createElement("polygon", {
          className: "st1",
          points: "10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81",
        }),
        t.createElement("polygon", {
          className: "st1",
          points: "44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59",
        }),
      ),
    ),
  H = t.forwardRef(I),
  O = ({ title: e, titleId: s, ...a }, E) =>
    t.createElement(
      "svg",
      {
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 55.32 38.52",
        style: { enableBackground: "new 0 0 55.32 38.52" },
        xmlSpace: "preserve",
        ref: E,
        "aria-labelledby": s,
        ...a,
      },
      e ? t.createElement("title", { id: s }, e) : null,
      t.createElement(
        "style",
        { type: "text/css" },
        `\r
        .st0 {\r
            fill: #FFFFFF;\r
        }\r
\r
        .st1 {\r
            fill: #D52B1E;\r
        }\r
\r
        .st2 {\r
            fill: #0039A6;\r
        }\r
\r
        .st3 {\r
            fill: none;\r
            stroke: #CCCCCC;\r
            stroke-width: 0.1199;\r
            stroke-miterlimit: 2.6131;\r
        }\r
    `,
      ),
      t.createElement(
        "g",
        null,
        t.createElement("path", {
          className: "st0",
          d: "M3.09,0.06h49.13c1.67,0,3.03,1.36,3.03,3.03v16.17H0.06V3.09C0.06,1.42,1.42,0.06,3.09,0.06L3.09,0.06z",
        }),
        t.createElement("path", {
          className: "st1",
          d: "M0.06,19.26h55.2v16.17c0,1.67-1.36,3.03-3.03,3.03H3.09c-1.67,0-3.03-1.37-3.03-3.03V19.26L0.06,19.26z",
        }),
        t.createElement("polygon", {
          className: "st2",
          points: "0.06,12.86 55.26,12.86 55.26,25.66 0.06,25.66 0.06,12.86",
        }),
        t.createElement("path", {
          className: "st3",
          d: "M3.09,0.06h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.09 c-1.67,0-3.03-1.37-3.03-3.03V3.09C0.06,1.42,1.42,0.06,3.09,0.06L3.09,0.06z",
        }),
      ),
    ),
  D = t.forwardRef(O),
  X = "_switherLanguage_1ireg_1",
  q = "_switherLanguage_flag_1ireg_6",
  U = "_switherLanguage_title_1ireg_9",
  c = { switherLanguage: X, switherLanguage_flag: q, switherLanguage_title: U },
  W = t.memo(() => {
    const { t: e, i18n: s } = R("language"),
      a = () => {
        s.changeLanguage(s.language === "ru" ? "en" : "ru");
      };
    return l.jsx("div", {
      "data-testid": "switcher_language",
      children: l.jsxs(F, {
        theme: M.CLEAR,
        onClick: () => a(),
        className: c.switherLanguage,
        children: [
          s.language === "ru"
            ? l.jsx(_, { Svg: D, className: c.switherLanguage_flag })
            : l.jsx(_, { Svg: H, className: c.switherLanguage_flag }),
          l.jsx("div", {
            className: c.switherLanguage_title,
            children: e("language"),
          }),
        ],
      }),
    });
  });
W.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "SwitcherLanguage",
};
export { W as S };
