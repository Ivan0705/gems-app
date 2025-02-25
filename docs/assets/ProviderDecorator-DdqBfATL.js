var qr = Object.defineProperty;
var Qr = (e, t, r) =>
  t in e
    ? qr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var We = (e, t, r) => Qr(e, typeof t != "symbol" ? t + "" : t, r);
import { j as F } from "./jsx-runtime-CfatFE5O.js";
import { r as P, a as vt, R as Nr } from "./index-ClcD9ViR.js";
import { S as zr } from "./SkeletonPosts-D6nBaj8h.js";
import { c as Fr } from "./classNames-mpNP1gNJ.js";
import { u as Yt } from "./useTranslation-qApjsL5e.js";
import { a as $r } from "./PostsList-DtL6sFQy.js";
function z(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Lr = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  St = Lr,
  He = () => Math.random().toString(36).substring(7).split("").join("."),
  Ur = {
    INIT: `@@redux/INIT${He()}`,
    REPLACE: `@@redux/REPLACE${He()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${He()}`,
  },
  qe = Ur;
function G(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Zt(e, t, r) {
  if (typeof e != "function") throw new Error(z(2));
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(z(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(z(1));
    return r(Zt)(e, t);
  }
  let n = e,
    i = t,
    a = new Map(),
    l = a,
    m = 0,
    v = !1;
  function y() {
    l === a &&
      ((l = new Map()),
      a.forEach((p, g) => {
        l.set(g, p);
      }));
  }
  function S() {
    if (v) throw new Error(z(3));
    return i;
  }
  function w(p) {
    if (typeof p != "function") throw new Error(z(4));
    if (v) throw new Error(z(5));
    let g = !0;
    y();
    const d = m++;
    return (
      l.set(d, p),
      function () {
        if (g) {
          if (v) throw new Error(z(6));
          (g = !1), y(), l.delete(d), (a = null);
        }
      }
    );
  }
  function c(p) {
    if (!G(p)) throw new Error(z(7));
    if (typeof p.type > "u") throw new Error(z(8));
    if (typeof p.type != "string") throw new Error(z(17));
    if (v) throw new Error(z(9));
    try {
      (v = !0), (i = n(i, p));
    } finally {
      v = !1;
    }
    return (
      (a = l).forEach((d) => {
        d();
      }),
      p
    );
  }
  function u(p) {
    if (typeof p != "function") throw new Error(z(10));
    (n = p), c({ type: qe.REPLACE });
  }
  function f() {
    const p = w;
    return {
      subscribe(g) {
        if (typeof g != "object" || g === null) throw new Error(z(11));
        function d() {
          const o = g;
          o.next && o.next(S());
        }
        return d(), { unsubscribe: p(d) };
      },
      [St]() {
        return this;
      },
    };
  }
  return (
    c({ type: qe.INIT }),
    { dispatch: c, subscribe: w, getState: S, replaceReducer: u, [St]: f }
  );
}
function Wr(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: qe.INIT }) > "u") throw new Error(z(12));
    if (typeof r(void 0, { type: qe.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(z(13));
  });
}
function er(e) {
  const t = Object.keys(e),
    r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let i;
  try {
    Wr(r);
  } catch (a) {
    i = a;
  }
  return function (l = {}, m) {
    if (i) throw i;
    let v = !1;
    const y = {};
    for (let S = 0; S < n.length; S++) {
      const w = n[S],
        c = r[w],
        u = l[w],
        f = c(u, m);
      if (typeof f > "u") throw (m && m.type, new Error(z(14)));
      (y[w] = f), (v = v || f !== u);
    }
    return (v = v || n.length !== Object.keys(l).length), v ? y : l;
  };
}
function Qe(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n)),
        );
}
function Hr(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(z(15));
    };
    const l = { getState: i.getState, dispatch: (v, ...y) => a(v, ...y) },
      m = e.map((v) => v(l));
    return (a = Qe(...m)(i.dispatch)), { ...i, dispatch: a };
  };
}
function tr(e) {
  return G(e) && "type" in e && typeof e.type == "string";
}
var at = Symbol.for("immer-nothing"),
  ge = Symbol.for("immer-draftable"),
  W = Symbol.for("immer-state");
