import { r as g, a as hn, R as te } from "./index-ClcD9ViR.js";
import { R as pn } from "./index-CBV61OJ-.js";
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $() {
  return (
    ($ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    $.apply(this, arguments)
  );
}
var Y;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Y || (Y = {}));
function mn(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = !1 } = e,
    a;
  a = t.map((b, R) =>
    h(b, typeof b == "string" ? null : b.state, R === 0 ? "default" : void 0),
  );
  let l = u(r ?? a.length - 1),
    i = Y.Pop,
    c = null;
  function u(b) {
    return Math.min(Math.max(b, 0), a.length - 1);
  }
  function m() {
    return a[l];
  }
  function h(b, R, S) {
    R === void 0 && (R = null);
    let D = Dt(a ? m().pathname : "/", b, R, S);
    return (
      Ue(
        D.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(b),
      ),
      D
    );
  }
  function d(b) {
    return typeof b == "string" ? b : Ve(b);
  }
  return {
    get index() {
      return l;
    },
    get action() {
      return i;
    },
    get location() {
      return m();
    },
    createHref: d,
    createURL(b) {
      return new URL(d(b), "http://localhost");
    },
    encodeLocation(b) {
      let R = typeof b == "string" ? de(b) : b;
      return {
        pathname: R.pathname || "",
        search: R.search || "",
        hash: R.hash || "",
      };
    },
    push(b, R) {
      i = Y.Push;
      let S = h(b, R);
      (l += 1),
        a.splice(l, a.length, S),
        n && c && c({ action: i, location: S, delta: 1 });
    },
    replace(b, R) {
      i = Y.Replace;
      let S = h(b, R);
      (a[l] = S), n && c && c({ action: i, location: S, delta: 0 });
    },
    go(b) {
      i = Y.Pop;
      let R = u(l + b),
        S = a[R];
      (l = R), c && c({ action: i, location: S, delta: b });
    },
    listen(b) {
      return (
        (c = b),
        () => {
          c = null;
        }
      );
    },
  };
}
function M(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ue(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vn() {
  return Math.random().toString(36).substr(2, 8);
}
function Dt(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    $(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? de(t) : t,
      { state: r, key: (t && t.key) || n || vn() },
    )
  );
}
function Ve(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function de(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
var k;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(k || (k = {}));
const gn = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function yn(e) {
  return e.index === !0;
}
function tt(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, l) => {
      let i = [...r, String(l)],
        c = typeof a.id == "string" ? a.id : i.join("-");
      if (
        (M(
          a.index !== !0 || !a.children,
          "Cannot specify children on an index route",
        ),
        M(
          !n[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        yn(a))
      ) {
        let u = $({}, a, t(a), { id: c });
        return (n[c] = u), u;
      } else {
        let u = $({}, a, t(a), { id: c, children: void 0 });
        return (
          (n[c] = u), a.children && (u.children = tt(a.children, t, i, n)), u
        );
      }
    })
  );
}
function Me(e, t, r) {
  return r === void 0 && (r = "/"), mt(e, t, r, !1);
}
function mt(e, t, r, n) {
  let a = typeof t == "string" ? de(t) : t,
    l = $e(a.pathname || "/", r);
  if (l == null) return null;
  let i = wr(e);
  bn(i);
  let c = null;
  for (let u = 0; c == null && u < i.length; ++u) {
    let m = On(l);
    c = Tn(i[u], m, n);
  }
  return c;
}
function En(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function wr(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (l, i, c) => {
    let u = {
      relativePath: c === void 0 ? l.path || "" : c,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (M(
        u.relativePath.startsWith(n),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(n.length)));
    let m = ve([n, u.relativePath]),
      h = r.concat(u);
    l.children &&
      l.children.length > 0 &&
      (M(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".'),
      ),
      wr(l.children, t, h, m)),
      !(l.path == null && !l.index) &&
        t.push({ path: m, score: Cn(m, l.index), routesMeta: h });
  };
  return (
    e.forEach((l, i) => {
      var c;
      if (l.path === "" || !((c = l.path) != null && c.includes("?"))) a(l, i);
      else for (let u of Sr(l.path)) a(l, i, u);
    }),
    t
  );
}
function Sr(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    l = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [l, ""] : [l];
  let i = Sr(n.join("/")),
    c = [];
  return (
    c.push(...i.map((u) => (u === "" ? l : [l, u].join("/")))),
    a && c.push(...i),
    c.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function bn(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Ln(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
const Rn = /^:[\w-]+$/,
  wn = 3,
  Sn = 2,
  xn = 1,
  Pn = 10,
  Dn = -2,
  Zt = (e) => e === "*";
function Cn(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Zt) && (n += Dn),
    t && (n += Sn),
    r
      .filter((a) => !Zt(a))
      .reduce((a, l) => a + (Rn.test(l) ? wn : l === "" ? xn : Pn), n)
  );
}
function Ln(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Tn(e, t, r) {
  r === void 0 && (r = !1);
  let { routesMeta: n } = e,
    a = {},
    l = "/",
    i = [];
  for (let c = 0; c < n.length; ++c) {
    let u = n[c],
      m = c === n.length - 1,
      h = l === "/" ? t : t.slice(l.length) || "/",
      d = qt(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: m },
        h,
      ),
      y = u.route;
    if (
      (!d &&
        m &&
        r &&
        !n[n.length - 1].route.index &&
        (d = qt(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          h,
        )),
      !d)
    )
      return null;
    Object.assign(a, d.params),
      i.push({
        params: a,
        pathname: ve([l, d.pathname]),
        pathnameBase: In(ve([l, d.pathnameBase])),
        route: y,
      }),
      d.pathnameBase !== "/" && (l = ve([l, d.pathnameBase]));
  }
  return i;
}
function qt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Mn(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let l = a[0],
    i = l.replace(/(.)\/+$/, "$1"),
    c = a.slice(1);
  return {
    params: n.reduce((m, h, d) => {
      let { paramName: y, isOptional: b } = h;
      if (y === "*") {
        let S = c[d] || "";
        i = l.slice(0, l.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const R = c[d];
      return (
        b && !R ? (m[y] = void 0) : (m[y] = (R || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Mn(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ue(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, c, u) => (
            n.push({ paramName: c, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function On(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ue(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function $e(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function _n(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? de(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : Un(r, t)) : t,
    search: Fn(n),
    hash: Nn(a),
  };
}
function Un(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function St(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function xr(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function It(e, t) {
  let r = xr(e);
  return t
    ? r.map((n, a) => (a === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function Ft(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string"
    ? (a = de(e))
    : ((a = $({}, e)),
      M(
        !a.pathname || !a.pathname.includes("?"),
        St("?", "pathname", "search", a),
      ),
      M(
        !a.pathname || !a.pathname.includes("#"),
        St("#", "pathname", "hash", a),
      ),
      M(!a.search || !a.search.includes("#"), St("#", "search", "hash", a)));
  let l = e === "" || a.pathname === "",
    i = l ? "/" : a.pathname,
    c;
  if (i == null) c = r;
  else {
    let d = t.length - 1;
    if (!n && i.startsWith("..")) {
      let y = i.split("/");
      for (; y[0] === ".."; ) y.shift(), (d -= 1);
      a.pathname = y.join("/");
    }
    c = d >= 0 ? t[d] : "/";
  }
  let u = _n(a, c),
    m = i && i !== "/" && i.endsWith("/"),
    h = (l || i === ".") && r.endsWith("/");
  return !u.pathname.endsWith("/") && (m || h) && (u.pathname += "/"), u;
}
const ve = (e) => e.join("/").replace(/\/\/+/g, "/"),
  In = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Fn = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Nn = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ct {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ""),
      (this.internal = a),
      n instanceof Error
        ? ((this.data = n.toString()), (this.error = n))
        : (this.data = n);
  }
}
function gt(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Pr = ["post", "put", "patch", "delete"],
  An = new Set(Pr),
  jn = ["get", ...Pr],
  kn = new Set(jn),
  Bn = new Set([301, 302, 303, 307, 308]),
  zn = new Set([307, 308]),
  xt = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Hn = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qe = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vn = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Dr = "remix-router-transitions";
function Wn(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    n = !r;
  M(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let o = e.detectErrorBoundary;
    a = (s) => ({ hasErrorBoundary: o(s) });
  } else a = Vn;
  let l = {},
    i = tt(e.routes, a, void 0, l),
    c,
    u = e.basename || "/",
    m = e.unstable_dataStrategy || Gn,
    h = e.unstable_patchRoutesOnNavigation,
    d = $(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    y = null,
    b = new Set(),
    R = 1e3,
    S = new Set(),
    D = null,
    K = null,
    V = null,
    z = e.hydrationData != null,
    N = Me(i, e.history.location, u),
    ee = null;
  if (N == null && !h) {
    let o = ne(404, { pathname: e.history.location.pathname }),
      { matches: s, route: f } = ur(i);
    (N = s), (ee = { [f.id]: o });
  }
  N &&
    !e.hydrationData &&
    ct(N, i, e.history.location.pathname).active &&
    (N = null);
  let se;
  if (N)
    if (N.some((o) => o.route.lazy)) se = !1;
    else if (!N.some((o) => o.route.loader)) se = !0;
    else if (d.v7_partialHydration) {
      let o = e.hydrationData ? e.hydrationData.loaderData : null,
        s = e.hydrationData ? e.hydrationData.errors : null,
        f = (v) =>
          v.route.loader
            ? typeof v.route.loader == "function" &&
              v.route.loader.hydrate === !0
              ? !1
              : (o && o[v.route.id] !== void 0) ||
                (s && s[v.route.id] !== void 0)
            : !0;
      if (s) {
        let v = N.findIndex((w) => s[w.route.id] !== void 0);
        se = N.slice(0, v + 1).every(f);
      } else se = N.every(f);
    } else se = e.hydrationData != null;
  else if (((se = !1), (N = []), d.v7_partialHydration)) {
    let o = ct(null, i, e.history.location.pathname);
    o.active && o.matches && (N = o.matches);
  }
  let Pe,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: N,
      initialized: se,
      navigation: xt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || ee,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = Y.Pop,
    A = !1,
    U,
    Z = !1,
    ae = new Map(),
    Q = null,
    ye = !1,
    De = !1,
    at = [],
    it = new Set(),
    G = new Map(),
    ot = 0,
    Ke = -1,
    Fe = new Map(),
    fe = new Set(),
    Ne = new Map(),
    Ye = new Map(),
    he = new Set(),
    Ce = new Map(),
    Le = new Map(),
    Jr = new Map(),
    Et = !1;
  function Gr() {
    if (
      ((y = e.history.listen((o) => {
        let { action: s, location: f, delta: v } = o;
        if (Et) {
          Et = !1;
          return;
        }
        Ue(
          Le.size === 0 || v != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let w = Yt({
          currentLocation: p.location,
          nextLocation: f,
          historyAction: s,
        });
        if (w && v != null) {
          (Et = !0),
            e.history.go(v * -1),
            st(w, {
              state: "blocked",
              location: f,
              proceed() {
                st(w, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: f,
                }),
                  e.history.go(v);
              },
              reset() {
                let x = new Map(p.blockers);
                x.set(w, Qe), re({ blockers: x });
              },
            });
          return;
        }
        return Te(s, f);
      })),
      r)
    ) {
      sa(t, ae);
      let o = () => ua(t, ae);
      t.addEventListener("pagehide", o),
        (Q = () => t.removeEventListener("pagehide", o));
    }
    return p.initialized || Te(Y.Pop, p.location, { initialHydration: !0 }), Pe;
  }
  function Xr() {
    y && y(),
      Q && Q(),
      b.clear(),
      U && U.abort(),
      p.fetchers.forEach((o, s) => lt(s)),
      p.blockers.forEach((o, s) => Kt(s));
  }
  function Qr(o) {
    return b.add(o), () => b.delete(o);
  }
  function re(o, s) {
    s === void 0 && (s = {}), (p = $({}, p, o));
    let f = [],
      v = [];
    d.v7_fetcherPersist &&
      p.fetchers.forEach((w, x) => {
        w.state === "idle" && (he.has(x) ? v.push(x) : f.push(x));
      }),
      [...b].forEach((w) =>
        w(p, {
          deletedFetchers: v,
          unstable_viewTransitionOpts: s.viewTransitionOpts,
          unstable_flushSync: s.flushSync === !0,
        }),
      ),
      d.v7_fetcherPersist &&
        (f.forEach((w) => p.fetchers.delete(w)), v.forEach((w) => lt(w)));
  }
  function Ae(o, s, f) {
    var v, w;
    let { flushSync: x } = f === void 0 ? {} : f,
      C =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        ue(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((v = o.state) == null ? void 0 : v._isRedirect) !== !0,
      E;
    s.actionData
      ? Object.keys(s.actionData).length > 0
        ? (E = s.actionData)
        : (E = null)
      : C
        ? (E = p.actionData)
        : (E = null);
    let L = s.loaderData
        ? lr(p.loaderData, s.loaderData, s.matches || [], s.errors)
        : p.loaderData,
      P = p.blockers;
    P.size > 0 && ((P = new Map(P)), P.forEach((F, B) => P.set(B, Qe)));
    let T =
      A === !0 ||
      (p.navigation.formMethod != null &&
        ue(p.navigation.formMethod) &&
        ((w = o.state) == null ? void 0 : w._isRedirect) !== !0);
    c && ((i = c), (c = void 0)),
      ye ||
        _ === Y.Pop ||
        (_ === Y.Push
          ? e.history.push(o, o.state)
          : _ === Y.Replace && e.history.replace(o, o.state));
    let j;
    if (_ === Y.Pop) {
      let F = ae.get(p.location.pathname);
      F && F.has(o.pathname)
        ? (j = { currentLocation: p.location, nextLocation: o })
        : ae.has(o.pathname) &&
          (j = { currentLocation: o, nextLocation: p.location });
    } else if (Z) {
      let F = ae.get(p.location.pathname);
      F
        ? F.add(o.pathname)
        : ((F = new Set([o.pathname])), ae.set(p.location.pathname, F)),
        (j = { currentLocation: p.location, nextLocation: o });
    }
    re(
      $({}, s, {
        actionData: E,
        loaderData: L,
        historyAction: _,
        location: o,
        initialized: !0,
        navigation: xt,
        revalidation: "idle",
        restoreScrollPosition: Gt(o, s.matches || p.matches),
        preventScrollReset: T,
        blockers: P,
      }),
      { viewTransitionOpts: j, flushSync: x === !0 },
    ),
      (_ = Y.Pop),
      (A = !1),
      (Z = !1),
      (ye = !1),
      (De = !1),
      (at = []);
  }
  async function kt(o, s) {
    if (typeof o == "number") {
      e.history.go(o);
      return;
    }
    let f = Lt(
        p.location,
        p.matches,
        u,
        d.v7_prependBasename,
        o,
        d.v7_relativeSplatPath,
        s == null ? void 0 : s.fromRouteId,
        s == null ? void 0 : s.relative,
      ),
      {
        path: v,
        submission: w,
        error: x,
      } = er(d.v7_normalizeFormMethod, !1, f, s),
      C = p.location,
      E = Dt(p.location, v, s && s.state);
    E = $({}, E, e.history.encodeLocation(E));
    let L = s && s.replace != null ? s.replace : void 0,
      P = Y.Push;
    L === !0
      ? (P = Y.Replace)
      : L === !1 ||
        (w != null &&
          ue(w.formMethod) &&
          w.formAction === p.location.pathname + p.location.search &&
          (P = Y.Replace));
    let T =
        s && "preventScrollReset" in s ? s.preventScrollReset === !0 : void 0,
      j = (s && s.unstable_flushSync) === !0,
      F = Yt({ currentLocation: C, nextLocation: E, historyAction: P });
    if (F) {
      st(F, {
        state: "blocked",
        location: E,
        proceed() {
          st(F, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: E,
          }),
            kt(o, s);
        },
        reset() {
          let B = new Map(p.blockers);
          B.set(F, Qe), re({ blockers: B });
        },
      });
      return;
    }
    return await Te(P, E, {
      submission: w,
      pendingError: x,
      preventScrollReset: T,
      replace: s && s.replace,
      enableViewTransition: s && s.unstable_viewTransition,
      flushSync: j,
    });
  }
  function Zr() {
    if (
      (bt(),
      re({ revalidation: "loading" }),
      p.navigation.state !== "submitting")
    ) {
      if (p.navigation.state === "idle") {
        Te(p.historyAction, p.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Te(_ || p.historyAction, p.navigation.location, {
        overrideNavigation: p.navigation,
      });
    }
  }
  async function Te(o, s, f) {
    U && U.abort(),
      (U = null),
      (_ = o),
      (ye = (f && f.startUninterruptedRevalidation) === !0),
      un(p.location, p.matches),
      (A = (f && f.preventScrollReset) === !0),
      (Z = (f && f.enableViewTransition) === !0);
    let v = c || i,
      w = f && f.overrideNavigation,
      x = Me(v, s, u),
      C = (f && f.flushSync) === !0,
      E = ct(x, v, s.pathname);
    if ((E.active && E.matches && (x = E.matches), !x)) {
      let { error: I, notFoundMatches: q, route: X } = Rt(s.pathname);
      Ae(
        s,
        { matches: q, loaderData: {}, errors: { [X.id]: I } },
        { flushSync: C },
      );
      return;
    }
    if (
      p.initialized &&
      !De &&
      ta(p.location, s) &&
      !(f && f.submission && ue(f.submission.formMethod))
    ) {
      Ae(s, { matches: x }, { flushSync: C });
      return;
    }
    U = new AbortController();
    let L = ze(e.history, s, U.signal, f && f.submission),
      P;
    if (f && f.pendingError)
      P = [He(x).route.id, { type: k.error, error: f.pendingError }];
    else if (f && f.submission && ue(f.submission.formMethod)) {
      let I = await qr(L, s, f.submission, x, E.active, {
        replace: f.replace,
        flushSync: C,
      });
      if (I.shortCircuited) return;
      if (I.pendingActionResult) {
        let [q, X] = I.pendingActionResult;
        if (le(X) && gt(X.error) && X.error.status === 404) {
          (U = null),
            Ae(s, {
              matches: I.matches,
              loaderData: {},
              errors: { [q]: X.error },
            });
          return;
        }
      }
      (x = I.matches || x),
        (P = I.pendingActionResult),
        (w = Pt(s, f.submission)),
        (C = !1),
        (E.active = !1),
        (L = ze(e.history, L.url, L.signal));
    }
    let {
      shortCircuited: T,
      matches: j,
      loaderData: F,
      errors: B,
    } = await en(
      L,
      s,
      x,
      E.active,
      w,
      f && f.submission,
      f && f.fetcherSubmission,
      f && f.replace,
      f && f.initialHydration === !0,
      C,
      P,
    );
    T ||
      ((U = null),
      Ae(s, $({ matches: j || x }, sr(P), { loaderData: F, errors: B })));
  }
  async function qr(o, s, f, v, w, x) {
    x === void 0 && (x = {}), bt();
    let C = oa(s, f);
    if ((re({ navigation: C }, { flushSync: x.flushSync === !0 }), w)) {
      let P = await dt(v, s.pathname, o.signal);
      if (P.type === "aborted") return { shortCircuited: !0 };
      if (P.type === "error") {
        let { boundaryId: T, error: j } = ut(s.pathname, P);
        return {
          matches: P.partialMatches,
          pendingActionResult: [T, { type: k.error, error: j }],
        };
      } else if (P.matches) v = P.matches;
      else {
        let { notFoundMatches: T, error: j, route: F } = Rt(s.pathname);
        return {
          matches: T,
          pendingActionResult: [F.id, { type: k.error, error: j }],
        };
      }
    }
    let E,
      L = et(v, s);
    if (!L.route.action && !L.route.lazy)
      E = {
        type: k.error,
        error: ne(405, {
          method: o.method,
          pathname: s.pathname,
          routeId: L.route.id,
        }),
      };
    else if (((E = (await Ge("action", o, [L], v))[0]), o.signal.aborted))
      return { shortCircuited: !0 };
    if (_e(E)) {
      let P;
      return (
        x && x.replace != null
          ? (P = x.replace)
          : (P =
              ar(E.response.headers.get("Location"), new URL(o.url), u) ===
              p.location.pathname + p.location.search),
        await Je(o, E, { submission: f, replace: P }),
        { shortCircuited: !0 }
      );
    }
    if (Oe(E)) throw ne(400, { type: "defer-action" });
    if (le(E)) {
      let P = He(v, L.route.id);
      return (
        (x && x.replace) !== !0 && (_ = Y.Push),
        { matches: v, pendingActionResult: [P.route.id, E] }
      );
    }
    return { matches: v, pendingActionResult: [L.route.id, E] };
  }
  async function en(o, s, f, v, w, x, C, E, L, P, T) {
    let j = w || Pt(s, x),
      F = x || C || hr(j),
      B = !ye && (!d.v7_partialHydration || !L);
    if (v) {
      if (B) {
        let W = Bt(T);
        re($({ navigation: j }, W !== void 0 ? { actionData: W } : {}), {
          flushSync: P,
        });
      }
      let O = await dt(f, s.pathname, o.signal);
      if (O.type === "aborted") return { shortCircuited: !0 };
      if (O.type === "error") {
        let { boundaryId: W, error: oe } = ut(s.pathname, O);
        return {
          matches: O.partialMatches,
          loaderData: {},
          errors: { [W]: oe },
        };
      } else if (O.matches) f = O.matches;
      else {
        let { error: W, notFoundMatches: oe, route: H } = Rt(s.pathname);
        return { matches: oe, loaderData: {}, errors: { [H.id]: W } };
      }
    }
    let I = c || i,
      [q, X] = tr(
        e.history,
        p,
        f,
        F,
        s,
        d.v7_partialHydration && L === !0,
        d.v7_skipActionErrorRevalidation,
        De,
        at,
        it,
        he,
        Ne,
        fe,
        I,
        u,
        T,
      );
    if (
      (wt(
        (O) =>
          !(f && f.some((W) => W.route.id === O)) ||
          (q && q.some((W) => W.route.id === O)),
      ),
      (Ke = ++ot),
      q.length === 0 && X.length === 0)
    ) {
      let O = Wt();
      return (
        Ae(
          s,
          $(
            {
              matches: f,
              loaderData: {},
              errors: T && le(T[1]) ? { [T[0]]: T[1].error } : null,
            },
            sr(T),
            O ? { fetchers: new Map(p.fetchers) } : {},
          ),
          { flushSync: P },
        ),
        { shortCircuited: !0 }
      );
    }
    if (B) {
      let O = {};
      if (!v) {
        O.navigation = j;
        let W = Bt(T);
        W !== void 0 && (O.actionData = W);
      }
      X.length > 0 && (O.fetchers = tn(X)), re(O, { flushSync: P });
    }
    X.forEach((O) => {
      G.has(O.key) && be(O.key), O.controller && G.set(O.key, O.controller);
    });
    let Xe = () => X.forEach((O) => be(O.key));
    U && U.signal.addEventListener("abort", Xe);
    let { loaderResults: Re, fetcherResults: je } = await zt(
      p.matches,
      f,
      q,
      X,
      o,
    );
    if (o.signal.aborted) return { shortCircuited: !0 };
    U && U.signal.removeEventListener("abort", Xe),
      X.forEach((O) => G.delete(O.key));
    let ke = cr([...Re, ...je]);
    if (ke) {
      if (ke.idx >= q.length) {
        let O = X[ke.idx - q.length].key;
        fe.add(O);
      }
      return await Je(o, ke.result, { replace: E }), { shortCircuited: !0 };
    }
    let { loaderData: Be, errors: ce } = or(p, f, q, Re, T, X, je, Ce);
    Ce.forEach((O, W) => {
      O.subscribe((oe) => {
        (oe || O.done) && Ce.delete(W);
      });
    }),
      d.v7_partialHydration &&
        L &&
        p.errors &&
        Object.entries(p.errors)
          .filter((O) => {
            let [W] = O;
            return !q.some((oe) => oe.route.id === W);
          })
          .forEach((O) => {
            let [W, oe] = O;
            ce = Object.assign(ce || {}, { [W]: oe });
          });
    let ft = Wt(),
      ht = $t(Ke),
      pt = ft || ht || X.length > 0;
    return $(
      { matches: f, loaderData: Be, errors: ce },
      pt ? { fetchers: new Map(p.fetchers) } : {},
    );
  }
  function Bt(o) {
    if (o && !le(o[1])) return { [o[0]]: o[1].data };
    if (p.actionData)
      return Object.keys(p.actionData).length === 0 ? null : p.actionData;
  }
  function tn(o) {
    return (
      o.forEach((s) => {
        let f = p.fetchers.get(s.key),
          v = Ze(void 0, f ? f.data : void 0);
        p.fetchers.set(s.key, v);
      }),
      new Map(p.fetchers)
    );
  }
  function rn(o, s, f, v) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    G.has(o) && be(o);
    let w = (v && v.unstable_flushSync) === !0,
      x = c || i,
      C = Lt(
        p.location,
        p.matches,
        u,
        d.v7_prependBasename,
        f,
        d.v7_relativeSplatPath,
        s,
        v == null ? void 0 : v.relative,
      ),
      E = Me(x, C, u),
      L = ct(E, x, C);
    if ((L.active && L.matches && (E = L.matches), !E)) {
      pe(o, s, ne(404, { pathname: C }), { flushSync: w });
      return;
    }
    let {
      path: P,
      submission: T,
      error: j,
    } = er(d.v7_normalizeFormMethod, !0, C, v);
    if (j) {
      pe(o, s, j, { flushSync: w });
      return;
    }
    let F = et(E, P);
    if (((A = (v && v.preventScrollReset) === !0), T && ue(T.formMethod))) {
      nn(o, s, P, F, E, L.active, w, T);
      return;
    }
    Ne.set(o, { routeId: s, path: P }), an(o, s, P, F, E, L.active, w, T);
  }
  async function nn(o, s, f, v, w, x, C, E) {
    bt(), Ne.delete(o);
    function L(H) {
      if (!H.route.action && !H.route.lazy) {
        let me = ne(405, { method: E.formMethod, pathname: f, routeId: s });
        return pe(o, s, me, { flushSync: C }), !0;
      }
      return !1;
    }
    if (!x && L(v)) return;
    let P = p.fetchers.get(o);
    Ee(o, la(E, P), { flushSync: C });
    let T = new AbortController(),
      j = ze(e.history, f, T.signal, E);
    if (x) {
      let H = await dt(w, f, j.signal);
      if (H.type === "aborted") return;
      if (H.type === "error") {
        let { error: me } = ut(f, H);
        pe(o, s, me, { flushSync: C });
        return;
      } else if (H.matches) {
        if (((w = H.matches), (v = et(w, f)), L(v))) return;
      } else {
        pe(o, s, ne(404, { pathname: f }), { flushSync: C });
        return;
      }
    }
    G.set(o, T);
    let F = ot,
      I = (await Ge("action", j, [v], w))[0];
    if (j.signal.aborted) {
      G.get(o) === T && G.delete(o);
      return;
    }
    if (d.v7_fetcherPersist && he.has(o)) {
      if (_e(I) || le(I)) {
        Ee(o, Se(void 0));
        return;
      }
    } else {
      if (_e(I))
        if ((G.delete(o), Ke > F)) {
          Ee(o, Se(void 0));
          return;
        } else
          return fe.add(o), Ee(o, Ze(E)), Je(j, I, { fetcherSubmission: E });
      if (le(I)) {
        pe(o, s, I.error);
        return;
      }
    }
    if (Oe(I)) throw ne(400, { type: "defer-action" });
    let q = p.navigation.location || p.location,
      X = ze(e.history, q, T.signal),
      Xe = c || i,
      Re =
        p.navigation.state !== "idle"
          ? Me(Xe, p.navigation.location, u)
          : p.matches;
    M(Re, "Didn't find any matches after fetcher action");
    let je = ++ot;
    Fe.set(o, je);
    let ke = Ze(E, I.data);
    p.fetchers.set(o, ke);
    let [Be, ce] = tr(
      e.history,
      p,
      Re,
      E,
      q,
      !1,
      d.v7_skipActionErrorRevalidation,
      De,
      at,
      it,
      he,
      Ne,
      fe,
      Xe,
      u,
      [v.route.id, I],
    );
    ce
      .filter((H) => H.key !== o)
      .forEach((H) => {
        let me = H.key,
          Qt = p.fetchers.get(me),
          fn = Ze(void 0, Qt ? Qt.data : void 0);
        p.fetchers.set(me, fn),
          G.has(me) && be(me),
          H.controller && G.set(me, H.controller);
      }),
      re({ fetchers: new Map(p.fetchers) });
    let ft = () => ce.forEach((H) => be(H.key));
    T.signal.addEventListener("abort", ft);
    let { loaderResults: ht, fetcherResults: pt } = await zt(
      p.matches,
      Re,
      Be,
      ce,
      X,
    );
    if (T.signal.aborted) return;
    T.signal.removeEventListener("abort", ft),
      Fe.delete(o),
      G.delete(o),
      ce.forEach((H) => G.delete(H.key));
    let O = cr([...ht, ...pt]);
    if (O) {
      if (O.idx >= Be.length) {
        let H = ce[O.idx - Be.length].key;
        fe.add(H);
      }
      return Je(X, O.result);
    }
    let { loaderData: W, errors: oe } = or(
      p,
      p.matches,
      Be,
      ht,
      void 0,
      ce,
      pt,
      Ce,
    );
    if (p.fetchers.has(o)) {
      let H = Se(I.data);
      p.fetchers.set(o, H);
    }
    $t(je),
      p.navigation.state === "loading" && je > Ke
        ? (M(_, "Expected pending action"),
          U && U.abort(),
          Ae(p.navigation.location, {
            matches: Re,
            loaderData: W,
            errors: oe,
            fetchers: new Map(p.fetchers),
          }))
        : (re({
            errors: oe,
            loaderData: lr(p.loaderData, W, Re, oe),
            fetchers: new Map(p.fetchers),
          }),
          (De = !1));
  }
  async function an(o, s, f, v, w, x, C, E) {
    let L = p.fetchers.get(o);
    Ee(o, Ze(E, L ? L.data : void 0), { flushSync: C });
    let P = new AbortController(),
      T = ze(e.history, f, P.signal);
    if (x) {
      let I = await dt(w, f, T.signal);
      if (I.type === "aborted") return;
      if (I.type === "error") {
        let { error: q } = ut(f, I);
        pe(o, s, q, { flushSync: C });
        return;
      } else if (I.matches) (w = I.matches), (v = et(w, f));
      else {
        pe(o, s, ne(404, { pathname: f }), { flushSync: C });
        return;
      }
    }
    G.set(o, P);
    let j = ot,
      B = (await Ge("loader", T, [v], w))[0];
    if (
      (Oe(B) && (B = (await Or(B, T.signal, !0)) || B),
      G.get(o) === P && G.delete(o),
      !T.signal.aborted)
    ) {
      if (he.has(o)) {
        Ee(o, Se(void 0));
        return;
      }
      if (_e(B))
        if (Ke > j) {
          Ee(o, Se(void 0));
          return;
        } else {
          fe.add(o), await Je(T, B);
          return;
        }
      if (le(B)) {
        pe(o, s, B.error);
        return;
      }
      M(!Oe(B), "Unhandled fetcher deferred data"), Ee(o, Se(B.data));
    }
  }
  async function Je(o, s, f) {
    let {
      submission: v,
      fetcherSubmission: w,
      replace: x,
    } = f === void 0 ? {} : f;
    s.response.headers.has("X-Remix-Revalidate") && (De = !0);
    let C = s.response.headers.get("Location");
    M(C, "Expected a Location header on the redirect Response"),
      (C = ar(C, new URL(o.url), u));
    let E = Dt(p.location, C, { _isRedirect: !0 });
    if (r) {
      let B = !1;
      if (s.response.headers.has("X-Remix-Reload-Document")) B = !0;
      else if (Nt.test(C)) {
        const I = e.history.createURL(C);
        B = I.origin !== t.location.origin || $e(I.pathname, u) == null;
      }
      if (B) {
        x ? t.location.replace(C) : t.location.assign(C);
        return;
      }
    }
    U = null;
    let L =
        x === !0 || s.response.headers.has("X-Remix-Replace")
          ? Y.Replace
          : Y.Push,
      { formMethod: P, formAction: T, formEncType: j } = p.navigation;
    !v && !w && P && T && j && (v = hr(p.navigation));
    let F = v || w;
    if (zn.has(s.response.status) && F && ue(F.formMethod))
      await Te(L, E, {
        submission: $({}, F, { formAction: C }),
        preventScrollReset: A,
      });
    else {
      let B = Pt(E, v);
      await Te(L, E, {
        overrideNavigation: B,
        fetcherSubmission: w,
        preventScrollReset: A,
      });
    }
  }
  async function Ge(o, s, f, v) {
    try {
      let w = await Xn(m, o, s, f, v, l, a);
      return await Promise.all(
        w.map((x, C) => {
          if (na(x)) {
            let E = x.result;
            return {
              type: k.redirect,
              response: qn(E, s, f[C].route.id, v, u, d.v7_relativeSplatPath),
            };
          }
          return Zn(x);
        }),
      );
    } catch (w) {
      return f.map(() => ({ type: k.error, error: w }));
    }
  }
  async function zt(o, s, f, v, w) {
    let [x, ...C] = await Promise.all([
      f.length ? Ge("loader", w, f, s) : [],
      ...v.map((E) => {
        if (E.matches && E.match && E.controller) {
          let L = ze(e.history, E.path, E.controller.signal);
          return Ge("loader", L, [E.match], E.matches).then((P) => P[0]);
        } else
          return Promise.resolve({
            type: k.error,
            error: ne(404, { pathname: E.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        fr(
          o,
          f,
          x,
          x.map(() => w.signal),
          !1,
          p.loaderData,
        ),
        fr(
          o,
          v.map((E) => E.match),
          C,
          v.map((E) => (E.controller ? E.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: x, fetcherResults: C }
    );
  }
  function bt() {
    (De = !0),
      at.push(...wt()),
      Ne.forEach((o, s) => {
        G.has(s) && (it.add(s), be(s));
      });
  }
  function Ee(o, s, f) {
    f === void 0 && (f = {}),
      p.fetchers.set(o, s),
      re(
        { fetchers: new Map(p.fetchers) },
        { flushSync: (f && f.flushSync) === !0 },
      );
  }
  function pe(o, s, f, v) {
    v === void 0 && (v = {});
    let w = He(p.matches, s);
    lt(o),
      re(
        { errors: { [w.route.id]: f }, fetchers: new Map(p.fetchers) },
        { flushSync: (v && v.flushSync) === !0 },
      );
  }
  function Ht(o) {
    return (
      d.v7_fetcherPersist &&
        (Ye.set(o, (Ye.get(o) || 0) + 1), he.has(o) && he.delete(o)),
      p.fetchers.get(o) || Hn
    );
  }
  function lt(o) {
    let s = p.fetchers.get(o);
    G.has(o) && !(s && s.state === "loading" && Fe.has(o)) && be(o),
      Ne.delete(o),
      Fe.delete(o),
      fe.delete(o),
      he.delete(o),
      it.delete(o),
      p.fetchers.delete(o);
  }
  function on(o) {
    if (d.v7_fetcherPersist) {
      let s = (Ye.get(o) || 0) - 1;
      s <= 0 ? (Ye.delete(o), he.add(o)) : Ye.set(o, s);
    } else lt(o);
    re({ fetchers: new Map(p.fetchers) });
  }
  function be(o) {
    let s = G.get(o);
    M(s, "Expected fetch controller: " + o), s.abort(), G.delete(o);
  }
  function Vt(o) {
    for (let s of o) {
      let f = Ht(s),
        v = Se(f.data);
      p.fetchers.set(s, v);
    }
  }
  function Wt() {
    let o = [],
      s = !1;
    for (let f of fe) {
      let v = p.fetchers.get(f);
      M(v, "Expected fetcher: " + f),
        v.state === "loading" && (fe.delete(f), o.push(f), (s = !0));
    }
    return Vt(o), s;
  }
  function $t(o) {
    let s = [];
    for (let [f, v] of Fe)
      if (v < o) {
        let w = p.fetchers.get(f);
        M(w, "Expected fetcher: " + f),
          w.state === "loading" && (be(f), Fe.delete(f), s.push(f));
      }
    return Vt(s), s.length > 0;
  }
  function ln(o, s) {
    let f = p.blockers.get(o) || Qe;
    return Le.get(o) !== s && Le.set(o, s), f;
  }
  function Kt(o) {
    p.blockers.delete(o), Le.delete(o);
  }
  function st(o, s) {
    let f = p.blockers.get(o) || Qe;
    M(
      (f.state === "unblocked" && s.state === "blocked") ||
        (f.state === "blocked" && s.state === "blocked") ||
        (f.state === "blocked" && s.state === "proceeding") ||
        (f.state === "blocked" && s.state === "unblocked") ||
        (f.state === "proceeding" && s.state === "unblocked"),
      "Invalid blocker state transition: " + f.state + " -> " + s.state,
    );
    let v = new Map(p.blockers);
    v.set(o, s), re({ blockers: v });
  }
  function Yt(o) {
    let { currentLocation: s, nextLocation: f, historyAction: v } = o;
    if (Le.size === 0) return;
    Le.size > 1 && Ue(!1, "A router only supports one blocker at a time");
    let w = Array.from(Le.entries()),
      [x, C] = w[w.length - 1],
      E = p.blockers.get(x);
    if (
      !(E && E.state === "proceeding") &&
      C({ currentLocation: s, nextLocation: f, historyAction: v })
    )
      return x;
  }
  function Rt(o) {
    let s = ne(404, { pathname: o }),
      f = c || i,
      { matches: v, route: w } = ur(f);
    return wt(), { notFoundMatches: v, route: w, error: s };
  }
  function ut(o, s) {
    return {
      boundaryId: He(s.partialMatches).route.id,
      error: ne(400, {
        type: "route-discovery",
        pathname: o,
        message:
          s.error != null && "message" in s.error ? s.error : String(s.error),
      }),
    };
  }
  function wt(o) {
    let s = [];
    return (
      Ce.forEach((f, v) => {
        (!o || o(v)) && (f.cancel(), s.push(v), Ce.delete(v));
      }),
      s
    );
  }
  function sn(o, s, f) {
    if (((D = o), (V = s), (K = f || null), !z && p.navigation === xt)) {
      z = !0;
      let v = Gt(p.location, p.matches);
      v != null && re({ restoreScrollPosition: v });
    }
    return () => {
      (D = null), (V = null), (K = null);
    };
  }
  function Jt(o, s) {
    return (
      (K &&
        K(
          o,
          s.map((v) => En(v, p.loaderData)),
        )) ||
      o.key
    );
  }
  function un(o, s) {
    if (D && V) {
      let f = Jt(o, s);
      D[f] = V();
    }
  }
  function Gt(o, s) {
    if (D) {
      let f = Jt(o, s),
        v = D[f];
      if (typeof v == "number") return v;
    }
    return null;
  }
  function ct(o, s, f) {
    if (h) {
      if (S.has(f)) return { active: !1, matches: o };
      if (o) {
        if (Object.keys(o[0].params).length > 0)
          return { active: !0, matches: mt(s, f, u, !0) };
      } else return { active: !0, matches: mt(s, f, u, !0) || [] };
    }
    return { active: !1, matches: null };
  }
  async function dt(o, s, f) {
    let v = o;
    for (;;) {
      let w = c == null,
        x = c || i;
      try {
        await Jn(h, s, v, x, l, a, Jr, f);
      } catch (L) {
        return { type: "error", error: L, partialMatches: v };
      } finally {
        w && (i = [...i]);
      }
      if (f.aborted) return { type: "aborted" };
      let C = Me(x, s, u);
      if (C) return Xt(s, S), { type: "success", matches: C };
      let E = mt(x, s, u, !0);
      if (
        !E ||
        (v.length === E.length &&
          v.every((L, P) => L.route.id === E[P].route.id))
      )
        return Xt(s, S), { type: "success", matches: null };
      v = E;
    }
  }
  function Xt(o, s) {
    if (s.size >= R) {
      let f = s.values().next().value;
      s.delete(f);
    }
    s.add(o);
  }
  function cn(o) {
    (l = {}), (c = tt(o, a, void 0, l));
  }
  function dn(o, s) {
    let f = c == null;
    Lr(o, s, c || i, l, a), f && ((i = [...i]), re({}));
  }
  return (
    (Pe = {
      get basename() {
        return u;
      },
      get future() {
        return d;
      },
      get state() {
        return p;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Gr,
      subscribe: Qr,
      enableScrollRestoration: sn,
      navigate: kt,
      fetch: rn,
      revalidate: Zr,
      createHref: (o) => e.history.createHref(o),
      encodeLocation: (o) => e.history.encodeLocation(o),
      getFetcher: Ht,
      deleteFetcher: on,
      dispose: Xr,
      getBlocker: ln,
      deleteBlocker: Kt,
      patchRoutes: dn,
      _internalFetchControllers: G,
      _internalActiveDeferreds: Ce,
      _internalSetRoutes: cn,
    }),
    Pe
  );
}
function $n(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Lt(e, t, r, n, a, l, i, c) {
  let u, m;
  if (i) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === i)) {
        m = d;
        break;
      }
  } else (u = t), (m = t[t.length - 1]);
  let h = Ft(a || ".", It(u, l), $e(e.pathname, r) || e.pathname, c === "path");
  return (
    a == null && ((h.search = e.search), (h.hash = e.hash)),
    (a == null || a === "" || a === ".") &&
      m &&
      m.route.index &&
      !At(h.search) &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    n &&
      r !== "/" &&
      (h.pathname = h.pathname === "/" ? r : ve([r, h.pathname])),
    Ve(h)
  );
}
function er(e, t, r, n) {
  if (!n || !$n(n)) return { path: r };
  if (n.formMethod && !ia(n.formMethod))
    return { path: r, error: ne(405, { method: n.formMethod }) };
  let a = () => ({ path: r, error: ne(400, { type: "invalid-body" }) }),
    l = n.formMethod || "get",
    i = e ? l.toUpperCase() : l.toLowerCase(),
    c = Tr(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!ue(i)) return a();
      let y =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((b, R) => {
                let [S, D] = R;
                return (
                  "" +
                  b +
                  S +
                  "=" +
                  D +
                  `
`
                );
              }, "")
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: i,
          formAction: c,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: y,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!ue(i)) return a();
      try {
        let y = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: i,
            formAction: c,
            formEncType: n.formEncType,
            formData: void 0,
            json: y,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  M(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, m;
  if (n.formData) (u = Tt(n.formData)), (m = n.formData);
  else if (n.body instanceof FormData) (u = Tt(n.body)), (m = n.body);
  else if (n.body instanceof URLSearchParams) (u = n.body), (m = ir(u));
  else if (n.body == null) (u = new URLSearchParams()), (m = new FormData());
  else
    try {
      (u = new URLSearchParams(n.body)), (m = ir(u));
    } catch {
      return a();
    }
  let h = {
    formMethod: i,
    formAction: c,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (ue(h.formMethod)) return { path: r, submission: h };
  let d = de(r);
  return (
    t && d.search && At(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: Ve(d), submission: h }
  );
}
function Kn(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function tr(e, t, r, n, a, l, i, c, u, m, h, d, y, b, R, S) {
  let D = S ? (le(S[1]) ? S[1].error : S[1].data) : void 0,
    K = e.createURL(t.location),
    V = e.createURL(a),
    z = S && le(S[1]) ? S[0] : void 0,
    N = z ? Kn(r, z) : r,
    ee = S ? S[1].statusCode : void 0,
    se = i && ee && ee >= 400,
    Pe = N.filter((_, A) => {
      let { route: U } = _;
      if (U.lazy) return !0;
      if (U.loader == null) return !1;
      if (l)
        return typeof U.loader != "function" || U.loader.hydrate
          ? !0
          : t.loaderData[U.id] === void 0 &&
              (!t.errors || t.errors[U.id] === void 0);
      if (Yn(t.loaderData, t.matches[A], _) || u.some((Q) => Q === _.route.id))
        return !0;
      let Z = t.matches[A],
        ae = _;
      return rr(
        _,
        $(
          {
            currentUrl: K,
            currentParams: Z.params,
            nextUrl: V,
            nextParams: ae.params,
          },
          n,
          {
            actionResult: D,
            actionStatus: ee,
            defaultShouldRevalidate: se
              ? !1
              : c ||
                K.pathname + K.search === V.pathname + V.search ||
                K.search !== V.search ||
                Cr(Z, ae),
          },
        ),
      );
    }),
    p = [];
  return (
    d.forEach((_, A) => {
      if (l || !r.some((ye) => ye.route.id === _.routeId) || h.has(A)) return;
      let U = Me(b, _.path, R);
      if (!U) {
        p.push({
          key: A,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let Z = t.fetchers.get(A),
        ae = et(U, _.path),
        Q = !1;
      y.has(A)
        ? (Q = !1)
        : m.has(A)
          ? (m.delete(A), (Q = !0))
          : Z && Z.state !== "idle" && Z.data === void 0
            ? (Q = c)
            : (Q = rr(
                ae,
                $(
                  {
                    currentUrl: K,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: V,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  {
                    actionResult: D,
                    actionStatus: ee,
                    defaultShouldRevalidate: se ? !1 : c,
                  },
                ),
              )),
        Q &&
          p.push({
            key: A,
            routeId: _.routeId,
            path: _.path,
            matches: U,
            match: ae,
            controller: new AbortController(),
          });
    }),
    [Pe, p]
  );
}
function Yn(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function Cr(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function rr(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function Jn(e, t, r, n, a, l, i, c) {
  let u = [t, ...r.map((m) => m.route.id)].join("-");
  try {
    let m = i.get(u);
    m ||
      ((m = e({
        path: t,
        matches: r,
        patch: (h, d) => {
          c.aborted || Lr(h, d, n, a, l);
        },
      })),
      i.set(u, m)),
      m && ra(m) && (await m);
  } finally {
    i.delete(u);
  }
}
function Lr(e, t, r, n, a) {
  if (e) {
    var l;
    let i = n[e];
    M(i, "No route found to patch children into: routeId = " + e);
    let c = tt(
      t,
      a,
      [
        e,
        "patch",
        String(((l = i.children) == null ? void 0 : l.length) || "0"),
      ],
      n,
    );
    i.children ? i.children.push(...c) : (i.children = c);
  } else {
    let i = tt(t, a, ["patch", String(r.length || "0")], n);
    r.push(...i);
  }
}
async function nr(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  M(a, "No route found in manifest");
  let l = {};
  for (let i in n) {
    let u = a[i] !== void 0 && i !== "hasErrorBoundary";
    Ue(
      !u,
      'Route "' +
        a.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !u && !gn.has(i) && (l[i] = n[i]);
  }
  Object.assign(a, l), Object.assign(a, $({}, t(a), { lazy: void 0 }));
}
function Gn(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function Xn(e, t, r, n, a, l, i, c) {
  let u = n.reduce((d, y) => d.add(y.route.id), new Set()),
    m = new Set(),
    h = await e({
      matches: a.map((d) => {
        let y = u.has(d.route.id);
        return $({}, d, {
          shouldLoad: y,
          resolve: (R) => (
            m.add(d.route.id),
            y
              ? Qn(t, r, d, l, i, R, c)
              : Promise.resolve({ type: k.data, result: void 0 })
          ),
        });
      }),
      request: r,
      params: a[0].params,
      context: c,
    });
  return (
    a.forEach((d) =>
      M(
        m.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    h.filter((d, y) => u.has(a[y].route.id))
  );
}
async function Qn(e, t, r, n, a, l, i) {
  let c,
    u,
    m = (h) => {
      let d,
        y = new Promise((S, D) => (d = D));
      (u = () => d()), t.signal.addEventListener("abort", u);
      let b = (S) =>
          typeof h != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + r.route.id + "]"),
                ),
              )
            : h(
                { request: t, params: r.params, context: i },
                ...(S !== void 0 ? [S] : []),
              ),
        R;
      return (
        l
          ? (R = l((S) => b(S)))
          : (R = (async () => {
              try {
                return { type: "data", result: await b() };
              } catch (S) {
                return { type: "error", result: S };
              }
            })()),
        Promise.race([R, y])
      );
    };
  try {
    let h = r.route[e];
    if (r.route.lazy)
      if (h) {
        let d,
          [y] = await Promise.all([
            m(h).catch((b) => {
              d = b;
            }),
            nr(r.route, a, n),
          ]);
        if (d !== void 0) throw d;
        c = y;
      } else if ((await nr(r.route, a, n), (h = r.route[e]), h)) c = await m(h);
      else if (e === "action") {
        let d = new URL(t.url),
          y = d.pathname + d.search;
        throw ne(405, { method: t.method, pathname: y, routeId: r.route.id });
      } else return { type: k.data, result: void 0 };
    else if (h) c = await m(h);
    else {
      let d = new URL(t.url),
        y = d.pathname + d.search;
      throw ne(404, { pathname: y });
    }
    M(
      c.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (h) {
    return { type: k.error, result: h };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return c;
}
async function Zn(e) {
  let { result: t, type: r } = e;
  if (Mr(t)) {
    let m;
    try {
      let h = t.headers.get("Content-Type");
      h && /\bapplication\/json\b/.test(h)
        ? t.body == null
          ? (m = null)
          : (m = await t.json())
        : (m = await t.text());
    } catch (h) {
      return { type: k.error, error: h };
    }
    return r === k.error
      ? {
          type: k.error,
          error: new Ct(t.status, t.statusText, m),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: k.data, data: m, statusCode: t.status, headers: t.headers };
  }
  if (r === k.error) {
    if (dr(t)) {
      var n;
      if (t.data instanceof Error) {
        var a;
        return {
          type: k.error,
          error: t.data,
          statusCode: (a = t.init) == null ? void 0 : a.status,
        };
      }
      t = new Ct(
        ((n = t.init) == null ? void 0 : n.status) || 500,
        void 0,
        t.data,
      );
    }
    return { type: k.error, error: t, statusCode: gt(t) ? t.status : void 0 };
  }
  if (aa(t)) {
    var l, i;
    return {
      type: k.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (dr(t)) {
    var c, u;
    return {
      type: k.data,
      data: t.data,
      statusCode: (c = t.init) == null ? void 0 : c.status,
      headers:
        (u = t.init) != null && u.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: k.data, data: t };
}
function qn(e, t, r, n, a, l) {
  let i = e.headers.get("Location");
  if (
    (M(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Nt.test(i))
  ) {
    let c = n.slice(0, n.findIndex((u) => u.route.id === r) + 1);
    (i = Lt(new URL(t.url), c, a, !0, i, l)), e.headers.set("Location", i);
  }
  return e;
}
function ar(e, t, r) {
  if (Nt.test(e)) {
    let n = e,
      a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      l = $e(a.pathname, r) != null;
    if (a.origin === t.origin && l) return a.pathname + a.search + a.hash;
  }
  return e;
}
function ze(e, t, r, n) {
  let a = e.createURL(Tr(t)).toString(),
    l = { signal: r };
  if (n && ue(n.formMethod)) {
    let { formMethod: i, formEncType: c } = n;
    (l.method = i.toUpperCase()),
      c === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": c })),
          (l.body = JSON.stringify(n.json)))
        : c === "text/plain"
          ? (l.body = n.text)
          : c === "application/x-www-form-urlencoded" && n.formData
            ? (l.body = Tt(n.formData))
            : (l.body = n.formData);
  }
  return new Request(a, l);
}
function Tt(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function ir(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function ea(e, t, r, n, a, l) {
  let i = {},
    c = null,
    u,
    m = !1,
    h = {},
    d = n && le(n[1]) ? n[1].error : void 0;
  return (
    r.forEach((y, b) => {
      let R = t[b].route.id;
      if (
        (M(!_e(y), "Cannot handle redirect results in processLoaderData"),
        le(y))
      ) {
        let S = y.error;
        d !== void 0 && ((S = d), (d = void 0)), (c = c || {});
        {
          let D = He(e, R);
          c[D.route.id] == null && (c[D.route.id] = S);
        }
        (i[R] = void 0),
          m || ((m = !0), (u = gt(y.error) ? y.error.status : 500)),
          y.headers && (h[R] = y.headers);
      } else
        Oe(y)
          ? (a.set(R, y.deferredData),
            (i[R] = y.deferredData.data),
            y.statusCode != null &&
              y.statusCode !== 200 &&
              !m &&
              (u = y.statusCode),
            y.headers && (h[R] = y.headers))
          : ((i[R] = y.data),
            y.statusCode && y.statusCode !== 200 && !m && (u = y.statusCode),
            y.headers && (h[R] = y.headers));
    }),
    d !== void 0 && n && ((c = { [n[0]]: d }), (i[n[0]] = void 0)),
    { loaderData: i, errors: c, statusCode: u || 200, loaderHeaders: h }
  );
}
function or(e, t, r, n, a, l, i, c) {
  let { loaderData: u, errors: m } = ea(t, r, n, a, c);
  for (let h = 0; h < l.length; h++) {
    let { key: d, match: y, controller: b } = l[h];
    M(
      i !== void 0 && i[h] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let R = i[h];
    if (!(b && b.signal.aborted))
      if (le(R)) {
        let S = He(e.matches, y == null ? void 0 : y.route.id);
        (m && m[S.route.id]) || (m = $({}, m, { [S.route.id]: R.error })),
          e.fetchers.delete(d);
      } else if (_e(R)) M(!1, "Unhandled fetcher revalidation redirect");
      else if (Oe(R)) M(!1, "Unhandled fetcher deferred data");
      else {
        let S = Se(R.data);
        e.fetchers.set(d, S);
      }
  }
  return { loaderData: u, errors: m };
}
function lr(e, t, r, n) {
  let a = $({}, t);
  for (let l of r) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (a[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (a[i] = e[i]),
      n && n.hasOwnProperty(i))
    )
      break;
  }
  return a;
}
function sr(e) {
  return e
    ? le(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function He(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function ur(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ne(e, t) {
  let {
      pathname: r,
      routeId: n,
      method: a,
      type: l,
      message: i,
    } = t === void 0 ? {} : t,
    c = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((c = "Bad Request"),
        l === "route-discovery"
          ? (u =
              'Unable to match URL "' +
              r +
              '" - the `unstable_patchRoutesOnNavigation()` ' +
              (`function threw the following error:
` +
                i))
          : a && r && n
            ? (u =
                "You made a " +
                a +
                ' request to "' +
                r +
                '" but ' +
                ('did not provide a `loader` for route "' + n + '", ') +
                "so there is no way to handle the request.")
            : l === "defer-action"
              ? (u = "defer() is not supported in actions")
              : l === "invalid-body" &&
                (u = "Unable to encode submission body"))
      : e === 403
        ? ((c = "Forbidden"),
          (u = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((c = "Not Found"), (u = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((c = "Method Not Allowed"),
            a && r && n
              ? (u =
                  "You made a " +
                  a.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  "so there is no way to handle the request.")
              : a && (u = 'Invalid request method "' + a.toUpperCase() + '"')),
    new Ct(e || 500, c, new Error(u), !0)
  );
}
function cr(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (_e(r)) return { result: r, idx: t };
  }
}
function Tr(e) {
  let t = typeof e == "string" ? de(e) : e;
  return Ve($({}, t, { hash: "" }));
}
function ta(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function ra(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function na(e) {
  return Mr(e.result) && Bn.has(e.result.status);
}
function Oe(e) {
  return e.type === k.deferred;
}
function le(e) {
  return e.type === k.error;
}
function _e(e) {
  return (e && e.type) === k.redirect;
}
function dr(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function aa(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Mr(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ia(e) {
  return kn.has(e.toLowerCase());
}
function ue(e) {
  return An.has(e.toLowerCase());
}
async function fr(e, t, r, n, a, l) {
  for (let i = 0; i < r.length; i++) {
    let c = r[i],
      u = t[i];
    if (!u) continue;
    let m = e.find((d) => d.route.id === u.route.id),
      h = m != null && !Cr(m, u) && (l && l[u.route.id]) !== void 0;
    if (Oe(c) && (a || h)) {
      let d = n[i];
      M(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Or(c, d, a).then((y) => {
          y && (r[i] = y || r[i]);
        });
    }
  }
}
async function Or(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: k.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: k.error, error: a };
      }
    return { type: k.data, data: e.deferredData.data };
  }
}
function At(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function et(e, t) {
  let r = typeof t == "string" ? de(t).search : t.search;
  if (e[e.length - 1].route.index && At(r || "")) return e[e.length - 1];
  let n = xr(e);
  return n[n.length - 1];
}
function hr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function Pt(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function oa(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ze(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function la(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Se(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function sa(e, t) {
  try {
    let r = e.sessionStorage.getItem(Dr);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, l] of Object.entries(n || {}))
        l && Array.isArray(l) && t.set(a, new Set(l || []));
    }
  } catch {}
}
function ua(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(Dr, JSON.stringify(r));
    } catch (n) {
      Ue(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          n +
          ").",
      );
    }
  }
}
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function We() {
  return (
    (We = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    We.apply(this, arguments)
  );
}
const yt = g.createContext(null),
  _r = g.createContext(null),
  Ie = g.createContext(null),
  rt = g.createContext(null),
  ge = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ur = g.createContext(null);
function ca(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  nt() || M(!1);
  let { basename: n, navigator: a } = g.useContext(Ie),
    { hash: l, pathname: i, search: c } = Nr(e, { relative: r }),
    u = i;
  return (
    n !== "/" && (u = i === "/" ? n : ve([n, i])),
    a.createHref({ pathname: u, search: c, hash: l })
  );
}
function nt() {
  return g.useContext(rt) != null;
}
function xe() {
  return nt() || M(!1), g.useContext(rt).location;
}
function da() {
  return g.useContext(rt).navigationType;
}
function Ir(e) {
  g.useContext(Ie).static || g.useLayoutEffect(e);
}
function Fr() {
  let { isDataRoute: e } = g.useContext(ge);
  return e ? xa() : fa();
}
function fa() {
  nt() || M(!1);
  let e = g.useContext(yt),
    { basename: t, future: r, navigator: n } = g.useContext(Ie),
    { matches: a } = g.useContext(ge),
    { pathname: l } = xe(),
    i = JSON.stringify(It(a, r.v7_relativeSplatPath)),
    c = g.useRef(!1);
  return (
    Ir(() => {
      c.current = !0;
    }),
    g.useCallback(
      function (m, h) {
        if ((h === void 0 && (h = {}), !c.current)) return;
        if (typeof m == "number") {
          n.go(m);
          return;
        }
        let d = Ft(m, JSON.parse(i), l, h.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : ve([t, d.pathname])),
          (h.replace ? n.replace : n.push)(d, h.state, h);
      },
      [t, n, i, l, e],
    )
  );
}
function ha() {
  let { matches: e } = g.useContext(ge),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Nr(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = g.useContext(Ie),
    { matches: a } = g.useContext(ge),
    { pathname: l } = xe(),
    i = JSON.stringify(It(a, n.v7_relativeSplatPath));
  return g.useMemo(() => Ft(e, JSON.parse(i), l, r === "path"), [e, i, l, r]);
}
function pa(e, t) {
  return Ar(e, t);
}
function Ar(e, t, r, n) {
  nt() || M(!1);
  let { navigator: a } = g.useContext(Ie),
    { matches: l } = g.useContext(ge),
    i = l[l.length - 1],
    c = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let m = xe(),
    h;
  if (t) {
    var d;
    let D = typeof t == "string" ? de(t) : t;
    u === "/" || ((d = D.pathname) != null && d.startsWith(u)) || M(!1),
      (h = D);
  } else h = m;
  let y = h.pathname || "/",
    b = y;
  if (u !== "/") {
    let D = u.replace(/^\//, "").split("/");
    b = "/" + y.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let R = Me(e, { pathname: b }),
    S = Ea(
      R &&
        R.map((D) =>
          Object.assign({}, D, {
            params: Object.assign({}, c, D.params),
            pathname: ve([
              u,
              a.encodeLocation
                ? a.encodeLocation(D.pathname).pathname
                : D.pathname,
            ]),
            pathnameBase:
              D.pathnameBase === "/"
                ? u
                : ve([
                    u,
                    a.encodeLocation
                      ? a.encodeLocation(D.pathnameBase).pathname
                      : D.pathnameBase,
                  ]),
          }),
        ),
      l,
      r,
      n,
    );
  return t && S
    ? g.createElement(
        rt.Provider,
        {
          value: {
            location: We(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h,
            ),
            navigationType: Y.Pop,
          },
        },
        S,
      )
    : S;
}
function ma() {
  let e = Sa(),
    t = gt(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement("h2", null, "Unexpected Application Error!"),
    g.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? g.createElement("pre", { style: a }, r) : null,
    null,
  );
}
const va = g.createElement(ma, null);
class ga extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r,
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          ge.Provider,
          { value: this.props.routeContext },
          g.createElement(Ur.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ya(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = g.useContext(yt);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    g.createElement(ge.Provider, { value: t }, n)
  );
}
function Ea(e, t, r, n) {
  var a;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var l;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (l = n) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let h = i.findIndex(
      (d) => d.route.id && (c == null ? void 0 : c[d.route.id]) !== void 0,
    );
    h >= 0 || M(!1), (i = i.slice(0, Math.min(i.length, h + 1)));
  }
  let u = !1,
    m = -1;
  if (r && n && n.v7_partialHydration)
    for (let h = 0; h < i.length; h++) {
      let d = i[h];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (m = h),
        d.route.id)
      ) {
        let { loaderData: y, errors: b } = r,
          R =
            d.route.loader &&
            y[d.route.id] === void 0 &&
            (!b || b[d.route.id] === void 0);
        if (d.route.lazy || R) {
          (u = !0), m >= 0 ? (i = i.slice(0, m + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((h, d, y) => {
    let b,
      R = !1,
      S = null,
      D = null;
    r &&
      ((b = c && d.route.id ? c[d.route.id] : void 0),
      (S = d.route.errorElement || va),
      u &&
        (m < 0 && y === 0
          ? ((R = !0), (D = null))
          : m === y &&
            ((R = !0), (D = d.route.hydrateFallbackElement || null))));
    let K = t.concat(i.slice(0, y + 1)),
      V = () => {
        let z;
        return (
          b
            ? (z = S)
            : R
              ? (z = D)
              : d.route.Component
                ? (z = g.createElement(d.route.Component, null))
                : d.route.element
                  ? (z = d.route.element)
                  : (z = h),
          g.createElement(ya, {
            match: d,
            routeContext: { outlet: h, matches: K, isDataRoute: r != null },
            children: z,
          })
        );
      };
    return r && (d.route.ErrorBoundary || d.route.errorElement || y === 0)
      ? g.createElement(ga, {
          location: r.location,
          revalidation: r.revalidation,
          component: S,
          error: b,
          children: V(),
          routeContext: { outlet: null, matches: K, isDataRoute: !0 },
        })
      : V();
  }, null);
}
var jr = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(jr || {}),
  vt = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(vt || {});
function ba(e) {
  let t = g.useContext(yt);
  return t || M(!1), t;
}
function Ra(e) {
  let t = g.useContext(_r);
  return t || M(!1), t;
}
function wa(e) {
  let t = g.useContext(ge);
  return t || M(!1), t;
}
function kr(e) {
  let t = wa(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || M(!1), r.route.id;
}
function Sa() {
  var e;
  let t = g.useContext(Ur),
    r = Ra(vt.UseRouteError),
    n = kr(vt.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function xa() {
  let { router: e } = ba(jr.UseNavigateStable),
    t = kr(vt.UseNavigateStable),
    r = g.useRef(!1);
  return (
    Ir(() => {
      r.current = !0;
    }),
    g.useCallback(
      function (a, l) {
        l === void 0 && (l = {}),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, We({ fromRouteId: t }, l)));
      },
      [e, t],
    )
  );
}
function Pa(e) {
  M(!1);
}
function Da(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = Y.Pop,
    navigator: l,
    static: i = !1,
    future: c,
  } = e;
  nt() && M(!1);
  let u = t.replace(/^\/*/, "/"),
    m = g.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: i,
        future: We({ v7_relativeSplatPath: !1 }, c),
      }),
      [u, c, l, i],
    );
  typeof n == "string" && (n = de(n));
  let {
      pathname: h = "/",
      search: d = "",
      hash: y = "",
      state: b = null,
      key: R = "default",
    } = n,
    S = g.useMemo(() => {
      let D = $e(h, u);
      return D == null
        ? null
        : {
            location: { pathname: D, search: d, hash: y, state: b, key: R },
            navigationType: a,
          };
    }, [u, h, d, y, b, R, a]);
  return S == null
    ? null
    : g.createElement(
        Ie.Provider,
        { value: m },
        g.createElement(rt.Provider, { children: r, value: S }),
      );
}
function Ei(e) {
  let { children: t, location: r } = e;
  return pa(Mt(t), r);
}
new Promise(() => {});
function Mt(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    g.Children.forEach(e, (n, a) => {
      if (!g.isValidElement(n)) return;
      let l = [...t, a];
      if (n.type === g.Fragment) {
        r.push.apply(r, Mt(n.props.children, l));
        return;
      }
      n.type !== Pa && M(!1), !n.props.index || !n.props.children || M(!1);
      let i = {
        id: n.props.id || l.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (i.children = Mt(n.props.children, l)), r.push(i);
    }),
    r
  );
}
function Ca(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: g.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
function La(e, t) {
  return Wn({
    basename: t == null ? void 0 : t.basename,
    future: We({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: mn({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex,
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: e,
    mapRouteProperties: Ca,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnNavigation:
      t == null ? void 0 : t.unstable_patchRoutesOnNavigation,
  }).initialize();
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ot() {
  return (
    (Ot = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ot.apply(this, arguments)
  );
}
function Ta(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    l;
  for (l = 0; l < n.length; l++)
    (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Ma(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Oa(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Ma(e);
}
function _t(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r];
            return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
          }, []),
    )
  );
}
function _a(e, t) {
  let r = _t(e);
  return (
    t &&
      t.forEach((n, a) => {
        r.has(a) ||
          t.getAll(a).forEach((l) => {
            r.append(a, l);
          });
      }),
    r
  );
}
const Ua = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Ia = "6";
try {
  window.__reactRouterVersion = Ia;
} catch {}
const Fa = g.createContext({ isTransitioning: !1 }),
  Na = g.createContext(new Map()),
  Aa = "startTransition",
  pr = hn[Aa],
  ja = "flushSync",
  mr = pn[ja];
function ka(e) {
  pr ? pr(e) : e();
}
function qe(e) {
  mr ? mr(e) : e();
}
class Ba {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, r) => {
        (this.resolve = (n) => {
          this.status === "pending" && ((this.status = "resolved"), t(n));
        }),
          (this.reject = (n) => {
            this.status === "pending" && ((this.status = "rejected"), r(n));
          });
      }));
  }
}
function za(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [a, l] = g.useState(r.state),
    [i, c] = g.useState(),
    [u, m] = g.useState({ isTransitioning: !1 }),
    [h, d] = g.useState(),
    [y, b] = g.useState(),
    [R, S] = g.useState(),
    D = g.useRef(new Map()),
    { v7_startTransition: K } = n || {},
    V = g.useCallback(
      (p) => {
        K ? ka(p) : p();
      },
      [K],
    ),
    z = g.useCallback(
      (p, _) => {
        let {
          deletedFetchers: A,
          unstable_flushSync: U,
          unstable_viewTransitionOpts: Z,
        } = _;
        A.forEach((Q) => D.current.delete(Q)),
          p.fetchers.forEach((Q, ye) => {
            Q.data !== void 0 && D.current.set(ye, Q.data);
          });
        let ae =
          r.window == null ||
          r.window.document == null ||
          typeof r.window.document.startViewTransition != "function";
        if (!Z || ae) {
          U ? qe(() => l(p)) : V(() => l(p));
          return;
        }
        if (U) {
          qe(() => {
            y && (h && h.resolve(), y.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Z.currentLocation,
                nextLocation: Z.nextLocation,
              });
          });
          let Q = r.window.document.startViewTransition(() => {
            qe(() => l(p));
          });
          Q.finished.finally(() => {
            qe(() => {
              d(void 0), b(void 0), c(void 0), m({ isTransitioning: !1 });
            });
          }),
            qe(() => b(Q));
          return;
        }
        y
          ? (h && h.resolve(),
            y.skipTransition(),
            S({
              state: p,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }))
          : (c(p),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }));
      },
      [r.window, y, h, D, V],
    );
  g.useLayoutEffect(() => r.subscribe(z), [r, z]),
    g.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new Ba());
    }, [u]),
    g.useEffect(() => {
      if (h && i && r.window) {
        let p = i,
          _ = h.promise,
          A = r.window.document.startViewTransition(async () => {
            V(() => l(p)), await _;
          });
        A.finished.finally(() => {
          d(void 0), b(void 0), c(void 0), m({ isTransitioning: !1 });
        }),
          b(A);
      }
    }, [V, i, h, r.window]),
    g.useEffect(() => {
      h && i && a.location.key === i.location.key && h.resolve();
    }, [h, y, a.location, i]),
    g.useEffect(() => {
      !u.isTransitioning &&
        R &&
        (c(R.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: R.currentLocation,
          nextLocation: R.nextLocation,
        }),
        S(void 0));
    }, [u.isTransitioning, R]),
    g.useEffect(() => {}, []);
  let N = g.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (p) => r.navigate(p),
        push: (p, _, A) =>
          r.navigate(p, {
            state: _,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
        replace: (p, _, A) =>
          r.navigate(p, {
            replace: !0,
            state: _,
            preventScrollReset: A == null ? void 0 : A.preventScrollReset,
          }),
      }),
      [r],
    ),
    ee = r.basename || "/",
    se = g.useMemo(
      () => ({ router: r, navigator: N, static: !1, basename: ee }),
      [r, N, ee],
    ),
    Pe = g.useMemo(
      () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
      [r.future.v7_relativeSplatPath],
    );
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      yt.Provider,
      { value: se },
      g.createElement(
        _r.Provider,
        { value: a },
        g.createElement(
          Na.Provider,
          { value: D.current },
          g.createElement(
            Fa.Provider,
            { value: u },
            g.createElement(
              Da,
              {
                basename: ee,
                location: a.location,
                navigationType: a.historyAction,
                navigator: N,
                future: Pe,
              },
              a.initialized || r.future.v7_partialHydration
                ? g.createElement(Ha, {
                    routes: r.routes,
                    future: r.future,
                    state: a,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
const Ha = g.memo(Va);
function Va(e) {
  let { routes: t, future: r, state: n } = e;
  return Ar(t, void 0, n, r);
}
const Wa =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  $a = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  bi = g.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: a,
        reloadDocument: l,
        replace: i,
        state: c,
        target: u,
        to: m,
        preventScrollReset: h,
        unstable_viewTransition: d,
      } = t,
      y = Ta(t, Ua),
      { basename: b } = g.useContext(Ie),
      R,
      S = !1;
    if (typeof m == "string" && $a.test(m) && ((R = m), Wa))
      try {
        let z = new URL(window.location.href),
          N = m.startsWith("//") ? new URL(z.protocol + m) : new URL(m),
          ee = $e(N.pathname, b);
        N.origin === z.origin && ee != null
          ? (m = ee + N.search + N.hash)
          : (S = !0);
      } catch {}
    let D = ca(m, { relative: a }),
      K = Ka(m, {
        replace: i,
        state: c,
        target: u,
        preventScrollReset: h,
        relative: a,
        unstable_viewTransition: d,
      });
    function V(z) {
      n && n(z), z.defaultPrevented || K(z);
    }
    return g.createElement(
      "a",
      Ot({}, y, { href: R || D, onClick: S || l ? n : V, ref: r, target: u }),
    );
  });
var vr;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vr || (vr = {}));
var gr;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gr || (gr = {}));
function Ka(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: l,
      relative: i,
      unstable_viewTransition: c,
    } = t === void 0 ? {} : t,
    u = Fr(),
    m = xe(),
    h = Nr(e, { relative: i });
  return g.useCallback(
    (d) => {
      if (Oa(d, r)) {
        d.preventDefault();
        let y = n !== void 0 ? n : Ve(m) === Ve(h);
        u(e, {
          replace: y,
          state: a,
          preventScrollReset: l,
          relative: i,
          unstable_viewTransition: c,
        });
      }
    },
    [m, u, h, n, a, r, e, l, i, c],
  );
}
function Ya(e) {
  let t = g.useRef(_t(e)),
    r = g.useRef(!1),
    n = xe(),
    a = g.useMemo(() => _a(n.search, r.current ? null : t.current), [n.search]),
    l = Fr(),
    i = g.useCallback(
      (c, u) => {
        const m = _t(typeof c == "function" ? c(a) : c);
        (r.current = !0), l("?" + m, u);
      },
      [l, a],
    );
  return [a, i];
}
const { makeDecorator: Ja, addons: jt } = __STORYBOOK_MODULE_PREVIEW_API__;
var we = "storybook/react-router-v6",
  Ga = "reactRouter",
  J = {
    CLEAR: `${we}/clear`,
    NAVIGATION: `${we}/navigation`,
    STORY_LOADED: `${we}/story-loaded`,
    ROUTE_MATCHES: `${we}/route-matches`,
    ACTION_INVOKED: `${we}/action_invoked`,
    ACTION_SETTLED: `${we}/action_settled`,
    LOADER_INVOKED: `${we}/loader_invoked`,
    LOADER_SETTLED: `${we}/loader_settled`,
  },
  Br = te.createContext([]),
  zr = te.createContext(void 0);
function Xa() {
  let [e, t] = g.useState([]),
    r = ge;
  return (
    (r.Provider._context = new Proxy(r.Provider._context ?? {}, {
      set(n, a, l) {
        return (
          a === "_currentValue" &&
            l !== void 0 &&
            t((i) => (l.matches.length > i.length ? l.matches : i)),
          Reflect.set(n, a, l)
        );
      },
    })),
    e
  );
}
function Qa(e) {
  let t = {};
  return (
    e.forEach((r, n) => {
      if (r instanceof File) {
        t[n] = { filename: r.name, filesize: r.size, filetype: r.type };
        return;
      }
      t[n] = r;
    }),
    t
  );
}
async function yr(e) {
  let t = e.clone(),
    r = t.headers.get("content-type") || "",
    n;
  switch (!0) {
    case r.startsWith("text"):
      n = await t.text();
      break;
    case r.startsWith("application/json"):
      n = await t.json();
      break;
    case r.startsWith("multipart/form-data"):
    case r.startsWith("application/x-www-form-urlencoded"): {
      n = Qa(await t.formData());
      break;
    }
  }
  return n;
}
var Hr = () => {
  let e = g.useRef(0);
  return g.useCallback(async (t, r) => {
    e.current++;
    let n = `${t}_${e.current}`;
    switch (t) {
      case J.ACTION_INVOKED: {
        let { request: a, params: l, context: i } = r,
          c = { url: a.url, method: a.method, body: await yr(a) };
        return { key: n, type: t, data: { params: l, request: c, context: i } };
      }
      case J.ACTION_SETTLED:
        return { key: n, type: t, data: r };
      case J.LOADER_INVOKED: {
        let { request: a, params: l, context: i } = r,
          c = { url: a.url, method: a.method, body: await yr(a) };
        return { key: n, type: t, data: { params: l, request: c, context: i } };
      }
      case J.LOADER_SETTLED:
        return { key: n, type: t, data: r };
    }
  }, []);
};
function Za() {
  let e = jt.getChannel(),
    t = Hr();
  return g.useCallback(
    (r) =>
      async function (n) {
        if (r === void 0) return;
        e.emit(J.ACTION_INVOKED, await t(J.ACTION_INVOKED, n));
        let a = await r(n);
        return e.emit(J.ACTION_SETTLED, await t(J.ACTION_SETTLED, a)), a;
      },
    [e, t],
  );
}
function qa() {
  let e = jt.getChannel(),
    t = Hr();
  return g.useCallback(
    (r) =>
      async function (n) {
        if (r === void 0) return;
        e.emit(J.LOADER_INVOKED, await t(J.LOADER_INVOKED, n));
        let a = await r(n);
        return e.emit(J.LOADER_SETTLED, await t(J.LOADER_SETTLED, a)), a;
      },
    [e, t],
  );
}
function ei() {
  let e = Za(),
    t = qa(),
    r = g.useCallback(
      (n) =>
        n.map((a) => {
          let { action: l, loader: i, children: c, lazy: u } = a,
            m = { ...a };
          return (
            u &&
              (m.lazy = async function () {
                let h = await u(),
                  d = { ...h };
                return (
                  h.action && (d.action = e(h.action)),
                  h.loader && (d.loader = t(h.loader)),
                  d
                );
              }),
            l && (m.action = e(l)),
            i && (m.loader = t(i)),
            c && (m.children = r(c)),
            m
          );
        }),
      [e, t],
    );
  return r;
}
var Vr = () => {
  let e = te.useContext(zr);
  if (e === void 0)
    throw new Error("useStory should be used inside <StoryContext>");
  return e;
};
function Wr(e, t, r = 0) {
  return e.length === 1 &&
    (e[0].children === void 0 || e[0].children.length === 0)
    ? [{ ...e[0], element: t }]
    : e.findIndex((n) => n.useStoryElement) !== -1
      ? e.map((n) => (n.useStoryElement ? { ...n, element: t } : n))
      : e.map((n) => (n.children ? { ...n, children: Wr(n.children, t) } : n));
}
var Er;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Er || (Er = {}));
function ti(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ri(e, t) {
  {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
var br;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(br || (br = {}));
function Rr(e, t) {
  t === void 0 && (t = {});
  let r = e;
  r.endsWith("*") &&
    r !== "*" &&
    !r.endsWith("/*") &&
    (ri(
      !1,
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'),
    ),
    (r = r.replace(/\*$/, "/*")));
  let n = r.startsWith("/") ? "/" : "",
    a = (i) => (i == null ? "" : typeof i == "string" ? i : String(i)),
    l = r
      .split(/\/+/)
      .map((i, c, u) => {
        if (c === u.length - 1 && i === "*") return a(t["*"]);
        let m = i.match(/^:([\w-]+)(\??)$/);
        if (m) {
          let [, h, d] = m,
            y = t[h];
          return ti(d === "?" || y != null, 'Missing ":' + h + '" param'), a(y);
        }
        return i.replace(/\?$/g, "");
      })
      .filter((i) => !!i);
  return n + l.join("/");
}
var $r = ["post", "put", "patch", "delete"];
new Set($r);
var ni = ["get", ...$r];
new Set(ni);
function ai({ navigationHistory: e, location: t, routes: r }) {
  if (e !== void 0) {
    let h = [],
      d,
      y = Object.values(e);
    for (let b = 0; b < y.length; b++) {
      let {
        path: R,
        pathParams: S,
        searchParams: D,
        hash: K,
        state: V,
        isInitialLocation: z,
      } = y[b];
      z && (d = b);
      let N = Ut(r),
        ee = (typeof R == "function" ? R(N, S ?? {}) : R) ?? N;
      h.push({
        pathname: Rr(ee ?? "/", S),
        search: new URLSearchParams(D).toString(),
        hash: K,
        state: V,
      });
    }
    return d ?? (d = h.length - 1), { initialEntries: h, initialIndex: d };
  }
  let { path: n, pathParams: a, searchParams: l, hash: i, state: c } = t ?? {},
    u = Ut(r),
    m = (typeof n == "function" ? n(u, a ?? {}) : n) ?? u;
  return {
    initialEntries: [
      {
        pathname: Rr(m, a),
        search: new URLSearchParams(l).toString(),
        hash: i,
        state: c,
      },
    ],
    initialIndex: 0,
  };
}
function Ut(e = [], t = "/") {
  if (e.length !== 1) return t;
  let r = e[0],
    n = ii(t, r.path);
  return r.children === void 0 || r.children.length === 0
    ? n
    : Ut(r.children, n);
}
function ii(e, t = "") {
  let r = ["", "/"],
    n = e.split("/").filter((l) => !r.includes(l)),
    a = t.split("/").filter((l) => !r.includes(l));
  return "/" + [...n, ...a].join("/");
}
function ie(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function oi(e) {
  return arguments.length === 0 ? [] : Array.isArray(e) ? e : [e];
}
function li(e) {
  var t;
  return e === void 0
    ? [{ path: "/" }]
    : typeof e == "string"
      ? [{ path: e }]
      : ((e = oi(e)), e.length === 1 && ((t = e[0]).path ?? (t.path = "/")), e);
}
var Kr = () => te.useContext(Br);
function si(e) {
  let t = {};
  return (
    e.forEach((r, n) => {
      let a = t[n];
      if (typeof a == "string") {
        t[n] = [a, r];
        return;
      }
      if (Array.isArray(a)) {
        t[n] = [...a, r];
        return;
      }
      t[n] = r;
    }),
    t
  );
}
var ui = () => {
    let e = xe(),
      t = e.pathname;
    return (
      e.search.length > 0 && (t += `?${e.search}`),
      e.hash.length > 0 && (t += `#${e.hash}`),
      t
    );
  },
  ci = () => {
    let e = g.useRef(0),
      t = xe(),
      r = ha(),
      [n] = Ya(),
      a = da(),
      l = Kr(),
      i = si(n),
      c = ui(),
      u = l.map((h) => {
        let d = { path: h.route.path };
        return Object.keys(h.params).length > 0 && (d.params = h.params), d;
      }),
      m = {
        url: c,
        path: t.pathname,
        routeParams: r,
        searchParams: i,
        hash: t.hash,
        routeState: t.state,
        routeMatches: u,
      };
    return (h) => {
      e.current++;
      let d = `${h}_${e.current}`;
      switch (h) {
        case J.STORY_LOADED:
          return { key: d, type: h, data: m };
        case J.NAVIGATION:
          return { key: d, type: h, data: { ...m, navigationType: a } };
        case J.ROUTE_MATCHES:
          return { key: d, type: h, data: { matches: u } };
      }
    };
  };
function Yr() {
  let { renderStory: e, storyContext: t } = Vr(),
    r = jt.getChannel(),
    n = xe(),
    a = Kr(),
    l = ci(),
    i = g.useRef(),
    c = g.useRef(),
    u = g.useRef(),
    m = i.current !== void 0,
    h = m && n.key !== i.current;
  return (
    h &&
      c.current !== n.key &&
      (r.emit(J.NAVIGATION, l(J.NAVIGATION)), (c.current = n.key)),
    h &&
      a.length > 0 &&
      a !== u.current &&
      r.emit(J.ROUTE_MATCHES, l(J.ROUTE_MATCHES)),
    !m &&
      a.length > 0 &&
      (r.emit(J.STORY_LOADED, l(J.STORY_LOADED)),
      (i.current = n.key),
      (u.current = a)),
    (u.current = a),
    te.createElement(te.Fragment, null, e(t))
  );
}
Yr.displayName = "RouterLogger";
function di() {
  let { addonParameters: e = {} } = Vr(),
    { hydrationData: t, routing: r, navigationHistory: n, location: a } = e,
    l = ei(),
    i = g.useMemo(() => {
      let c = li(r),
        u = l(c),
        m = Wr(u, te.createElement(Yr, null)),
        { initialEntries: h, initialIndex: d } = ai({
          navigationHistory: n,
          location: a,
          routes: m,
        });
      return La(m, { initialEntries: h, initialIndex: d, hydrationData: t });
    }, [l, t, a, n, r]);
  return te.createElement(za, {
    router: i,
    fallbackElement: te.createElement(fi, null),
  });
}
function fi() {
  return te.createElement("p", null, "Performing initial data load");
}
var hi = ({ renderStory: e, storyContext: t, addonParameters: r }) => {
  let n = Xa();
  return te.createElement(
    zr.Provider,
    { value: { renderStory: e, storyContext: t, addonParameters: r } },
    te.createElement(Br.Provider, { value: n }, te.createElement(di, null)),
  );
};
function pi(e) {
  if (te.isValidElement(e)) return !0;
  switch (!0) {
    case te.isValidElement(e):
    case typeof e == "string":
    case typeof e == "number":
    case typeof e == "boolean":
    case e === null:
    case e === void 0:
    case e instanceof Object && ie(e, Symbol.iterator):
      return !0;
  }
  return !1;
}
function mi(e) {
  return pi(e) ? { element: e } : e;
}
function vi(e = {}) {
  let t = ["location", "navigationHistory", "routing"];
  if (Object.keys(e ?? {}).some((n) => t.includes(n))) return e;
  let r = { routing: {}, location: {}, hydrationData: void 0 };
  if (
    (ie(e, "routePath") &&
      ((r.location.path = e.routePath), (r.routing.path = e.routePath)),
    ie(e, "routeParams") && (r.location.pathParams = e.routeParams),
    ie(e, "routeState") && (r.location.state = e.routeState),
    ie(e, "routeHandle") && (r.routing.handle = e.routeHandle),
    ie(e, "searchParams") && (r.location.searchParams = e.searchParams),
    ie(e, "browserPath") && (r.location.path = e.browserPath),
    ie(e, "loader") && (r.routing.loader = e.loader),
    ie(e, "action") && (r.routing.action = e.action),
    ie(e, "errorElement") && (r.routing.errorElement = e.errorElement),
    ie(e, "hydrationData") && (r.hydrationData = e.hydrationData),
    ie(e, "shouldRevalidate") &&
      (r.routing.shouldRevalidate = e.shouldRevalidate),
    ie(e, "routeId") && (r.routing.id = e.routeId),
    ie(e, "outlet"))
  ) {
    let n = mi(e.outlet);
    n.path ?? (n.path = ""), (r.routing.children = [n]);
  }
  return (r.routing.useStoryElement = !0), r;
}
var Ri = Ja({
  name: "withRouter",
  parameterName: Ga,
  wrapper: (e, t, { parameters: r }) => {
    let n = vi(r);
    return te.createElement(hi, {
      renderStory: e,
      storyContext: t,
      addonParameters: n,
    });
  },
});
function wi(e) {
  return e;
}
export {
  Ri as B,
  wi as K,
  bi as L,
  Ei as R,
  Fr as a,
  xe as b,
  Pa as c,
  ha as u,
};
