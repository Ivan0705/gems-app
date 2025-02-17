import { j as l } from "./jsx-runtime-CfatFE5O.js";
import { c as b } from "./classNames-mpNP1gNJ.js";
import { r as q } from "./index-ClcD9ViR.js";
const m = "_button_1suqn_1",
  E = "_clear_1suqn_12",
  z = "_outline_1suqn_19",
  N = "_outline_red_1suqn_25",
  I = "_background_1suqn_31",
  g = "_backgroundInverted_1suqn_37",
  p = "_square_1suqn_42",
  x = "_size_m_1suqn_46",
  k = "_size_l_1suqn_51",
  R = "_size_xl_1suqn_56",
  v = "_disabled_1suqn_73",
  e = {
    button: m,
    clear: E,
    outline: z,
    outline_red: N,
    background: I,
    backgroundInverted: g,
    square: p,
    size_m: x,
    size_l: k,
    size_xl: R,
    disabled: v,
  };
var n = ((s) => (
    (s.CLEAR = "clear"),
    (s.OUTLINE = "outline"),
    (s.OUTLINE_RED = "outline_red"),
    (s.BACKGROUND = "background"),
    (s.BACKGROUND_INVERTED = "backgroundInverted"),
    (s.CLEAR_INVERTED = "clear_inverted"),
    s
  ))(n || {}),
  r = ((s) => (
    (s.M = "size_m"), (s.S = "size_s"), (s.XL = "size_xl"), (s.L = "size_l"), s
  ))(r || {});
const L = q.memo((s) => {
  const {
      className: o,
      children: t,
      theme: a = n.OUTLINE,
      square: u,
      disabled: _,
      size: c = r.M,
      ...d
    } = s,
    i = { [e[a]]: !0, [e.square]: u, [e[c]]: !0, [e.disabled]: _ };
  return l.jsx("button", {
    className: b(e.button, i, [o]),
    disabled: _,
    ...d,
    "data-testid": "button",
    children: t,
  });
});
L.__docgenInfo = { description: "", methods: [], displayName: "Button" };
export { L as B, n as a, r as b };
