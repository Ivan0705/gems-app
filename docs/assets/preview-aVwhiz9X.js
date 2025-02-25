let l;
const S = new Uint8Array(16);
function A() {
  if (
    !l &&
    ((l =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !l)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return l(S);
}
const o = [];
for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
function D(e, t = 0) {
  return (
    o[e[t + 0]] +
    o[e[t + 1]] +
    o[e[t + 2]] +
    o[e[t + 3]] +
    "-" +
    o[e[t + 4]] +
    o[e[t + 5]] +
    "-" +
    o[e[t + 6]] +
    o[e[t + 7]] +
    "-" +
    o[e[t + 8]] +
    o[e[t + 9]] +
    "-" +
    o[e[t + 10]] +
    o[e[t + 11]] +
    o[e[t + 12]] +
    o[e[t + 13]] +
    o[e[t + 14]] +
    o[e[t + 15]]
  );
}
const I =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  m = { randomUUID: I };
function v(e, t, r) {
  if (m.randomUUID && !t && !e) return m.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || A)();
  return (n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), D(n);
}
const { addons: w } = __STORYBOOK_MODULE_PREVIEW_API__,
  { ImplicitActionsDuringRendering: U } =
    __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,
  { global: p } = __STORYBOOK_MODULE_GLOBAL__;
var f = "storybook/actions",
  j = `${f}/action-event`,
  V = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  E = (e, t) => {
    let r = Object.getPrototypeOf(e);
    return !r || t(r) ? r : E(r, t);
  },
  C = (e) =>
    !!(
      typeof e == "object" &&
      e &&
      E(e, (t) => /^Synthetic(?:Base)?Event$/.test(t.constructor.name)) &&
      typeof e.persist == "function"
    ),
  K = (e) => {
    if (C(e)) {
      let t = Object.create(
        e.constructor.prototype,
        Object.getOwnPropertyDescriptors(e),
      );
      t.persist();
      let r = Object.getOwnPropertyDescriptor(t, "view"),
        n = r == null ? void 0 : r.value;
      return (
        typeof n == "object" &&
          (n == null ? void 0 : n.constructor.name) === "Window" &&
          Object.defineProperty(t, "view", {
            ...r,
            value: Object.create(n.constructor.prototype),
          }),
        t
      );
    }
    return e;
  },
  L = () =>
    typeof crypto == "object" && typeof crypto.getRandomValues == "function"
      ? v()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function u(e, t = {}) {
  let r = { ...V, ...t },
    n = function (...c) {
      var g, O;
      if (t.implicit) {
        let y =
          (g =
            "__STORYBOOK_PREVIEW__" in p ? p.__STORYBOOK_PREVIEW__ : void 0) ==
          null
            ? void 0
            : g.storyRenders.find(
                (d) => d.phase === "playing" || d.phase === "rendering",
              );
        if (y) {
          let d = !(
              (O = window == null ? void 0 : window.FEATURES) != null &&
              O.disallowImplicitActionsInRenderV8
            ),
            R = new U({ phase: y.phase, name: e, deprecated: d });
          if (d) console.warn(R);
          else throw R;
        }
      }
      let i = w.getChannel(),
        s = L(),
        a = 5,
        _ = c.map(K),
        b = c.length > 1 ? _ : _[0],
        x = {
          id: s,
          count: 0,
          data: { name: e, args: b },
          options: {
            ...r,
            maxDepth: a + (r.depth || 3),
            allowFunction: r.allowFunction || !1,
          },
        };
      i.emit(j, x);
    };
  return (n.isAction = !0), (n.implicit = t.implicit), n;
}
var T = (e, t) => typeof t[e] > "u" && !(e in t),
  B = (e) => {
    let {
      initialArgs: t,
      argTypes: r,
      id: n,
      parameters: { actions: c },
    } = e;
    if (!c || c.disable || !c.argTypesRegex || !r) return {};
    let i = new RegExp(c.argTypesRegex);
    return Object.entries(r)
      .filter(([s]) => !!i.test(s))
      .reduce(
        (s, [a, _]) => (T(a, t) && (s[a] = u(a, { implicit: !0, id: n })), s),
        {},
      );
  },
  M = (e) => {
    let {
      initialArgs: t,
      argTypes: r,
      parameters: { actions: n },
    } = e;
    return (n != null && n.disable) || !r
      ? {}
      : Object.entries(r)
          .filter(([c, i]) => !!i.action)
          .reduce(
            (c, [i, s]) => (
              T(i, t) && (c[i] = u(typeof s.action == "string" ? s.action : i)),
              c
            ),
            {},
          );
  },
  Y = [M, B],
  h = !1,
  P = (e) => {
    let {
      parameters: { actions: t },
    } = e;
    if (
      !(t != null && t.disable) &&
      !h &&
      "__STORYBOOK_TEST_ON_MOCK_CALL__" in p &&
      typeof p.__STORYBOOK_TEST_ON_MOCK_CALL__ == "function"
    ) {
      let r = p.__STORYBOOK_TEST_ON_MOCK_CALL__;
      r((n, c) => {
        let i = n.getMockName();
        i !== "spy" &&
          (!/^next\/.*::/.test(i) ||
            [
              "next/router::useRouter()",
              "next/navigation::useRouter()",
              "next/navigation::redirect",
              "next/cache::",
              "next/headers::cookies().set",
              "next/headers::cookies().delete",
              "next/headers::headers().set",
              "next/headers::headers().delete",
            ].some((s) => i.startsWith(s))) &&
          u(i)(c);
      }),
        (h = !0);
    }
  },
  N = [P];
export { Y as argsEnhancers, N as loaders };