function $(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var se = Object.getPrototypeOf;
function X(e) {
  return !!e && !!e[W];
}
function J(e) {
  var t;
  return e
    ? rr(e) ||
        Array.isArray(e) ||
        !!e[ge] ||
        !!((t = e.constructor) != null && t[ge]) ||
        Ae(e) ||
        Ce(e)
    : !1;
}
var Br = Object.prototype.constructor.toString();
function rr(e) {
  if (!e || typeof e != "object") return !1;
  const t = se(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === Br;
}
function Vr(e) {
  return X(e) || $(15, e), e[W].base_;
}
function Se(e, t) {
  oe(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, n) => t(n, r, e));
}
function oe(e) {
  const t = e[W];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ae(e) ? 2 : Ce(e) ? 3 : 0;
}
function we(e, t) {
  return oe(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Be(e, t) {
  return oe(e) === 2 ? e.get(t) : e[t];
}
function nr(e, t, r) {
  const n = oe(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function Kr(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ae(e) {
  return e instanceof Map;
}
function Ce(e) {
  return e instanceof Set;
}
function re(e) {
  return e.copy_ || e.base_;
}
function et(e, t) {
  if (Ae(e)) return new Map(e);
  if (Ce(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = rr(e);
  if (t === !0 || (t === "class_only" && !r)) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[W];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const l = i[a],
        m = n[l];
      m.writable === !1 && ((m.writable = !0), (m.configurable = !0)),
        (m.get || m.set) &&
          (n[l] = {
            configurable: !0,
            writable: !0,
            enumerable: m.enumerable,
            value: e[l],
          });
    }
    return Object.create(se(e), n);
  } else {
    const n = se(e);
    if (n !== null && r) return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function lt(e, t = !1) {
  return (
    $e(e) ||
      X(e) ||
      !J(e) ||
      (oe(e) > 1 && (e.set = e.add = e.clear = e.delete = Jr),
      Object.freeze(e),
      t && Object.entries(e).forEach(([r, n]) => lt(n, !0))),
    e
  );
}
function Jr() {
  $(2);
}
function $e(e) {
  return Object.isFrozen(e);
}
var tt = {};
function ue(e) {
  const t = tt[e];
  return t || $(0, e), t;
}
function Gr(e, t) {
  tt[e] || (tt[e] = t);
}
var _e;
function ir() {
  return _e;
}
function Xr(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function wt(e, t) {
  t &&
    (ue("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function rt(e) {
  nt(e), e.drafts_.forEach(Yr), (e.drafts_ = null);
}
function nt(e) {
  e === _e && (_e = e.parent_);
}
function _t(e) {
  return (_e = Xr(_e, e));
}
function Yr(e) {
  const t = e[W];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Rt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[W].modified_ && (rt(t), $(4)),
        J(e) && ((e = Ne(t, e)), t.parent_ || ze(t, e)),
        t.patches_ &&
          ue("Patches").generateReplacementPatches_(
            r[W].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Ne(t, r, [])),
    rt(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== at ? e : void 0
  );
}
function Ne(e, t, r) {
  if ($e(t)) return t;
  const n = t[W];
  if (!n) return Se(t, (i, a) => Et(e, n, t, i, a, r)), t;
  if (n.scope_ !== e) return t;
  if (!n.modified_) return ze(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
    const i = n.copy_;
    let a = i,
      l = !1;
    n.type_ === 3 && ((a = new Set(i)), i.clear(), (l = !0)),
      Se(a, (m, v) => Et(e, n, i, m, v, r, l)),
      ze(e, i, !1),
      r &&
        e.patches_ &&
        ue("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
  }
  return n.copy_;
}
function Et(e, t, r, n, i, a, l) {
  if (X(i)) {
    const m =
        a && t && t.type_ !== 3 && !we(t.assigned_, n) ? a.concat(n) : void 0,
      v = Ne(e, i, m);
    if ((nr(r, n, v), X(v))) e.canAutoFreeze_ = !1;
    else return;
  } else l && r.add(i);
  if (J(i) && !$e(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ne(e, i),
      (!t || !t.scope_.parent_) &&
        typeof n != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(r, n) &&
        ze(e, i);
  }
}
function ze(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && lt(t, r);
}
function Zr(e, t) {
  const r = Array.isArray(e),
    n = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : ir(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = n,
    a = ft;
  r && ((i = [n]), (a = Re));
  const { revoke: l, proxy: m } = Proxy.revocable(i, a);
  return (n.draft_ = m), (n.revoke_ = l), m;
}
var ft = {
    get(e, t) {
      if (t === W) return e;
      const r = re(e);
      if (!we(r, t)) return en(e, r, t);
      const n = r[t];
      return e.finalized_ || !J(n)
        ? n
        : n === Ve(e.base_, t)
          ? (Ke(e), (e.copy_[t] = st(n, e)))
          : n;
    },
    has(e, t) {
      return t in re(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(re(e));
    },
    set(e, t, r) {
      const n = sr(re(e), t);
      if (n != null && n.set) return n.set.call(e.draft_, r), !0;
      if (!e.modified_) {
        const i = Ve(re(e), t),
          a = i == null ? void 0 : i[W];
        if (a && a.base_ === r)
          return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
        if (Kr(r, i) && (r !== void 0 || we(e.base_, t))) return !0;
        Ke(e), it(e);
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Ve(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Ke(e), it(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = re(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      $(11);
    },
    getPrototypeOf(e) {
      return se(e.base_);
    },
    setPrototypeOf() {
      $(12);
    },
  },
  Re = {};
Se(ft, (e, t) => {
  Re[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
Re.deleteProperty = function (e, t) {
  return Re.set.call(this, e, t, void 0);
};
Re.set = function (e, t, r) {
  return ft.set.call(this, e[0], t, r, e[0]);
};
function Ve(e, t) {
  const r = e[W];
  return (r ? re(r) : e)[t];
}
function en(e, t, r) {
  var i;
  const n = sr(t, r);
  return n
    ? "value" in n
      ? n.value
      : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
    : void 0;
}
function sr(e, t) {
  if (!(t in e)) return;
  let r = se(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = se(r);
  }
}
function it(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && it(e.parent_));
}
function Ke(e) {
  e.copy_ || (e.copy_ = et(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var tn = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, n) => {
        if (typeof t == "function" && typeof r != "function") {
          const a = r;
          r = t;
          const l = this;
          return function (v = a, ...y) {
            return l.produce(v, (S) => r.call(this, S, ...y));
          };
        }
        typeof r != "function" && $(6),
          n !== void 0 && typeof n != "function" && $(7);
        let i;
        if (J(t)) {
          const a = _t(this),
            l = st(t, void 0);
          let m = !0;
          try {
            (i = r(l)), (m = !1);
          } finally {
            m ? rt(a) : nt(a);
          }
          return wt(a, n), Rt(i, a);
        } else if (!t || typeof t != "object") {
          if (
            ((i = r(t)),
            i === void 0 && (i = t),
            i === at && (i = void 0),
            this.autoFreeze_ && lt(i, !0),
            n)
          ) {
            const a = [],
              l = [];
            ue("Patches").generateReplacementPatches_(t, i, a, l), n(a, l);
          }
          return i;
        } else $(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (l, ...m) => this.produceWithPatches(l, (v) => t(v, ...m));
        let n, i;
        return [
          this.produce(t, r, (l, m) => {
            (n = l), (i = m);
          }),
          n,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    J(e) || $(8), X(e) && (e = rn(e));
    const t = _t(this),
      r = st(e, void 0);
    return (r[W].isManual_ = !0), nt(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[W];
    (!r || !r.isManual_) && $(9);
    const { scope_: n } = r;
    return wt(n, t), Rt(void 0, n);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = ue("Patches").applyPatches_;
    return X(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
  }
};
function st(e, t) {
  const r = Ae(e)
    ? ue("MapSet").proxyMap_(e, t)
    : Ce(e)
      ? ue("MapSet").proxySet_(e, t)
      : Zr(e, t);
  return (t ? t.scope_ : ir()).drafts_.push(r), r;
}
function rn(e) {
  return X(e) || $(10, e), or(e);
}
function or(e) {
  if (!J(e) || $e(e)) return e;
  const t = e[W];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (r = et(e, t.scope_.immer_.useStrictShallowCopy_));
  } else r = et(e, !0);
  return (
    Se(r, (n, i) => {
      nr(r, n, or(i));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
function nn() {
  const t = "replace",
    r = "add",
    n = "remove";
  function i(c, u, f, b) {
    switch (c.type_) {
      case 0:
      case 2:
        return l(c, u, f, b);
      case 1:
        return a(c, u, f, b);
      case 3:
        return m(c, u, f, b);
    }
  }
  function a(c, u, f, b) {
    let { base_: p, assigned_: g } = c,
      d = c.copy_;
    d.length < p.length && (([p, d] = [d, p]), ([f, b] = [b, f]));
    for (let s = 0; s < p.length; s++)
      if (g[s] && d[s] !== p[s]) {
        const o = u.concat([s]);
        f.push({ op: t, path: o, value: w(d[s]) }),
          b.push({ op: t, path: o, value: w(p[s]) });
      }
    for (let s = p.length; s < d.length; s++) {
      const o = u.concat([s]);
      f.push({ op: r, path: o, value: w(d[s]) });
    }
    for (let s = d.length - 1; p.length <= s; --s) {
      const o = u.concat([s]);
      b.push({ op: n, path: o });
    }
  }
  function l(c, u, f, b) {
    const { base_: p, copy_: g } = c;
    Se(c.assigned_, (d, s) => {
      const o = Be(p, d),
        h = Be(g, d),
        R = s ? (we(p, d) ? t : r) : n;
      if (o === h && R === t) return;
      const _ = u.concat(d);
      f.push(R === n ? { op: R, path: _ } : { op: R, path: _, value: h }),
        b.push(
          R === r
            ? { op: n, path: _ }
            : R === n
              ? { op: r, path: _, value: w(o) }
              : { op: t, path: _, value: w(o) },
        );
    });
  }
  function m(c, u, f, b) {
    let { base_: p, copy_: g } = c,
      d = 0;
    p.forEach((s) => {
      if (!g.has(s)) {
        const o = u.concat([d]);
        f.push({ op: n, path: o, value: s }),
          b.unshift({ op: r, path: o, value: s });
      }
      d++;
    }),
      (d = 0),
      g.forEach((s) => {
        if (!p.has(s)) {
          const o = u.concat([d]);
          f.push({ op: r, path: o, value: s }),
            b.unshift({ op: n, path: o, value: s });
        }
        d++;
      });
  }
  function v(c, u, f, b) {
    f.push({ op: t, path: [], value: u === at ? void 0 : u }),
      b.push({ op: t, path: [], value: c });
  }
  function y(c, u) {
    return (
      u.forEach((f) => {
        const { path: b, op: p } = f;
        let g = c;
        for (let h = 0; h < b.length - 1; h++) {
          const R = oe(g);
          let _ = b[h];
          typeof _ != "string" && typeof _ != "number" && (_ = "" + _),
            (R === 0 || R === 1) &&
              (_ === "__proto__" || _ === "constructor") &&
              $(19),
            typeof g == "function" && _ === "prototype" && $(19),
            (g = Be(g, _)),
            typeof g != "object" && $(18, b.join("/"));
        }
        const d = oe(g),
          s = S(f.value),
          o = b[b.length - 1];
        switch (p) {
          case t:
            switch (d) {
              case 2:
                return g.set(o, s);
              case 3:
                $(16);
              default:
                return (g[o] = s);
            }
          case r:
            switch (d) {
              case 1:
                return o === "-" ? g.push(s) : g.splice(o, 0, s);
              case 2:
                return g.set(o, s);
              case 3:
                return g.add(s);
              default:
                return (g[o] = s);
            }
          case n:
            switch (d) {
              case 1:
                return g.splice(o, 1);
              case 2:
                return g.delete(o);
              case 3:
                return g.delete(f.value);
              default:
                return delete g[o];
            }
          default:
            $(17, p);
        }
      }),
      c
    );
  }
  function S(c) {
    if (!J(c)) return c;
    if (Array.isArray(c)) return c.map(S);
    if (Ae(c))
      return new Map(Array.from(c.entries()).map(([f, b]) => [f, S(b)]));
    if (Ce(c)) return new Set(Array.from(c).map(S));
    const u = Object.create(se(c));
    for (const f in c) u[f] = S(c[f]);
    return we(c, ge) && (u[ge] = c[ge]), u;
  }
  function w(c) {
    return X(c) ? S(c) : c;
  }
  Gr("Patches", {
    applyPatches_: y,
    generatePatches_: i,
    generateReplacementPatches_: v,
  });
}
var V = new tn(),
  Me = V.produce,
  ur = V.produceWithPatches.bind(V);
V.setAutoFreeze.bind(V);
V.setUseStrictShallowCopy.bind(V);
var Ot = V.applyPatches.bind(V);
V.createDraft.bind(V);
V.finishDraft.bind(V);
function sn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function on(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function un(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((n) =>
        typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n,
      )
      .join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var At = (e) => (Array.isArray(e) ? e : [e]);
function cn(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    un(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function an(e, t) {
  const r = [],
    { length: n } = e;
  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
  return r;
}
var ln = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  fn = typeof WeakRef < "u" ? WeakRef : ln,
  dn = 0,
  Ct = 1;
function Te() {
  return { s: dn, v: void 0, o: null, p: null };
}
function Fe(e, t = {}) {
  let r = Te();
  const { resultEqualityCheck: n } = t;
  let i,
    a = 0;
  function l() {
    var w;
    let m = r;
    const { length: v } = arguments;
    for (let c = 0, u = v; c < u; c++) {
      const f = arguments[c];
      if (typeof f == "function" || (typeof f == "object" && f !== null)) {
        let b = m.o;
        b === null && (m.o = b = new WeakMap());
        const p = b.get(f);
        p === void 0 ? ((m = Te()), b.set(f, m)) : (m = p);
      } else {
        let b = m.p;
        b === null && (m.p = b = new Map());
        const p = b.get(f);
        p === void 0 ? ((m = Te()), b.set(f, m)) : (m = p);
      }
    }
    const y = m;
    let S;
    if (m.s === Ct) S = m.v;
    else if (((S = e.apply(null, arguments)), a++, n)) {
      const c =
        ((w = i == null ? void 0 : i.deref) == null ? void 0 : w.call(i)) ?? i;
      c != null && n(c, S) && ((S = c), a !== 0 && a--),
        (i =
          (typeof S == "object" && S !== null) || typeof S == "function"
            ? new fn(S)
            : S);
    }
    return (y.s = Ct), (y.v = S), S;
  }
  return (
    (l.clearCache = () => {
      (r = Te()), l.resetResultsCount();
    }),
    (l.resultsCount = () => a),
    (l.resetResultsCount = () => {
      a = 0;
    }),
    l
  );
}
function pn(e, ...t) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    n = (...i) => {
      let a = 0,
        l = 0,
        m,
        v = {},
        y = i.pop();
      typeof y == "object" && ((v = y), (y = i.pop())),
        sn(
          y,
          `createSelector expects an output function after the inputs, but received: [${typeof y}]`,
        );
      const S = { ...r, ...v },
        {
          memoize: w,
          memoizeOptions: c = [],
          argsMemoize: u = Fe,
          argsMemoizeOptions: f = [],
          devModeChecks: b = {},
        } = S,
        p = At(c),
        g = At(f),
        d = cn(i),
        s = w(
          function () {
            return a++, y.apply(null, arguments);
          },
          ...p,
        ),
        o = u(
          function () {
            l++;
            const R = an(d, arguments);
            return (m = s.apply(null, R)), m;
          },
          ...g,
        );
      return Object.assign(o, {
        resultFunc: y,
        memoizedResultFunc: s,
        dependencies: d,
        dependencyRecomputations: () => l,
        resetDependencyRecomputations: () => {
          l = 0;
        },
        lastResult: () => m,
        recomputations: () => a,
        resetRecomputations: () => {
          a = 0;
        },
        memoize: w,
        argsMemoize: u,
      });
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var dt = pn(Fe),
  yn = Object.assign(
    (e, t = dt) => {
      on(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const r = Object.keys(e),
        n = r.map((a) => e[a]);
      return t(n, (...a) => a.reduce((l, m, v) => ((l[r[v]] = m), l), {}));
    },
    { withTypes: () => yn },
  );
function cr(e) {
  return ({ dispatch: r, getState: n }) =>
    (i) =>
    (a) =>
      typeof a == "function" ? a(r, n, e) : i(a);
}
var hn = cr(),
  mn = cr,
  gn =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Qe
              : Qe.apply(null, arguments);
        },
  bn = (e) => e && typeof e.match == "function";
function K(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(B(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (n) => tr(n) && n.type === e),
    r
  );
}
var ar = class me extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, me.prototype);
  }
  static get [Symbol.species]() {
    return me;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new me(...t[0].concat(this))
      : new me(...t.concat(this));
  }
};
function Mt(e) {
  return J(e) ? Me(e, () => {}) : e;
}
function Pt(e, t, r) {
  if (e.has(t)) {
    let i = e.get(t);
    return r.update && ((i = r.update(i, t, e)), e.set(t, i)), i;
  }
  if (!r.insert) throw new Error(B(10));
  const n = r.insert(t, e);
  return e.set(t, n), n;
}
function vn(e) {
  return typeof e == "boolean";
}
var Sn = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: n = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: a = !0,
      } = t ?? {};
      let l = new ar();
      return r && (vn(r) ? l.push(hn) : l.push(mn(r.extraArgument))), l;
    },
  le = "RTK_autoBatch",
  pe = () => (e) => ({ payload: e, meta: { [le]: !0 } }),
  lr = (e) => (t) => {
    setTimeout(t, e);
  },
  wn =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : lr(10),
  _n =
    (e = { type: "raf" }) =>
    (t) =>
    (...r) => {
      const n = t(...r);
      let i = !0,
        a = !1,
        l = !1;
      const m = new Set(),
        v =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? wn
              : e.type === "callback"
                ? e.queueNotification
                : lr(e.timeout),
        y = () => {
          (l = !1), a && ((a = !1), m.forEach((S) => S()));
        };
      return Object.assign({}, n, {
        subscribe(S) {
          const w = () => i && S(),
            c = n.subscribe(w);
          return (
            m.add(S),
            () => {
              c(), m.delete(S);
            }
          );
        },
        dispatch(S) {
          var w;
          try {
            return (
              (i = !((w = S == null ? void 0 : S.meta) != null && w[le])),
              (a = !i),
              a && (l || ((l = !0), v(y))),
              n.dispatch(S)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Rn = (e) =>
    function (r) {
      const { autoBatch: n = !0 } = r ?? {};
      let i = new ar(e);
      return n && i.push(_n(typeof n == "object" ? n : void 0)), i;
    };
function En(e) {
  const t = Sn(),
    {
      reducer: r = void 0,
      middleware: n,
      devTools: i = !0,
      preloadedState: a = void 0,
      enhancers: l = void 0,
    } = e || {};
  let m;
  if (typeof r == "function") m = r;
  else if (G(r)) m = er(r);
  else throw new Error(B(1));
  let v;
  typeof n == "function" ? (v = n(t)) : (v = t());
  let y = Qe;
  i && (y = gn({ trace: !1, ...(typeof i == "object" && i) }));
  const S = Hr(...v),
    w = Rn(S);
  let c = typeof l == "function" ? l(w) : w();
  const u = y(...c);
  return Zt(m, a, u);
}
function fr(e) {
  const t = {},
    r = [];
  let n;
  const i = {
    addCase(a, l) {
      const m = typeof a == "string" ? a : a.type;
      if (!m) throw new Error(B(28));
      if (m in t) throw new Error(B(29));
      return (t[m] = l), i;
    },
    addMatcher(a, l) {
      return r.push({ matcher: a, reducer: l }), i;
    },
    addDefaultCase(a) {
      return (n = a), i;
    },
  };
  return e(i), [t, r, n];
}
function On(e) {
  return typeof e == "function";
}
function An(e, t) {
  let [r, n, i] = fr(t),
    a;
  if (On(e)) a = () => Mt(e());
  else {
    const m = Mt(e);
    a = () => m;
  }
  function l(m = a(), v) {
    let y = [
      r[v.type],
      ...n.filter(({ matcher: S }) => S(v)).map(({ reducer: S }) => S),
    ];
    return (
      y.filter((S) => !!S).length === 0 && (y = [i]),
      y.reduce((S, w) => {
        if (w)
          if (X(S)) {
            const u = w(S, v);
            return u === void 0 ? S : u;
          } else {
            if (J(S)) return Me(S, (c) => w(c, v));
            {
              const c = w(S, v);
              if (c === void 0) {
                if (S === null) return S;
                throw new Error(B(9));
              }
              return c;
            }
          }
        return S;
      }, m)
    );
  }
  return (l.getInitialState = a), l;
}
var dr = (e, t) => (bn(e) ? e.match(t) : e(t));
function Y(...e) {
  return (t) => e.some((r) => dr(r, t));
}
function be(...e) {
  return (t) => e.every((r) => dr(r, t));
}
function Le(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string",
    n = t.indexOf(e.meta.requestStatus) > -1;
  return r && n;
}
function Pe(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function pt(...e) {
  return e.length === 0
    ? (t) => Le(t, ["pending"])
    : Pe(e)
      ? Y(...e.map((t) => t.pending))
      : pt()(e[0]);
}
function de(...e) {
  return e.length === 0
    ? (t) => Le(t, ["rejected"])
    : Pe(e)
      ? Y(...e.map((t) => t.rejected))
      : de()(e[0]);
}
function Ue(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0
    ? be(de(...e), t)
    : Pe(e)
      ? be(de(...e), t)
      : Ue()(e[0]);
}
function ee(...e) {
  return e.length === 0
    ? (t) => Le(t, ["fulfilled"])
    : Pe(e)
      ? Y(...e.map((t) => t.fulfilled))
      : ee()(e[0]);
}
function ot(...e) {
  return e.length === 0
    ? (t) => Le(t, ["pending", "fulfilled", "rejected"])
    : Pe(e)
      ? Y(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled]))
      : ot()(e[0]);
}
var Cn = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  pr = (e = 21) => {
    let t = "",
      r = e;
    for (; r--; ) t += Cn[(Math.random() * 64) | 0];
    return t;
  },
  Mn = ["name", "message", "stack", "code"],
  Je = class {
    constructor(e, t) {
      We(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  It = class {
    constructor(e, t) {
      We(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Pn = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const r of Mn) typeof e[r] == "string" && (t[r] = e[r]);
      return t;
    }
    return { message: String(e) };
  },
  Tt = (() => {
    function e(t, r, n) {
      const i = K(t + "/fulfilled", (v, y, S, w) => ({
          payload: v,
          meta: {
            ...(w || {}),
            arg: S,
            requestId: y,
            requestStatus: "fulfilled",
          },
        })),
        a = K(t + "/pending", (v, y, S) => ({
          payload: void 0,
          meta: {
            ...(S || {}),
            arg: y,
            requestId: v,
            requestStatus: "pending",
          },
        })),
        l = K(t + "/rejected", (v, y, S, w, c) => ({
          payload: w,
          error: ((n && n.serializeError) || Pn)(v || "Rejected"),
          meta: {
            ...(c || {}),
            arg: S,
            requestId: y,
            rejectedWithValue: !!w,
            requestStatus: "rejected",
            aborted: (v == null ? void 0 : v.name) === "AbortError",
            condition: (v == null ? void 0 : v.name) === "ConditionError",
          },
        }));
      function m(v) {
        return (y, S, w) => {
          const c = n != null && n.idGenerator ? n.idGenerator(v) : pr(),
            u = new AbortController();
          let f, b;
          function p(d) {
            (b = d), u.abort();
          }
          const g = (async function () {
            var o, h;
            let d;
            try {
              let R =
                (o = n == null ? void 0 : n.condition) == null
                  ? void 0
                  : o.call(n, v, { getState: S, extra: w });
              if ((Tn(R) && (R = await R), R === !1 || u.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const _ = new Promise((E, O) => {
                (f = () => {
                  O({ name: "AbortError", message: b || "Aborted" });
                }),
                  u.signal.addEventListener("abort", f);
              });
              y(
                a(
                  c,
                  v,
                  (h = n == null ? void 0 : n.getPendingMeta) == null
                    ? void 0
                    : h.call(
                        n,
                        { requestId: c, arg: v },
                        { getState: S, extra: w },
                      ),
                ),
              ),
                (d = await Promise.race([
                  _,
                  Promise.resolve(
                    r(v, {
                      dispatch: y,
                      getState: S,
                      extra: w,
                      requestId: c,
                      signal: u.signal,
                      abort: p,
                      rejectWithValue: (E, O) => new Je(E, O),
                      fulfillWithValue: (E, O) => new It(E, O),
                    }),
                  ).then((E) => {
                    if (E instanceof Je) throw E;
                    return E instanceof It
                      ? i(E.payload, c, v, E.meta)
                      : i(E, c, v);
                  }),
                ]));
            } catch (R) {
              d =
                R instanceof Je ? l(null, c, v, R.payload, R.meta) : l(R, c, v);
            } finally {
              f && u.signal.removeEventListener("abort", f);
            }
            return (
              (n &&
                !n.dispatchConditionRejection &&
                l.match(d) &&
                d.meta.condition) ||
                y(d),
              d
            );
          })();
          return Object.assign(g, {
            abort: p,
            requestId: c,
            arg: v,
            unwrap() {
              return g.then(In);
            },
          });
        };
      }
      return Object.assign(m, {
        pending: a,
        rejected: l,
        fulfilled: i,
        settled: Y(l, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function In(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function Tn(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var kn = Symbol.for("rtk-slice-createasyncthunk");
function jn(e, t) {
  return `${e}/${t}`;
}
function Dn({ creators: e } = {}) {
  var r;
  const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[kn];
  return function (i) {
    const { name: a, reducerPath: l = a } = i;
    if (!a) throw new Error(B(11));
    typeof process < "u";
    const m =
        (typeof i.reducers == "function" ? i.reducers(qn()) : i.reducers) || {},
      v = Object.keys(m),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      S = {
        addCase(s, o) {
          const h = typeof s == "string" ? s : s.type;
          if (!h) throw new Error(B(12));
          if (h in y.sliceCaseReducersByType) throw new Error(B(13));
          return (y.sliceCaseReducersByType[h] = o), S;
        },
        addMatcher(s, o) {
          return y.sliceMatchers.push({ matcher: s, reducer: o }), S;
        },
        exposeAction(s, o) {
          return (y.actionCreators[s] = o), S;
        },
        exposeCaseReducer(s, o) {
          return (y.sliceCaseReducersByName[s] = o), S;
        },
      };
    v.forEach((s) => {
      const o = m[s],
        h = {
          reducerName: s,
          type: jn(a, s),
          createNotation: typeof i.reducers == "function",
        };
      Nn(o) ? Fn(h, o, S, t) : Qn(h, o, S);
    });
    function w() {
      const [s = {}, o = [], h = void 0] =
          typeof i.extraReducers == "function"
            ? fr(i.extraReducers)
            : [i.extraReducers],
        R = { ...s, ...y.sliceCaseReducersByType };
      return An(i.initialState, (_) => {
        for (let E in R) _.addCase(E, R[E]);
        for (let E of y.sliceMatchers) _.addMatcher(E.matcher, E.reducer);
        for (let E of o) _.addMatcher(E.matcher, E.reducer);
        h && _.addDefaultCase(h);
      });
    }
    const c = (s) => s,
      u = new Map();
    let f;
    function b(s, o) {
      return f || (f = w()), f(s, o);
    }
    function p() {
      return f || (f = w()), f.getInitialState();
    }
    function g(s, o = !1) {
      function h(_) {
        let E = _[s];
        return typeof E > "u" && o && (E = p()), E;
      }
      function R(_ = c) {
        const E = Pt(u, o, { insert: () => new WeakMap() });
        return Pt(E, _, {
          insert: () => {
            const O = {};
            for (const [A, C] of Object.entries(i.selectors ?? {}))
              O[A] = xn(C, _, p, o);
            return O;
          },
        });
      }
      return {
        reducerPath: s,
        getSelectors: R,
        get selectors() {
          return R(h);
        },
        selectSlice: h,
      };
    }
    const d = {
      name: a,
      reducer: b,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: p,
      ...g(l),
      injectInto(s, { reducerPath: o, ...h } = {}) {
        const R = o ?? l;
        return (
          s.inject({ reducerPath: R, reducer: b }, h), { ...d, ...g(R, !0) }
        );
      },
    };
    return d;
  };
}
function xn(e, t, r, n) {
  function i(a, ...l) {
    let m = t(a);
    return typeof m > "u" && n && (m = r()), e(m, ...l);
  }
  return (i.unwrapped = e), i;
}
var ne = Dn();
function qn() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function Qn({ type: e, reducerName: t, createNotation: r }, n, i) {
  let a, l;
  if ("reducer" in n) {
    if (r && !zn(n)) throw new Error(B(17));
    (a = n.reducer), (l = n.prepare);
  } else a = n;
  i.addCase(e, a)
    .exposeCaseReducer(t, a)
    .exposeAction(t, l ? K(e, l) : K(e));
}
function Nn(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function zn(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Fn({ type: e, reducerName: t }, r, n, i) {
  if (!i) throw new Error(B(18));
  const {
      payloadCreator: a,
      fulfilled: l,
      pending: m,
      rejected: v,
      settled: y,
      options: S,
    } = r,
    w = i(e, a, S);
  n.exposeAction(t, w),
    l && n.addCase(w.fulfilled, l),
    m && n.addCase(w.pending, m),
    v && n.addCase(w.rejected, v),
    y && n.addMatcher(w.settled, y),
    n.exposeCaseReducer(t, {
      fulfilled: l || ke,
      pending: m || ke,
      rejected: v || ke,
      settled: y || ke,
    });
}
function ke() {}
function B(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var yr = ((e) => (
  (e.uninitialized = "uninitialized"),
  (e.pending = "pending"),
  (e.fulfilled = "fulfilled"),
  (e.rejected = "rejected"),
  e
))(yr || {});
function $n(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected",
  };
}
var kt = G;
function hr(e, t) {
  if (e === t || !((kt(e) && kt(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  const r = Object.keys(t),
    n = Object.keys(e);
  let i = r.length === n.length;
  const a = Array.isArray(t) ? [] : {};
  for (const l of r) (a[l] = hr(e[l], t[l])), i && (i = e[l] === a[l]);
  return i ? e : a;
}
function fe(e) {
  let t = 0;
  for (const r in e) t++;
  return t;
}
var jt = (e) => [].concat(...e);
function Ln(e) {
  return new RegExp("(^|:)//").test(e);
}
function Un() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Dt(e) {
  return e != null;
}
function Wn() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var Hn = (e) => e.replace(/\/$/, ""),
  Bn = (e) => e.replace(/^\//, "");
function Vn(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (Ln(t)) return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = Hn(e)), (t = Bn(t)), `${e}${r}${t}`;
}
var xt = (...e) => fetch(...e),
  Kn = (e) => e.status >= 200 && e.status <= 299,
  Jn = (e) => /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
function qt(e) {
  if (!G(e)) return e;
  const t = { ...e };
  for (const [r, n] of Object.entries(t)) n === void 0 && delete t[r];
  return t;
}
function mr({
  baseUrl: e,
  prepareHeaders: t = (w) => w,
  fetchFn: r = xt,
  paramsSerializer: n,
  isJsonContentType: i = Jn,
  jsonContentType: a = "application/json",
  jsonReplacer: l,
  timeout: m,
  responseHandler: v,
  validateStatus: y,
  ...S
} = {}) {
  return (
    typeof fetch > "u" &&
      r === xt &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (c, u) => {
      const {
        signal: f,
        getState: b,
        extra: p,
        endpoint: g,
        forced: d,
        type: s,
      } = u;
      let o,
        {
          url: h,
          headers: R = new Headers(S.headers),
          params: _ = void 0,
          responseHandler: E = v ?? "json",
          validateStatus: O = y ?? Kn,
          timeout: A = m,
          ...C
        } = typeof c == "string" ? { url: c } : c,
        M = { ...S, signal: f, ...C };
      (R = new Headers(qt(R))),
        (M.headers =
          (await t(R, {
            getState: b,
            extra: p,
            endpoint: g,
            forced: d,
            type: s,
          })) || R);
      const I = (q) =>
        typeof q == "object" &&
        (G(q) || Array.isArray(q) || typeof q.toJSON == "function");
      if (
        (!M.headers.has("content-type") &&
          I(M.body) &&
          M.headers.set("content-type", a),
        I(M.body) && i(M.headers) && (M.body = JSON.stringify(M.body, l)),
        _)
      ) {
        const q = ~h.indexOf("?") ? "&" : "?",
          Q = n ? n(_) : new URLSearchParams(qt(_));
        h += q + Q;
      }
      h = Vn(e, h);
      const T = new Request(h, M);
      o = { request: new Request(h, M) };
      let x,
        L = !1,
        D =
          A &&
          setTimeout(() => {
            (L = !0), u.abort();
          }, A);
      try {
        x = await r(T);
      } catch (q) {
        return {
          error: {
            status: L ? "TIMEOUT_ERROR" : "FETCH_ERROR",
            error: String(q),
          },
          meta: o,
        };
      } finally {
        D && clearTimeout(D);
      }
      const N = x.clone();
      o.response = N;
      let k,
        U = "";
      try {
        let q;
        if (
          (await Promise.all([
            w(x, E).then(
              (Q) => (k = Q),
              (Q) => (q = Q),
            ),
            N.text().then(
              (Q) => (U = Q),
              () => {},
            ),
          ]),
          q)
        )
          throw q;
      } catch (q) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: x.status,
            data: U,
            error: String(q),
          },
          meta: o,
        };
      }
      return O(x, k)
        ? { data: k, meta: o }
        : { error: { status: x.status, data: k }, meta: o };
    }
  );
  async function w(c, u) {
    if (typeof u == "function") return u(c);
    if (
      (u === "content-type" && (u = i(c.headers) ? "json" : "text"),
      u === "json")
    ) {
      const f = await c.text();
      return f.length ? JSON.parse(f) : null;
    }
    return c.text();
  }
}
var Qt = class {
    constructor(e, t = void 0) {
      (this.value = e), (this.meta = t);
    }
  },
  yt = K("__rtkq/focused"),
  gr = K("__rtkq/unfocused"),
  ht = K("__rtkq/online"),
  br = K("__rtkq/offline");
function vr(e) {
  return e.type === "query";
}
function Gn(e) {
  return e.type === "mutation";
}
function mt(e, t, r, n, i, a) {
  return Xn(e)
    ? e(t, r, n, i).map(ut).map(a)
    : Array.isArray(e)
      ? e.map(ut).map(a)
      : [];
}
function Xn(e) {
  return typeof e == "function";
}
function ut(e) {
  return typeof e == "string" ? { type: e } : e;
}
function Yn(e, t) {
  return e.catch(t);
}
var Ee = Symbol("forceQueryFn"),
  ct = (e) => typeof e[Ee] == "function";
function Zn({
  serializeQueryArgs: e,
  queryThunk: t,
  mutationThunk: r,
  api: n,
  context: i,
}) {
  const a = new Map(),
    l = new Map(),
    {
      unsubscribeQueryResult: m,
      removeMutationResult: v,
      updateSubscriptionOptions: y,
    } = n.internalActions;
  return {
    buildInitiateQuery: f,
    buildInitiateMutation: b,
    getRunningQueryThunk: S,
    getRunningMutationThunk: w,
    getRunningQueriesThunk: c,
    getRunningMutationsThunk: u,
  };
  function S(p, g) {
    return (d) => {
      var h;
      const s = i.endpointDefinitions[p],
        o = e({ queryArgs: g, endpointDefinition: s, endpointName: p });
      return (h = a.get(d)) == null ? void 0 : h[o];
    };
  }
  function w(p, g) {
    return (d) => {
      var s;
      return (s = l.get(d)) == null ? void 0 : s[g];
    };
  }
  function c() {
    return (p) => Object.values(a.get(p) || {}).filter(Dt);
  }
  function u() {
    return (p) => Object.values(l.get(p) || {}).filter(Dt);
  }
  function f(p, g) {
    const d =
      (
        s,
        {
          subscribe: o = !0,
          forceRefetch: h,
          subscriptionOptions: R,
          [Ee]: _,
          ...E
        } = {},
      ) =>
      (O, A) => {
        var q;
        const C = e({ queryArgs: s, endpointDefinition: g, endpointName: p }),
          M = t({
            ...E,
            type: "query",
            subscribe: o,
            forceRefetch: h,
            subscriptionOptions: R,
            endpointName: p,
            originalArgs: s,
            queryCacheKey: C,
            [Ee]: _,
          }),
          I = n.endpoints[p].select(s),
          T = O(M),
          j = I(A()),
          { requestId: x, abort: L } = T,
          D = j.requestId !== x,
          N = (q = a.get(O)) == null ? void 0 : q[C],
          k = () => I(A()),
          U = Object.assign(
            _
              ? T.then(k)
              : D && !N
                ? Promise.resolve(j)
                : Promise.all([N, T]).then(k),
            {
              arg: s,
              requestId: x,
              subscriptionOptions: R,
              queryCacheKey: C,
              abort: L,
              async unwrap() {
                const Q = await U;
                if (Q.isError) throw Q.error;
                return Q.data;
              },
              refetch: () => O(d(s, { subscribe: !1, forceRefetch: !0 })),
              unsubscribe() {
                o && O(m({ queryCacheKey: C, requestId: x }));
              },
              updateSubscriptionOptions(Q) {
                (U.subscriptionOptions = Q),
                  O(
                    y({
                      endpointName: p,
                      requestId: x,
                      queryCacheKey: C,
                      options: Q,
                    }),
                  );
              },
            },
          );
        if (!N && !D && !_) {
          const Q = a.get(O) || {};
          (Q[C] = U),
            a.set(O, Q),
            U.then(() => {
              delete Q[C], fe(Q) || a.delete(O);
            });
        }
        return U;
      };
    return d;
  }
  function b(p) {
    return (g, { track: d = !0, fixedCacheKey: s } = {}) =>
      (o, h) => {
        const R = r({
            type: "mutation",
            endpointName: p,
            originalArgs: g,
            track: d,
            fixedCacheKey: s,
          }),
          _ = o(R),
          { requestId: E, abort: O, unwrap: A } = _,
          C = Yn(
            _.unwrap().then((j) => ({ data: j })),
            (j) => ({ error: j }),
          ),
          M = () => {
            o(v({ requestId: E, fixedCacheKey: s }));
          },
          I = Object.assign(C, {
            arg: _.arg,
            requestId: E,
            abort: O,
            unwrap: A,
            reset: M,
          }),
          T = l.get(o) || {};
        return (
          l.set(o, T),
          (T[E] = I),
          I.then(() => {
            delete T[E], fe(T) || l.delete(o);
          }),
          s &&
            ((T[s] = I),
            I.then(() => {
              T[s] === I && (delete T[s], fe(T) || l.delete(o));
            })),
          I
        );
      };
  }
}
function Nt(e) {
  return e;
}
function ei({
  reducerPath: e,
  baseQuery: t,
  context: { endpointDefinitions: r },
  serializeQueryArgs: n,
  api: i,
  assertTagType: a,
}) {
  const l = (d, s, o, h) => (R, _) => {
      const E = r[d],
        O = n({ queryArgs: s, endpointDefinition: E, endpointName: d });
      if (
        (R(
          i.internalActions.queryResultPatched({
            queryCacheKey: O,
            patches: o,
          }),
        ),
        !h)
      )
        return;
      const A = i.endpoints[d].select(s)(_()),
        C = mt(E.providesTags, A.data, void 0, s, {}, a);
      R(
        i.internalActions.updateProvidedBy({
          queryCacheKey: O,
          providedTags: C,
        }),
      );
    },
    m =
      (d, s, o, h = !0) =>
      (R, _) => {
        const O = i.endpoints[d].select(s)(_()),
          A = {
            patches: [],
            inversePatches: [],
            undo: () => R(i.util.patchQueryData(d, s, A.inversePatches, h)),
          };
        if (O.status === "uninitialized") return A;
        let C;
        if ("data" in O)
          if (J(O.data)) {
            const [M, I, T] = ur(O.data, o);
            A.patches.push(...I), A.inversePatches.push(...T), (C = M);
          } else
            (C = o(O.data)),
              A.patches.push({ op: "replace", path: [], value: C }),
              A.inversePatches.push({ op: "replace", path: [], value: O.data });
        return (
          A.patches.length === 0 ||
            R(i.util.patchQueryData(d, s, A.patches, h)),
          A
        );
      },
    v = (d, s, o) => (h) =>
      h(
        i.endpoints[d].initiate(s, {
          subscribe: !1,
          forceRefetch: !0,
          [Ee]: () => ({ data: o }),
        }),
      ),
    y = async (
      d,
      {
        signal: s,
        abort: o,
        rejectWithValue: h,
        fulfillWithValue: R,
        dispatch: _,
        getState: E,
        extra: O,
      },
    ) => {
      const A = r[d.endpointName];
      try {
        let C = Nt,
          M;
        const I = {
            signal: s,
            abort: o,
            dispatch: _,
            getState: E,
            extra: O,
            endpoint: d.endpointName,
            type: d.type,
            forced: d.type === "query" ? S(d, E()) : void 0,
          },
          T = d.type === "query" ? d[Ee] : void 0;
        if (
          (T
            ? (M = T())
            : A.query
              ? ((M = await t(A.query(d.originalArgs), I, A.extraOptions)),
                A.transformResponse && (C = A.transformResponse))
              : (M = await A.queryFn(d.originalArgs, I, A.extraOptions, (j) =>
                  t(j, I, A.extraOptions),
                )),
          typeof process < "u",
          M.error)
        )
          throw new Qt(M.error, M.meta);
        return R(await C(M.data, M.meta, d.originalArgs), {
          fulfilledTimeStamp: Date.now(),
          baseQueryMeta: M.meta,
          [le]: !0,
        });
      } catch (C) {
        let M = C;
        if (M instanceof Qt) {
          let I = Nt;
          A.query && A.transformErrorResponse && (I = A.transformErrorResponse);
          try {
            return h(await I(M.value, M.meta, d.originalArgs), {
              baseQueryMeta: M.meta,
              [le]: !0,
            });
          } catch (T) {
            M = T;
          }
        }
        throw (typeof process < "u", console.error(M), M);
      }
    };
  function S(d, s) {
    var E, O, A;
    const o =
        (O = (E = s[e]) == null ? void 0 : E.queries) == null
          ? void 0
          : O[d.queryCacheKey],
      h = (A = s[e]) == null ? void 0 : A.config.refetchOnMountOrArgChange,
      R = o == null ? void 0 : o.fulfilledTimeStamp,
      _ = d.forceRefetch ?? (d.subscribe && h);
    return _ ? _ === !0 || (Number(new Date()) - Number(R)) / 1e3 >= _ : !1;
  }
  const w = Tt(`${e}/executeQuery`, y, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [le]: !0 };
      },
      condition(d, { getState: s }) {
        var A, C, M;
        const o = s(),
          h =
            (C = (A = o[e]) == null ? void 0 : A.queries) == null
              ? void 0
              : C[d.queryCacheKey],
          R = h == null ? void 0 : h.fulfilledTimeStamp,
          _ = d.originalArgs,
          E = h == null ? void 0 : h.originalArgs,
          O = r[d.endpointName];
        return ct(d)
          ? !0
          : (h == null ? void 0 : h.status) === "pending"
            ? !1
            : S(d, o) ||
                (vr(O) &&
                  (M = O == null ? void 0 : O.forceRefetch) != null &&
                  M.call(O, {
                    currentArg: _,
                    previousArg: E,
                    endpointState: h,
                    state: o,
                  }))
              ? !0
              : !R;
      },
      dispatchConditionRejection: !0,
    }),
    c = Tt(`${e}/executeMutation`, y, {
      getPendingMeta() {
        return { startedTimeStamp: Date.now(), [le]: !0 };
      },
    }),
    u = (d) => "force" in d,
    f = (d) => "ifOlderThan" in d,
    b = (d, s, o) => (h, R) => {
      const _ = u(o) && o.force,
        E = f(o) && o.ifOlderThan,
        O = (C = !0) => {
          const M = { forceRefetch: C, isPrefetch: !0 };
          return i.endpoints[d].initiate(s, M);
        },
        A = i.endpoints[d].select(s)(R());
      if (_) h(O());
      else if (E) {
        const C = A == null ? void 0 : A.fulfilledTimeStamp;
        if (!C) {
          h(O());
          return;
        }
        (Number(new Date()) - Number(new Date(C))) / 1e3 >= E && h(O());
      } else h(O(!1));
    };
  function p(d) {
    return (s) => {
      var o, h;
      return (
        ((h = (o = s == null ? void 0 : s.meta) == null ? void 0 : o.arg) ==
        null
          ? void 0
          : h.endpointName) === d
      );
    };
  }
  function g(d, s) {
    return {
      matchPending: be(pt(d), p(s)),
      matchFulfilled: be(ee(d), p(s)),
      matchRejected: be(de(d), p(s)),
    };
  }
  return {
    queryThunk: w,
    mutationThunk: c,
    prefetch: b,
    updateQueryData: m,
    upsertQueryData: v,
    patchQueryData: l,
    buildMatchThunkActions: g,
  };
}
function Sr(e, t, r, n) {
  return mt(
    r[e.meta.arg.endpointName][t],
    ee(e) ? e.payload : void 0,
    Ue(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    n,
  );
}
function je(e, t, r) {
  const n = e[t];
  n && r(n);
}
function Oe(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function zt(e, t, r) {
  const n = e[Oe(t)];
  n && r(n);
}
var ye = {};
function ti({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  context: {
    endpointDefinitions: n,
    apiUid: i,
    extractRehydrationInfo: a,
    hasRehydrationInfo: l,
  },
  assertTagType: m,
  config: v,
}) {
  const y = K(`${e}/resetApiState`),
    S = ne({
      name: `${e}/queries`,
      initialState: ye,
      reducers: {
        removeQueryResult: {
          reducer(s, { payload: { queryCacheKey: o } }) {
            delete s[o];
          },
          prepare: pe(),
        },
        queryResultPatched: {
          reducer(s, { payload: { queryCacheKey: o, patches: h } }) {
            je(s, o, (R) => {
              R.data = Ot(R.data, h.concat());
            });
          },
          prepare: pe(),
        },
      },
      extraReducers(s) {
        s.addCase(t.pending, (o, { meta: h, meta: { arg: R } }) => {
          var E;
          const _ = ct(R);
          o[(E = R.queryCacheKey)] ??
            (o[E] = { status: "uninitialized", endpointName: R.endpointName }),
            je(o, R.queryCacheKey, (O) => {
              (O.status = "pending"),
                (O.requestId = _ && O.requestId ? O.requestId : h.requestId),
                R.originalArgs !== void 0 && (O.originalArgs = R.originalArgs),
                (O.startedTimeStamp = h.startedTimeStamp);
            });
        })
          .addCase(t.fulfilled, (o, { meta: h, payload: R }) => {
            je(o, h.arg.queryCacheKey, (_) => {
              if (_.requestId !== h.requestId && !ct(h.arg)) return;
              const { merge: E } = n[h.arg.endpointName];
              if (((_.status = "fulfilled"), E))
                if (_.data !== void 0) {
                  const {
                    fulfilledTimeStamp: O,
                    arg: A,
                    baseQueryMeta: C,
                    requestId: M,
                  } = h;
                  let I = Me(_.data, (T) =>
                    E(T, R, {
                      arg: A.originalArgs,
                      baseQueryMeta: C,
                      fulfilledTimeStamp: O,
                      requestId: M,
                    }),
                  );
                  _.data = I;
                } else _.data = R;
              else
                _.data =
                  (n[h.arg.endpointName].structuralSharing ?? !0)
                    ? hr(X(_.data) ? Vr(_.data) : _.data, R)
                    : R;
              delete _.error, (_.fulfilledTimeStamp = h.fulfilledTimeStamp);
            });
          })
          .addCase(
            t.rejected,
            (
              o,
              {
                meta: { condition: h, arg: R, requestId: _ },
                error: E,
                payload: O,
              },
            ) => {
              je(o, R.queryCacheKey, (A) => {
                if (!h) {
                  if (A.requestId !== _) return;
                  (A.status = "rejected"), (A.error = O ?? E);
                }
              });
            },
          )
          .addMatcher(l, (o, h) => {
            const { queries: R } = a(h);
            for (const [_, E] of Object.entries(R))
              ((E == null ? void 0 : E.status) === "fulfilled" ||
                (E == null ? void 0 : E.status) === "rejected") &&
                (o[_] = E);
          });
      },
    }),
    w = ne({
      name: `${e}/mutations`,
      initialState: ye,
      reducers: {
        removeMutationResult: {
          reducer(s, { payload: o }) {
            const h = Oe(o);
            h in s && delete s[h];
          },
          prepare: pe(),
        },
      },
      extraReducers(s) {
        s.addCase(
          r.pending,
          (
            o,
            { meta: h, meta: { requestId: R, arg: _, startedTimeStamp: E } },
          ) => {
            _.track &&
              (o[Oe(h)] = {
                requestId: R,
                status: "pending",
                endpointName: _.endpointName,
                startedTimeStamp: E,
              });
          },
        )
          .addCase(r.fulfilled, (o, { payload: h, meta: R }) => {
            R.arg.track &&
              zt(o, R, (_) => {
                _.requestId === R.requestId &&
                  ((_.status = "fulfilled"),
                  (_.data = h),
                  (_.fulfilledTimeStamp = R.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, (o, { payload: h, error: R, meta: _ }) => {
            _.arg.track &&
              zt(o, _, (E) => {
                E.requestId === _.requestId &&
                  ((E.status = "rejected"), (E.error = h ?? R));
              });
          })
          .addMatcher(l, (o, h) => {
            const { mutations: R } = a(h);
            for (const [_, E] of Object.entries(R))
              ((E == null ? void 0 : E.status) === "fulfilled" ||
                (E == null ? void 0 : E.status) === "rejected") &&
                _ !== (E == null ? void 0 : E.requestId) &&
                (o[_] = E);
          });
      },
    }),
    c = ne({
      name: `${e}/invalidation`,
      initialState: ye,
      reducers: {
        updateProvidedBy: {
          reducer(s, o) {
            var _, E;
            const { queryCacheKey: h, providedTags: R } = o.payload;
            for (const O of Object.values(s))
              for (const A of Object.values(O)) {
                const C = A.indexOf(h);
                C !== -1 && A.splice(C, 1);
              }
            for (const { type: O, id: A } of R) {
              const C =
                (_ = s[O] ?? (s[O] = {}))[(E = A || "__internal_without_id")] ??
                (_[E] = []);
              C.includes(h) || C.push(h);
            }
          },
          prepare: pe(),
        },
      },
      extraReducers(s) {
        s.addCase(
          S.actions.removeQueryResult,
          (o, { payload: { queryCacheKey: h } }) => {
            for (const R of Object.values(o))
              for (const _ of Object.values(R)) {
                const E = _.indexOf(h);
                E !== -1 && _.splice(E, 1);
              }
          },
        )
          .addMatcher(l, (o, h) => {
            var _, E;
            const { provided: R } = a(h);
            for (const [O, A] of Object.entries(R))
              for (const [C, M] of Object.entries(A)) {
                const I =
                  (_ = o[O] ?? (o[O] = {}))[
                    (E = C || "__internal_without_id")
                  ] ?? (_[E] = []);
                for (const T of M) I.includes(T) || I.push(T);
              }
          })
          .addMatcher(Y(ee(t), Ue(t)), (o, h) => {
            const R = Sr(h, "providesTags", n, m),
              { queryCacheKey: _ } = h.meta.arg;
            c.caseReducers.updateProvidedBy(
              o,
              c.actions.updateProvidedBy({ queryCacheKey: _, providedTags: R }),
            );
          });
      },
    }),
    u = ne({
      name: `${e}/subscriptions`,
      initialState: ye,
      reducers: {
        updateSubscriptionOptions(s, o) {},
        unsubscribeQueryResult(s, o) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    f = ne({
      name: `${e}/internalSubscriptions`,
      initialState: ye,
      reducers: {
        subscriptionsUpdated: {
          reducer(s, o) {
            return Ot(s, o.payload);
          },
          prepare: pe(),
        },
      },
    }),
    b = ne({
      name: `${e}/config`,
      initialState: {
        online: Wn(),
        focused: Un(),
        middlewareRegistered: !1,
        ...v,
      },
      reducers: {
        middlewareRegistered(s, { payload: o }) {
          s.middlewareRegistered =
            s.middlewareRegistered === "conflict" || i !== o ? "conflict" : !0;
        },
      },
      extraReducers: (s) => {
        s.addCase(ht, (o) => {
          o.online = !0;
        })
          .addCase(br, (o) => {
            o.online = !1;
          })
          .addCase(yt, (o) => {
            o.focused = !0;
          })
          .addCase(gr, (o) => {
            o.focused = !1;
          })
          .addMatcher(l, (o) => ({ ...o }));
      },
    }),
    p = er({
      queries: S.reducer,
      mutations: w.reducer,
      provided: c.reducer,
      subscriptions: f.reducer,
      config: b.reducer,
    }),
    g = (s, o) => p(y.match(o) ? void 0 : s, o),
    d = {
      ...b.actions,
      ...S.actions,
      ...u.actions,
      ...f.actions,
      ...w.actions,
      ...c.actions,
      resetApiState: y,
    };
  return { reducer: g, actions: d };
}
var ie = Symbol.for("RTKQ/skipToken"),
  wr = { status: "uninitialized" },
  Ft = Me(wr, () => {}),
  $t = Me(wr, () => {});
function ri({ serializeQueryArgs: e, reducerPath: t, createSelector: r }) {
  const n = (w) => Ft,
    i = (w) => $t;
  return {
    buildQuerySelector: m,
    buildMutationSelector: v,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: S,
  };
  function a(w) {
    return { ...w, ...$n(w.status) };
  }
  function l(w) {
    return w[t];
  }
  function m(w, c) {
    return (u) => {
      const f = e({ queryArgs: u, endpointDefinition: c, endpointName: w });
      return r(
        u === ie
          ? n
          : (g) => {
              var d, s;
              return (
                ((s = (d = l(g)) == null ? void 0 : d.queries) == null
                  ? void 0
                  : s[f]) ?? Ft
              );
            },
        a,
      );
    };
  }
  function v() {
    return (w) => {
      let c;
      return (
        typeof w == "object" ? (c = Oe(w) ?? ie) : (c = w),
        r(
          c === ie
            ? i
            : (b) => {
                var p, g;
                return (
                  ((g = (p = l(b)) == null ? void 0 : p.mutations) == null
                    ? void 0
                    : g[c]) ?? $t
                );
              },
          a,
        )
      );
    };
  }
  function y(w, c) {
    const u = w[t],
      f = new Set();
    for (const b of c.map(ut)) {
      const p = u.provided[b.type];
      if (!p) continue;
      let g = (b.id !== void 0 ? p[b.id] : jt(Object.values(p))) ?? [];
      for (const d of g) f.add(d);
    }
    return jt(
      Array.from(f.values()).map((b) => {
        const p = u.queries[b];
        return p
          ? [
              {
                queryCacheKey: b,
                endpointName: p.endpointName,
                originalArgs: p.originalArgs,
              },
            ]
          : [];
      }),
    );
  }
  function S(w, c) {
    return Object.values(w[t].queries)
      .filter(
        (u) =>
          (u == null ? void 0 : u.endpointName) === c &&
          u.status !== "uninitialized",
      )
      .map((u) => u.originalArgs);
  }
}
var ce = WeakMap ? new WeakMap() : void 0,
  Lt = ({ endpointName: e, queryArgs: t }) => {
    let r = "";
    const n = ce == null ? void 0 : ce.get(t);
    if (typeof n == "string") r = n;
    else {
      const i = JSON.stringify(
        t,
        (a, l) => (
          (l = typeof l == "bigint" ? { $bigint: l.toString() } : l),
          (l = G(l)
            ? Object.keys(l)
                .sort()
                .reduce((m, v) => ((m[v] = l[v]), m), {})
            : l),
          l
        ),
      );
      G(t) && (ce == null || ce.set(t, i)), (r = i);
    }
    return `${e}(${r})`;
  };
function ni(...e) {
  return function (r) {
    const n = Fe((y) => {
        var S;
        return (S = r.extractRehydrationInfo) == null
          ? void 0
          : S.call(r, y, { reducerPath: r.reducerPath ?? "api" });
      }),
      i = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...r,
        extractRehydrationInfo: n,
        serializeQueryArgs(y) {
          let S = Lt;
          if ("serializeQueryArgs" in y.endpointDefinition) {
            const w = y.endpointDefinition.serializeQueryArgs;
            S = (c) => {
              const u = w(c);
              return typeof u == "string" ? u : Lt({ ...c, queryArgs: u });
            };
          } else r.serializeQueryArgs && (S = r.serializeQueryArgs);
          return S(y);
        },
        tagTypes: [...(r.tagTypes || [])],
      },
      a = {
        endpointDefinitions: {},
        batch(y) {
          y();
        },
        apiUid: pr(),
        extractRehydrationInfo: n,
        hasRehydrationInfo: Fe((y) => n(y) != null),
      },
      l = {
        injectEndpoints: v,
        enhanceEndpoints({ addTagTypes: y, endpoints: S }) {
          if (y)
            for (const w of y) i.tagTypes.includes(w) || i.tagTypes.push(w);
          if (S)
            for (const [w, c] of Object.entries(S))
              typeof c == "function"
                ? c(a.endpointDefinitions[w])
                : Object.assign(a.endpointDefinitions[w] || {}, c);
          return l;
        },
      },
      m = e.map((y) => y.init(l, i, a));
    function v(y) {
      const S = y.endpoints({
        query: (w) => ({ ...w, type: "query" }),
        mutation: (w) => ({ ...w, type: "mutation" }),
      });
      for (const [w, c] of Object.entries(S)) {
        if (y.overrideExisting !== !0 && w in a.endpointDefinitions) {
          if (y.overrideExisting === "throw") throw new Error(B(39));
          typeof process < "u";
          continue;
        }
        a.endpointDefinitions[w] = c;
        for (const u of m) u.injectEndpoint(w, c);
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function Z(e, ...t) {
  return Object.assign(e, ...t);
}
var ii = ({ api: e, queryThunk: t, internalState: r }) => {
  const n = `${e.reducerPath}/subscriptions`;
  let i = null,
    a = null;
  const { updateSubscriptionOptions: l, unsubscribeQueryResult: m } =
      e.internalActions,
    v = (u, f) => {
      var p, g, d;
      if (l.match(f)) {
        const { queryCacheKey: s, requestId: o, options: h } = f.payload;
        return (
          (p = u == null ? void 0 : u[s]) != null && p[o] && (u[s][o] = h), !0
        );
      }
      if (m.match(f)) {
        const { queryCacheKey: s, requestId: o } = f.payload;
        return u[s] && delete u[s][o], !0;
      }
      if (e.internalActions.removeQueryResult.match(f))
        return delete u[f.payload.queryCacheKey], !0;
      if (t.pending.match(f)) {
        const {
            meta: { arg: s, requestId: o },
          } = f,
          h = u[(g = s.queryCacheKey)] ?? (u[g] = {});
        return (
          (h[`${o}_running`] = {}),
          s.subscribe && (h[o] = s.subscriptionOptions ?? h[o] ?? {}),
          !0
        );
      }
      let b = !1;
      if (t.fulfilled.match(f) || t.rejected.match(f)) {
        const s = u[f.meta.arg.queryCacheKey] || {},
          o = `${f.meta.requestId}_running`;
        b || (b = !!s[o]), delete s[o];
      }
      if (t.rejected.match(f)) {
        const {
          meta: { condition: s, arg: o, requestId: h },
        } = f;
        if (s && o.subscribe) {
          const R = u[(d = o.queryCacheKey)] ?? (u[d] = {});
          (R[h] = o.subscriptionOptions ?? R[h] ?? {}), (b = !0);
        }
      }
      return b;
    },
    y = () => r.currentSubscriptions,
    c = {
      getSubscriptions: y,
      getSubscriptionCount: (u) => {
        const b = y()[u] ?? {};
        return fe(b);
      },
      isRequestSubscribed: (u, f) => {
        var p;
        const b = y();
        return !!((p = b == null ? void 0 : b[u]) != null && p[f]);
      },
    };
  return (u, f) => {
    if (
      (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))),
      e.util.resetApiState.match(u))
    )
      return (i = r.currentSubscriptions = {}), (a = null), [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(u))
      return [!1, c];
    const b = v(r.currentSubscriptions, u);
    let p = !0;
    if (b) {
      a ||
        (a = setTimeout(() => {
          const s = JSON.parse(JSON.stringify(r.currentSubscriptions)),
            [, o] = ur(i, () => s);
          f.next(e.internalActions.subscriptionsUpdated(o)),
            (i = s),
            (a = null);
        }, 500));
      const g = typeof u.type == "string" && !!u.type.startsWith(n),
        d = t.rejected.match(u) && u.meta.condition && !!u.meta.arg.subscribe;
      p = !g && !d;
    }
    return [p, !1];
  };
};
function si(e) {
  for (const t in e) return !1;
  return !0;
}
var oi = 2147483647 / 1e3 - 1,
  ui = ({
    reducerPath: e,
    api: t,
    queryThunk: r,
    context: n,
    internalState: i,
  }) => {
    const { removeQueryResult: a, unsubscribeQueryResult: l } =
        t.internalActions,
      m = Y(l.match, r.fulfilled, r.rejected);
    function v(c) {
      const u = i.currentSubscriptions[c];
      return !!u && !si(u);
    }
    const y = {},
      S = (c, u, f) => {
        var b;
        if (m(c)) {
          const p = u.getState()[e],
            { queryCacheKey: g } = l.match(c) ? c.payload : c.meta.arg;
          w(
            g,
            (b = p.queries[g]) == null ? void 0 : b.endpointName,
            u,
            p.config,
          );
        }
        if (t.util.resetApiState.match(c))
          for (const [p, g] of Object.entries(y))
            g && clearTimeout(g), delete y[p];
        if (n.hasRehydrationInfo(c)) {
          const p = u.getState()[e],
            { queries: g } = n.extractRehydrationInfo(c);
          for (const [d, s] of Object.entries(g))
            w(d, s == null ? void 0 : s.endpointName, u, p.config);
        }
      };
    function w(c, u, f, b) {
      const p = n.endpointDefinitions[u],
        g = (p == null ? void 0 : p.keepUnusedDataFor) ?? b.keepUnusedDataFor;
      if (g === 1 / 0) return;
      const d = Math.max(0, Math.min(g, oi));
      if (!v(c)) {
        const s = y[c];
        s && clearTimeout(s),
          (y[c] = setTimeout(() => {
            v(c) || f.dispatch(a({ queryCacheKey: c })), delete y[c];
          }, d * 1e3));
      }
    }
    return S;
  },
  Ut = new Error("Promise never resolved before cacheEntryRemoved."),
  ci = ({
    api: e,
    reducerPath: t,
    context: r,
    queryThunk: n,
    mutationThunk: i,
    internalState: a,
  }) => {
    const l = ot(n),
      m = ot(i),
      v = ee(n, i),
      y = {},
      S = (u, f, b) => {
        const p = w(u);
        if (n.pending.match(u)) {
          const g = b[t].queries[p],
            d = f.getState()[t].queries[p];
          !g &&
            d &&
            c(
              u.meta.arg.endpointName,
              u.meta.arg.originalArgs,
              p,
              f,
              u.meta.requestId,
            );
        } else if (i.pending.match(u))
          f.getState()[t].mutations[p] &&
            c(
              u.meta.arg.endpointName,
              u.meta.arg.originalArgs,
              p,
              f,
              u.meta.requestId,
            );
        else if (v(u)) {
          const g = y[p];
          g != null &&
            g.valueResolved &&
            (g.valueResolved({ data: u.payload, meta: u.meta.baseQueryMeta }),
            delete g.valueResolved);
        } else if (
          e.internalActions.removeQueryResult.match(u) ||
          e.internalActions.removeMutationResult.match(u)
        ) {
          const g = y[p];
          g && (delete y[p], g.cacheEntryRemoved());
        } else if (e.util.resetApiState.match(u))
          for (const [g, d] of Object.entries(y))
            delete y[g], d.cacheEntryRemoved();
      };
    function w(u) {
      return l(u)
        ? u.meta.arg.queryCacheKey
        : m(u)
          ? (u.meta.arg.fixedCacheKey ?? u.meta.requestId)
          : e.internalActions.removeQueryResult.match(u)
            ? u.payload.queryCacheKey
            : e.internalActions.removeMutationResult.match(u)
              ? Oe(u.payload)
              : "";
    }
    function c(u, f, b, p, g) {
      const d = r.endpointDefinitions[u],
        s = d == null ? void 0 : d.onCacheEntryAdded;
      if (!s) return;
      const o = {},
        h = new Promise((C) => {
          o.cacheEntryRemoved = C;
        }),
        R = Promise.race([
          new Promise((C) => {
            o.valueResolved = C;
          }),
          h.then(() => {
            throw Ut;
          }),
        ]);
      R.catch(() => {}), (y[b] = o);
      const _ = e.endpoints[u].select(d.type === "query" ? f : b),
        E = p.dispatch((C, M, I) => I),
        O = {
          ...p,
          getCacheEntry: () => _(p.getState()),
          requestId: g,
          extra: E,
          updateCachedData:
            d.type === "query"
              ? (C) => p.dispatch(e.util.updateQueryData(u, f, C))
              : void 0,
          cacheDataLoaded: R,
          cacheEntryRemoved: h,
        },
        A = s(f, O);
      Promise.resolve(A).catch((C) => {
        if (C !== Ut) throw C;
      });
    }
    return S;
  },
  ai =
    ({ api: e, context: { apiUid: t }, reducerPath: r }) =>
    (n, i) => {
      e.util.resetApiState.match(n) &&
        i.dispatch(e.internalActions.middlewareRegistered(t)),
        typeof process < "u";
    },
  li = ({
    reducerPath: e,
    context: t,
    context: { endpointDefinitions: r },
    mutationThunk: n,
    queryThunk: i,
    api: a,
    assertTagType: l,
    refetchQuery: m,
    internalState: v,
  }) => {
    const { removeQueryResult: y } = a.internalActions,
      S = Y(ee(n), Ue(n)),
      w = Y(ee(n, i), de(n, i));
    let c = [];
    const u = (p, g) => {
      S(p)
        ? b(Sr(p, "invalidatesTags", r, l), g)
        : w(p)
          ? b([], g)
          : a.util.invalidateTags.match(p) &&
            b(mt(p.payload, void 0, void 0, void 0, void 0, l), g);
    };
    function f(p) {
      var g, d;
      for (const s in p.queries)
        if (((g = p.queries[s]) == null ? void 0 : g.status) === "pending")
          return !0;
      for (const s in p.mutations)
        if (((d = p.mutations[s]) == null ? void 0 : d.status) === "pending")
          return !0;
      return !1;
    }
    function b(p, g) {
      const d = g.getState(),
        s = d[e];
      if ((c.push(...p), s.config.invalidationBehavior === "delayed" && f(s)))
        return;
      const o = c;
      if (((c = []), o.length === 0)) return;
      const h = a.util.selectInvalidatedBy(d, o);
      t.batch(() => {
        const R = Array.from(h.values());
        for (const { queryCacheKey: _ } of R) {
          const E = s.queries[_],
            O = v.currentSubscriptions[_] ?? {};
          E &&
            (fe(O) === 0
              ? g.dispatch(y({ queryCacheKey: _ }))
              : E.status !== "uninitialized" && g.dispatch(m(E, _)));
        }
      });
    }
    return u;
  },
  fi = ({
    reducerPath: e,
    queryThunk: t,
    api: r,
    refetchQuery: n,
    internalState: i,
  }) => {
    const a = {},
      l = (c, u) => {
        (r.internalActions.updateSubscriptionOptions.match(c) ||
          r.internalActions.unsubscribeQueryResult.match(c)) &&
          v(c.payload, u),
          (t.pending.match(c) || (t.rejected.match(c) && c.meta.condition)) &&
            v(c.meta.arg, u),
          (t.fulfilled.match(c) ||
            (t.rejected.match(c) && !c.meta.condition)) &&
            m(c.meta.arg, u),
          r.util.resetApiState.match(c) && S();
      };
    function m({ queryCacheKey: c }, u) {
      const f = u.getState()[e],
        b = f.queries[c],
        p = i.currentSubscriptions[c];
      if (!b || b.status === "uninitialized") return;
      const { lowestPollingInterval: g, skipPollingIfUnfocused: d } = w(p);
      if (!Number.isFinite(g)) return;
      const s = a[c];
      s != null && s.timeout && (clearTimeout(s.timeout), (s.timeout = void 0));
      const o = Date.now() + g;
      a[c] = {
        nextPollTimestamp: o,
        pollingInterval: g,
        timeout: setTimeout(() => {
          (f.config.focused || !d) && u.dispatch(n(b, c)),
            m({ queryCacheKey: c }, u);
        }, g),
      };
    }
    function v({ queryCacheKey: c }, u) {
      const b = u.getState()[e].queries[c],
        p = i.currentSubscriptions[c];
      if (!b || b.status === "uninitialized") return;
      const { lowestPollingInterval: g } = w(p);
      if (!Number.isFinite(g)) {
        y(c);
        return;
      }
      const d = a[c],
        s = Date.now() + g;
      (!d || s < d.nextPollTimestamp) && m({ queryCacheKey: c }, u);
    }
    function y(c) {
      const u = a[c];
      u != null && u.timeout && clearTimeout(u.timeout), delete a[c];
    }
    function S() {
      for (const c of Object.keys(a)) y(c);
    }
    function w(c = {}) {
      let u = !1,
        f = Number.POSITIVE_INFINITY;
      for (let b in c)
        c[b].pollingInterval &&
          ((f = Math.min(c[b].pollingInterval, f)),
          (u = c[b].skipPollingIfUnfocused || u));
      return { lowestPollingInterval: f, skipPollingIfUnfocused: u };
    }
    return l;
  },
  di = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
    const i = pt(r, n),
      a = de(r, n),
      l = ee(r, n),
      m = {};
    return (y, S) => {
      var w, c;
      if (i(y)) {
        const {
            requestId: u,
            arg: { endpointName: f, originalArgs: b },
          } = y.meta,
          p = t.endpointDefinitions[f],
          g = p == null ? void 0 : p.onQueryStarted;
        if (g) {
          const d = {},
            s = new Promise((_, E) => {
              (d.resolve = _), (d.reject = E);
            });
          s.catch(() => {}), (m[u] = d);
          const o = e.endpoints[f].select(p.type === "query" ? b : u),
            h = S.dispatch((_, E, O) => O),
            R = {
              ...S,
              getCacheEntry: () => o(S.getState()),
              requestId: u,
              extra: h,
              updateCachedData:
                p.type === "query"
                  ? (_) => S.dispatch(e.util.updateQueryData(f, b, _))
                  : void 0,
              queryFulfilled: s,
            };
          g(b, R);
        }
      } else if (l(y)) {
        const { requestId: u, baseQueryMeta: f } = y.meta;
        (w = m[u]) == null || w.resolve({ data: y.payload, meta: f }),
          delete m[u];
      } else if (a(y)) {
        const { requestId: u, rejectedWithValue: f, baseQueryMeta: b } = y.meta;
        (c = m[u]) == null ||
          c.reject({
            error: y.payload ?? y.error,
            isUnhandledError: !f,
            meta: b,
          }),
          delete m[u];
      }
    };
  },
  pi = ({
    reducerPath: e,
    context: t,
    api: r,
    refetchQuery: n,
    internalState: i,
  }) => {
    const { removeQueryResult: a } = r.internalActions,
      l = (v, y) => {
        yt.match(v) && m(y, "refetchOnFocus"),
          ht.match(v) && m(y, "refetchOnReconnect");
      };
    function m(v, y) {
      const S = v.getState()[e],
        w = S.queries,
        c = i.currentSubscriptions;
      t.batch(() => {
        for (const u of Object.keys(c)) {
          const f = w[u],
            b = c[u];
          if (!b || !f) continue;
          (Object.values(b).some((g) => g[y] === !0) ||
            (Object.values(b).every((g) => g[y] === void 0) && S.config[y])) &&
            (fe(b) === 0
              ? v.dispatch(a({ queryCacheKey: u }))
              : f.status !== "uninitialized" && v.dispatch(n(f, u)));
        }
      });
    }
    return l;
  };
function yi(e) {
  const { reducerPath: t, queryThunk: r, api: n, context: i } = e,
    { apiUid: a } = i,
    l = { invalidateTags: K(`${t}/invalidateTags`) },
    m = (w) => w.type.startsWith(`${t}/`),
    v = [ai, ui, li, fi, ci, di];
  return {
    middleware: (w) => {
      let c = !1;
      const f = {
          ...e,
          internalState: { currentSubscriptions: {} },
          refetchQuery: S,
          isThisApiSliceAction: m,
        },
        b = v.map((d) => d(f)),
        p = ii(f),
        g = pi(f);
      return (d) => (s) => {
        if (!tr(s)) return d(s);
        c || ((c = !0), w.dispatch(n.internalActions.middlewareRegistered(a)));
        const o = { ...w, next: d },
          h = w.getState(),
          [R, _] = p(s, o, h);
        let E;
        if (
          (R ? (E = d(s)) : (E = _),
          w.getState()[t] && (g(s, o, h), m(s) || i.hasRehydrationInfo(s)))
        )
          for (const O of b) O(s, o, h);
        return E;
      };
    },
    actions: l,
  };
  function S(w, c, u = {}) {
    return r({
      type: "query",
      endpointName: w.endpointName,
      originalArgs: w.originalArgs,
      subscribe: !1,
      forceRefetch: !0,
      queryCacheKey: c,
      ...u,
    });
  }
}
var Wt = Symbol(),
  hi = ({ createSelector: e = dt } = {}) => ({
    name: Wt,
    init(
      t,
      {
        baseQuery: r,
        tagTypes: n,
        reducerPath: i,
        serializeQueryArgs: a,
        keepUnusedDataFor: l,
        refetchOnMountOrArgChange: m,
        refetchOnFocus: v,
        refetchOnReconnect: y,
        invalidationBehavior: S,
      },
      w,
    ) {
      nn();
      const c = (D) => (typeof process < "u", D);
      Object.assign(t, {
        reducerPath: i,
        endpoints: {},
        internalActions: {
          onOnline: ht,
          onOffline: br,
          onFocus: yt,
          onFocusLost: gr,
        },
        util: {},
      });
      const {
          queryThunk: u,
          mutationThunk: f,
          patchQueryData: b,
          updateQueryData: p,
          upsertQueryData: g,
          prefetch: d,
          buildMatchThunkActions: s,
        } = ei({
          baseQuery: r,
          reducerPath: i,
          context: w,
          api: t,
          serializeQueryArgs: a,
          assertTagType: c,
        }),
        { reducer: o, actions: h } = ti({
          context: w,
          queryThunk: u,
          mutationThunk: f,
          reducerPath: i,
          assertTagType: c,
          config: {
            refetchOnFocus: v,
            refetchOnReconnect: y,
            refetchOnMountOrArgChange: m,
            keepUnusedDataFor: l,
            reducerPath: i,
            invalidationBehavior: S,
          },
        });
      Z(t.util, {
        patchQueryData: b,
        updateQueryData: p,
        upsertQueryData: g,
        prefetch: d,
        resetApiState: h.resetApiState,
      }),
        Z(t.internalActions, h);
      const { middleware: R, actions: _ } = yi({
        reducerPath: i,
        context: w,
        queryThunk: u,
        mutationThunk: f,
        api: t,
        assertTagType: c,
      });
      Z(t.util, _), Z(t, { reducer: o, middleware: R });
      const {
        buildQuerySelector: E,
        buildMutationSelector: O,
        selectInvalidatedBy: A,
        selectCachedArgsForQuery: C,
      } = ri({ serializeQueryArgs: a, reducerPath: i, createSelector: e });
      Z(t.util, { selectInvalidatedBy: A, selectCachedArgsForQuery: C });
      const {
        buildInitiateQuery: M,
        buildInitiateMutation: I,
        getRunningMutationThunk: T,
        getRunningMutationsThunk: j,
        getRunningQueriesThunk: x,
        getRunningQueryThunk: L,
      } = Zn({
        queryThunk: u,
        mutationThunk: f,
        api: t,
        serializeQueryArgs: a,
        context: w,
      });
      return (
        Z(t.util, {
          getRunningMutationThunk: T,
          getRunningMutationsThunk: j,
          getRunningQueryThunk: L,
          getRunningQueriesThunk: x,
        }),
        {
          name: Wt,
          injectEndpoint(D, N) {
            var U;
            const k = t;
            (U = k.endpoints)[D] ?? (U[D] = {}),
              vr(N)
                ? Z(
                    k.endpoints[D],
                    { name: D, select: E(D, N), initiate: M(D, N) },
                    s(u, D),
                  )
                : Gn(N) &&
                  Z(
                    k.endpoints[D],
                    { name: D, select: O(), initiate: I(D) },
                    s(f, D),
                  );
          },
        }
      );
    },
  }),
  _r = { exports: {} },
  Rr = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = P;
function mi(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gi = typeof Object.is == "function" ? Object.is : mi,
  bi = Ie.useSyncExternalStore,
  vi = Ie.useRef,
  Si = Ie.useEffect,
  wi = Ie.useMemo,
  _i = Ie.useDebugValue;
Rr.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
  var a = vi(null);
  if (a.current === null) {
    var l = { hasValue: !1, value: null };
    a.current = l;
  } else l = a.current;
  a = wi(
    function () {
      function v(u) {
        if (!y) {
          if (((y = !0), (S = u), (u = n(u)), i !== void 0 && l.hasValue)) {
            var f = l.value;
            if (i(f, u)) return (w = f);
          }
          return (w = u);
        }
        if (((f = w), gi(S, u))) return f;
        var b = n(u);
        return i !== void 0 && i(f, b) ? f : ((S = u), (w = b));
      }
      var y = !1,
        S,
        w,
        c = r === void 0 ? null : r;
      return [
        function () {
          return v(t());
        },
        c === null
          ? void 0
          : function () {
              return v(c());
            },
      ];
    },
    [t, r, n, i],
  );
  var m = bi(e, a[0], a[1]);
  return (
    Si(
      function () {
        (l.hasValue = !0), (l.value = m);
      },
      [m],
    ),
    _i(m),
    m
  );
};
_r.exports = Rr;
var Ri = _r.exports,
  H = "default" in vt ? Nr : vt,
  Ht = Symbol.for("react-redux-context"),
  Bt = typeof globalThis < "u" ? globalThis : {};
function Ei() {
  if (!H.createContext) return {};
  const e = Bt[Ht] ?? (Bt[Ht] = new Map());
  let t = e.get(H.createContext);
  return t || ((t = H.createContext(null)), e.set(H.createContext, t)), t;
}
var te = Ei(),
  Oi = () => {
    throw new Error("uSES not initialized!");
  };
function gt(e = te) {
  return function () {
    return H.useContext(e);
  };
}
var Er = gt(),
  Or = Oi,
  Ai = (e) => {
    Or = e;
  },
  Ci = (e, t) => e === t;
function Mi(e = te) {
  const t = e === te ? Er : gt(e),
    r = (n, i = {}) => {
      const { equalityFn: a = Ci, devModeChecks: l = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: m,
          subscription: v,
          getServerState: y,
          stabilityCheck: S,
          identityFunctionCheck: w,
        } = t();
      H.useRef(!0);
      const c = H.useCallback(
          {
            [n.name](f) {
              return n(f);
            },
          }[n.name],
          [n, S, l.stabilityCheck],
        ),
        u = Or(v.addNestedSub, m.getState, y || m.getState, c, a);
      return H.useDebugValue(u), u;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Pi = Mi();
function Ar(e) {
  e();
}
function Ii() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      Ar(() => {
        let r = e;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; ) r.push(n), (n = n.next);
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = (t = { callback: r, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !n ||
            e === null ||
            ((n = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var Vt = { notify() {}, get: () => [] };
function Ti(e, t) {
  let r,
    n = Vt,
    i = 0,
    a = !1;
  function l(b) {
    S();
    const p = n.subscribe(b);
    let g = !1;
    return () => {
      g || ((g = !0), p(), w());
    };
  }
  function m() {
    n.notify();
  }
  function v() {
    f.onStateChange && f.onStateChange();
  }
  function y() {
    return a;
  }
  function S() {
    i++, r || ((r = e.subscribe(v)), (n = Ii()));
  }
  function w() {
    i--, r && i === 0 && (r(), (r = void 0), n.clear(), (n = Vt));
  }
  function c() {
    a || ((a = !0), S());
  }
  function u() {
    a && ((a = !1), w());
  }
  const f = {
    addNestedSub: l,
    notifyNestedSubs: m,
    handleChangeWrapper: v,
    isSubscribed: y,
    trySubscribe: c,
    tryUnsubscribe: u,
    getListeners: () => n,
  };
  return f;
}
var ki =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ji = typeof navigator < "u" && navigator.product === "ReactNative",
  Di = ki || ji ? H.useLayoutEffect : H.useEffect;
function Kt(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ve(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Kt(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
function xi({
  store: e,
  context: t,
  children: r,
  serverState: n,
  stabilityCheck: i = "once",
  identityFunctionCheck: a = "once",
}) {
  const l = H.useMemo(() => {
      const y = Ti(e);
      return {
        store: e,
        subscription: y,
        getServerState: n ? () => n : void 0,
        stabilityCheck: i,
        identityFunctionCheck: a,
      };
    }, [e, n, i, a]),
    m = H.useMemo(() => e.getState(), [e]);
  Di(() => {
    const { subscription: y } = l;
    return (
      (y.onStateChange = y.notifyNestedSubs),
      y.trySubscribe(),
      m !== e.getState() && y.notifyNestedSubs(),
      () => {
        y.tryUnsubscribe(), (y.onStateChange = void 0);
      }
    );
  }, [l, m]);
  const v = t || te;
  return H.createElement(v.Provider, { value: l }, r);
}
var qi = xi;
function Cr(e = te) {
  const t = e === te ? Er : gt(e),
    r = () => {
      const { store: n } = t();
      return n;
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Mr = Cr();
function Qi(e = te) {
  const t = e === te ? Mr : Cr(e),
    r = () => t().dispatch;
  return Object.assign(r, { withTypes: () => r }), r;
}
var Ni = Qi(),
  zi = Ar;
Ai(Ri.useSyncExternalStoreWithSelector);
function Fi(e) {
  return e.type === "query";
}
function $i(e) {
  return e.type === "mutation";
}
function De(e, ...t) {
  return Object.assign(e, ...t);
}
function Ge(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
var ae = WeakMap ? new WeakMap() : void 0,
  Li = ({ endpointName: e, queryArgs: t }) => {
    let r = "";
    const n = ae == null ? void 0 : ae.get(t);
    if (typeof n == "string") r = n;
    else {
      const i = JSON.stringify(
        t,
        (a, l) => (
          (l = typeof l == "bigint" ? { $bigint: l.toString() } : l),
          (l = G(l)
            ? Object.keys(l)
                .sort()
                .reduce((m, v) => ((m[v] = l[v]), m), {})
            : l),
          l
        ),
      );
      G(t) && (ae == null || ae.set(t, i)), (r = i);
    }
    return `${e}(${r})`;
  },
  Xe = Symbol();
function Jt(e, t, r, n) {
  const i = P.useMemo(
      () => ({
        queryArgs: e,
        serialized:
          typeof e == "object"
            ? t({ queryArgs: e, endpointDefinition: r, endpointName: n })
            : e,
      }),
      [e, t, r, n],
    ),
    a = P.useRef(i);
  return (
    P.useEffect(() => {
      a.current.serialized !== i.serialized && (a.current = i);
    }, [i]),
    a.current.serialized === i.serialized ? a.current.queryArgs : e
  );
}
function Ye(e) {
  const t = P.useRef(e);
  return (
    P.useEffect(() => {
      ve(t.current, e) || (t.current = e);
    }, [e]),
    ve(t.current, e) ? t.current : e
  );
}
var Ui = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Wi = Ui(),
  Hi = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Bi = Hi(),
  Vi = () => (Wi || Bi ? P.useLayoutEffect : P.useEffect),
  Ki = Vi(),
  Ji = (e) =>
    e.isUninitialized
      ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: yr.pending,
        }
      : e;
function Gi({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: { useDispatch: r, useSelector: n, useStore: i },
    unstable__sideEffectsInRender: a,
    createSelector: l,
  },
  serializeQueryArgs: m,
  context: v,
}) {
  const y = a ? (f) => f() : P.useEffect;
  return { buildQueryHooks: c, buildMutationHook: u, usePrefetch: w };
  function S(f, b, p) {
    if (b != null && b.endpointName && f.isUninitialized) {
      const { endpointName: R } = b,
        _ = v.endpointDefinitions[R];
      m({
        queryArgs: b.originalArgs,
        endpointDefinition: _,
        endpointName: R,
      }) === m({ queryArgs: p, endpointDefinition: _, endpointName: R }) &&
        (b = void 0);
    }
    let g = f.isSuccess ? f.data : b == null ? void 0 : b.data;
    g === void 0 && (g = f.data);
    const d = g !== void 0,
      s = f.isLoading,
      o = (!b || b.isLoading || b.isUninitialized) && !d && s,
      h = f.isSuccess || (s && d);
    return {
      ...f,
      data: g,
      currentData: f.data,
      isFetching: s,
      isLoading: o,
      isSuccess: h,
    };
  }
  function w(f, b) {
    const p = r(),
      g = Ye(b);
    return P.useCallback(
      (d, s) => p(e.util.prefetch(f, d, { ...g, ...s })),
      [f, p, g],
    );
  }
  function c(f) {
    const b = (
        d,
        {
          refetchOnReconnect: s,
          refetchOnFocus: o,
          refetchOnMountOrArgChange: h,
          skip: R = !1,
          pollingInterval: _ = 0,
          skipPollingIfUnfocused: E = !1,
        } = {},
      ) => {
        const { initiate: O } = e.endpoints[f],
          A = r(),
          C = P.useRef(void 0);
        if (!C.current) {
          const k = A(e.internalActions.internal_getRTKQSubscriptions());
          C.current = k;
        }
        const M = Jt(R ? ie : d, Li, v.endpointDefinitions[f], f),
          I = Ye({
            refetchOnReconnect: s,
            refetchOnFocus: o,
            pollingInterval: _,
            skipPollingIfUnfocused: E,
          }),
          T = P.useRef(!1),
          j = P.useRef(void 0);
        let { queryCacheKey: x, requestId: L } = j.current || {},
          D = !1;
        x && L && (D = C.current.isRequestSubscribed(x, L));
        const N = !D && T.current;
        return (
          y(() => {
            T.current = D;
          }),
          y(() => {
            N && (j.current = void 0);
          }, [N]),
          y(() => {
            var q;
            const k = j.current;
            if ((typeof process < "u", M === ie)) {
              k == null || k.unsubscribe(), (j.current = void 0);
              return;
            }
            const U = (q = j.current) == null ? void 0 : q.subscriptionOptions;
            if (!k || k.arg !== M) {
              k == null || k.unsubscribe();
              const Q = A(O(M, { subscriptionOptions: I, forceRefetch: h }));
              j.current = Q;
            } else I !== U && k.updateSubscriptionOptions(I);
          }, [A, O, h, M, I, N]),
          P.useEffect(
            () => () => {
              var k;
              (k = j.current) == null || k.unsubscribe(), (j.current = void 0);
            },
            [],
          ),
          P.useMemo(
            () => ({
              refetch: () => {
                var k;
                if (!j.current) throw new Error(B(38));
                return (k = j.current) == null ? void 0 : k.refetch();
              },
            }),
            [],
          )
        );
      },
      p = ({
        refetchOnReconnect: d,
        refetchOnFocus: s,
        pollingInterval: o = 0,
        skipPollingIfUnfocused: h = !1,
      } = {}) => {
        const { initiate: R } = e.endpoints[f],
          _ = r(),
          [E, O] = P.useState(Xe),
          A = P.useRef(void 0),
          C = Ye({
            refetchOnReconnect: d,
            refetchOnFocus: s,
            pollingInterval: o,
            skipPollingIfUnfocused: h,
          });
        y(() => {
          var j, x;
          const T = (j = A.current) == null ? void 0 : j.subscriptionOptions;
          C !== T &&
            ((x = A.current) == null || x.updateSubscriptionOptions(C));
        }, [C]);
        const M = P.useRef(C);
        y(() => {
          M.current = C;
        }, [C]);
        const I = P.useCallback(
          function (T, j = !1) {
            let x;
            return (
              t(() => {
                var L;
                (L = A.current) == null || L.unsubscribe(),
                  (A.current = x =
                    _(
                      R(T, {
                        subscriptionOptions: M.current,
                        forceRefetch: !j,
                      }),
                    )),
                  O(T);
              }),
              x
            );
          },
          [_, R],
        );
        return (
          P.useEffect(
            () => () => {
              var T;
              (T = A == null ? void 0 : A.current) == null || T.unsubscribe();
            },
            [],
          ),
          P.useEffect(() => {
            E !== Xe && !A.current && I(E, !0);
          }, [E, I]),
          P.useMemo(() => [I, E], [I, E])
        );
      },
      g = (d, { skip: s = !1, selectFromResult: o } = {}) => {
        const { select: h } = e.endpoints[f],
          R = Jt(s ? ie : d, m, v.endpointDefinitions[f], f),
          _ = P.useRef(void 0),
          E = P.useMemo(
            () =>
              l([h(R), (I, T) => T, (I) => R], S, {
                memoizeOptions: { resultEqualityCheck: ve },
              }),
            [h, R],
          ),
          O = P.useMemo(
            () =>
              o
                ? l([E], o, {
                    devModeChecks: { identityFunctionCheck: "never" },
                  })
                : E,
            [E, o],
          ),
          A = n((I) => O(I, _.current), ve),
          C = i(),
          M = E(C.getState(), _.current);
        return (
          Ki(() => {
            _.current = M;
          }, [M]),
          A
        );
      };
    return {
      useQueryState: g,
      useQuerySubscription: b,
      useLazyQuerySubscription: p,
      useLazyQuery(d) {
        const [s, o] = p(d),
          h = g(o, { ...d, skip: o === Xe }),
          R = P.useMemo(() => ({ lastArg: o }), [o]);
        return P.useMemo(() => [s, h, R], [s, h, R]);
      },
      useQuery(d, s) {
        const o = b(d, s),
          h = g(d, {
            selectFromResult: d === ie || (s != null && s.skip) ? void 0 : Ji,
            ...s,
          }),
          {
            data: R,
            status: _,
            isLoading: E,
            isSuccess: O,
            isError: A,
            error: C,
          } = h;
        return (
          P.useDebugValue({
            data: R,
            status: _,
            isLoading: E,
            isSuccess: O,
            isError: A,
            error: C,
          }),
          P.useMemo(() => ({ ...h, ...o }), [h, o])
        );
      },
    };
  }
  function u(f) {
    return ({ selectFromResult: b, fixedCacheKey: p } = {}) => {
      const { select: g, initiate: d } = e.endpoints[f],
        s = r(),
        [o, h] = P.useState();
      P.useEffect(
        () => () => {
          (o != null && o.arg.fixedCacheKey) || o == null || o.reset();
        },
        [o],
      );
      const R = P.useCallback(
          function (U) {
            const q = s(d(U, { fixedCacheKey: p }));
            return h(q), q;
          },
          [s, d, p],
        ),
        { requestId: _ } = o || {},
        E = P.useMemo(
          () =>
            g({
              fixedCacheKey: p,
              requestId: o == null ? void 0 : o.requestId,
            }),
          [p, o, g],
        ),
        O = P.useMemo(() => (b ? l([E], b) : E), [b, E]),
        A = n(O, ve),
        C = p == null ? (o == null ? void 0 : o.arg.originalArgs) : void 0,
        M = P.useCallback(() => {
          t(() => {
            o && h(void 0),
              p &&
                s(
                  e.internalActions.removeMutationResult({
                    requestId: _,
                    fixedCacheKey: p,
                  }),
                );
          });
        }, [s, p, o, _]),
        {
          endpointName: I,
          data: T,
          status: j,
          isLoading: x,
          isSuccess: L,
          isError: D,
          error: N,
        } = A;
      P.useDebugValue({
        endpointName: I,
        data: T,
        status: j,
        isLoading: x,
        isSuccess: L,
        isError: D,
        error: N,
      });
      const k = P.useMemo(
        () => ({ ...A, originalArgs: C, reset: M }),
        [A, C, M],
      );
      return P.useMemo(() => [R, k], [R, k]);
    };
  }
}
var Xi = Symbol(),
  Yi = ({
    batch: e = zi,
    hooks: t = { useDispatch: Ni, useSelector: Pi, useStore: Mr },
    createSelector: r = dt,
    unstable__sideEffectsInRender: n = !1,
    ...i
  } = {}) => ({
    name: Xi,
    init(a, { serializeQueryArgs: l }, m) {
      const v = a,
        {
          buildQueryHooks: y,
          buildMutationHook: S,
          usePrefetch: w,
        } = Gi({
          api: a,
          moduleOptions: {
            batch: e,
            hooks: t,
            unstable__sideEffectsInRender: n,
            createSelector: r,
          },
          serializeQueryArgs: l,
          context: m,
        });
      return (
        De(v, { usePrefetch: w }),
        De(m, { batch: e }),
        {
          injectEndpoint(c, u) {
            if (Fi(u)) {
              const {
                useQuery: f,
                useLazyQuery: b,
                useLazyQuerySubscription: p,
                useQueryState: g,
                useQuerySubscription: d,
              } = y(c);
              De(v.endpoints[c], {
                useQuery: f,
                useLazyQuery: b,
                useLazyQuerySubscription: p,
                useQueryState: g,
                useQuerySubscription: d,
              }),
                (a[`use${Ge(c)}Query`] = f),
                (a[`useLazy${Ge(c)}Query`] = b);
            } else if ($i(u)) {
              const f = S(c);
              De(v.endpoints[c], { useMutation: f }),
                (a[`use${Ge(c)}Mutation`] = f);
            }
          },
        }
      );
    },
  }),
  Pr = ni(hi(), Yi());
const Ir = "https://jsonplaceholder.typicode.com/",
  Gt = "/posts",
  Xt = "/users",
  Es = (e) => `/users/${e}`,
  xe = Pr({
    reducerPath: "postAPI",
    baseQuery: mr({ baseUrl: Ir }),
    tagTypes: ["Post"],
    endpoints: (e) => ({
      fetchAllPosts: e.query({
        query: (t = 5) => ({ url: Gt, params: { _limit: t } }),
        providesTags: ["Post"],
      }),
      searchPost: e.query({
        query: (t) => ({ url: Gt, params: { search: t } }),
      }),
    }),
  }),
  Zi = (e, t) => {
    const r = P.useRef();
    return P.useCallback(
      (...n) => {
        r.current && clearTimeout(r.current),
          (r.current = setTimeout(() => {
            e(...n);
          }, t));
      },
      [e, t],
    );
  },
  es = (e, t) => {
    const r = P.useRef(!1);
    return P.useCallback(
      (...n) => {
        r.current ||
          (e(...n),
          (r.current = !0),
          setTimeout(() => {
            r.current = !1;
          }, t));
      },
      [e, t],
    );
  },
  bt = () => {
    const { data: e, isLoading: t, error: r } = xe.useFetchAllPostsQuery(5),
      [n, i] = P.useState(""),
      a = (v) => i(v.target.value),
      l = Zi(a, 500),
      m = es(a, 500);
    return {
      posts: e,
      isLoading: t,
      error: r,
      search: n,
      searchHandle: a,
      searchHandleDebounced: l,
      searchHandleThrottled: m,
    };
  },
  ts = "_InputWrapper_l40k7_1",
  rs = "_placeholder_l40k7_5",
  ns = "_input_l40k7_10",
  is = "_caretWrapper_l40k7_22",
  ss = "_caret_l40k7_22",
  os = "_blink_l40k7_1",
  us = "_readonly_l40k7_48",
  he = {
    InputWrapper: ts,
    placeholder: rs,
    input: ns,
    caretWrapper: is,
    caret: ss,
    blink: os,
    readonly: us,
  },
  Tr = P.memo((e) => {
    const {
        className: t,
        value: r,
        onChange: n,
        type: i = "text",
        placeholder: a,
        readonly: l,
        ...m
      } = e,
      v = P.useRef(null),
      y = { [he.readonly]: l };
    return F.jsxs("div", {
      className: Fr(he.InputWrapper, y, [t]),
      "data-testid": "input",
      children: [
        a &&
          F.jsxs("div", {
            className: he.placeholder,
            children: [" ", a + ">"],
          }),
        F.jsx("div", {
          className: he.caretWrapper,
          children: F.jsx("input", {
            ref: v,
            type: i,
            value: r,
            onChange: n,
            className: he.input,
            readOnly: l,
            ...m,
            "aria-label": "const-input",
          }),
        }),
      ],
    });
  });
Tr.__docgenInfo = { description: "", methods: [], displayName: "Input" };
const kr = P.memo((e) => {
  const { searchHandleDebounced: t } = e,
    { isLoading: r } = bt(),
    { t: n } = Yt("input");
  return F.jsx("div", {
    "data-testid": "isLoadind_posts",
    children: r
      ? F.jsx(zr, {})
      : F.jsx(Tr, {
          type: "text",
          onChange: t,
          placeholder: n("search"),
          "data-testid": "input",
        }),
  });
});
kr.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "IsLoadingPostsList",
  props: {
    searchHandleDebounced: {
      required: !0,
      tsType: {
        name: "signature",
        type: "function",
        raw: "() => void",
        signature: { arguments: [], return: { name: "void" } },
      },
      description: "",
    },
  },
};
const cs = "_error_7ouh4_2",
  as = { error: cs },
  jr = P.memo(() => {
    const { error: e } = bt(),
      { t } = Yt(["error"]);
    return F.jsxs("div", {
      children: [
        " ",
        e && F.jsx("h2", { className: as.error, children: t("error_loading") }),
      ],
    });
  });
jr.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "ErrorPostsList",
};
const ls = "_posts_ovh69_1",
  fs = { posts: ls },
  ds = P.memo(() => {
    const {
      posts: e,
      search: t,
      searchHandleDebounced: r,
      error: n,
      isLoading: i,
    } = bt();
    return F.jsx("section", {
      className: fs.posts,
      "data-testid": "posts",
      children: F.jsxs("div", {
        children: [
          F.jsx(kr, { searchHandleDebounced: r }),
          F.jsx(jr, {}),
          F.jsx($r, { posts: e, search: t, error: n, isLoading: i }),
        ],
      }),
    });
  });
ds.__docgenInfo = { description: "", methods: [], displayName: "Posts" };
const ps = { value: 0 },
  Dr = ne({
    name: "counter",
    initialState: ps,
    reducers: {
      increment: (e) => {
        e.value += 1;
      },
      decrement: (e) => {
        e.value -= 1;
      },
    },
  }),
  { increment: Os, decrement: As } = Dr.actions,
  ys = Dr.reducer,
  Ze = Pr({
    reducerPath: "userAPI",
    baseQuery: mr({ baseUrl: Ir, timeout: 1e4 }),
    tagTypes: ["User"],
    refetchOnFocus: !0,
    refetchOnMountOrArgChange: 30,
    endpoints: (e) => ({
      fetchAllUsers: e.query({
        query: (t) => ({ url: Xt, params: { _limit: t }, timeout: 3e3 }),
        providesTags: ["User"],
      }),
      fetchUserById: e.query({
        query: (t) => ({ url: Xt, params: { id: t }, timeout: 3e3 }),
      }),
    }),
  }),
  hs = En({
    reducer: {
      counter: ys,
      [xe.reducerPath]: xe.reducer,
      [Ze.reducerPath]: Ze.reducer,
    },
    middleware: (e) =>
      e({ thunk: { extraArgument: {} } }).concat([
        xe.middleware,
        Ze.middleware,
      ]),
    devTools: { name: "ReduxList" },
  }),
  xr = (e) => {
    const { children: t } = e;
    return F.jsx(qi, { store: hs, children: t });
  };
xr.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "StoreProvider",
};
const ms = (e) => F.jsx(xr, { children: F.jsx(e, {}) });
ms.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "ProviderDecorator",
};
export {
  Tr as I,
  ms as P,
  ds as a,
  es as b,
  Zi as c,
  Es as d,
  Ni as e,
  dt as f,
  Pi as g,
  As as h,
  Os as i,
  Ze as u,
};
