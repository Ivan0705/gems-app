const ge = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    console && console[n] && console[n].apply(console, e);
  },
};
class U {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = t.prefix || "i18next:"),
      (this.logger = e || ge),
      (this.options = t),
      (this.debug = t.debug);
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, i) {
    return i && !this.debug
      ? null
      : (typeof e[0] == "string" && (e[0] = `${s}${this.prefix} ${e[0]}`),
        this.logger[t](e));
  }
  create(e) {
    return new U(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new U(this.logger, e)
    );
  }
}
var N = new U();
class J {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(" ").forEach((s) => {
        this.observers[s] || (this.observers[s] = new Map());
        const i = this.observers[s].get(t) || 0;
        this.observers[s].set(t, i + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (
      var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1;
      i < t;
      i++
    )
      s[i - 1] = arguments[i];
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((a) => {
        let [o, l] = a;
        for (let f = 0; f < l; f++) o(...s);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((a) => {
          let [o, l] = a;
          for (let f = 0; f < l; f++) o.apply(o, [e, ...s]);
        });
  }
}
const j = () => {
    let n, e;
    const t = new Promise((s, i) => {
      (n = s), (e = i);
    });
    return (t.resolve = n), (t.reject = e), t;
  },
  X = (n) => (n == null ? "" : "" + n),
  ce = (n, e, t) => {
    n.forEach((s) => {
      e[s] && (t[s] = e[s]);
    });
  },
  de = /###/g,
  q = (n) => (n && n.indexOf("###") > -1 ? n.replace(de, ".") : n),
  _ = (n) => !n || typeof n == "string",
  I = (n, e, t) => {
    const s = typeof e != "string" ? e : e.split(".");
    let i = 0;
    for (; i < s.length - 1; ) {
      if (_(n)) return {};
      const r = q(s[i]);
      !n[r] && t && (n[r] = new t()),
        Object.prototype.hasOwnProperty.call(n, r) ? (n = n[r]) : (n = {}),
        ++i;
    }
    return _(n) ? {} : { obj: n, k: q(s[i]) };
  },
  ee = (n, e, t) => {
    const { obj: s, k: i } = I(n, e, Object);
    if (s !== void 0 || e.length === 1) {
      s[i] = t;
      return;
    }
    let r = e[e.length - 1],
      a = e.slice(0, e.length - 1),
      o = I(n, a, Object);
    for (; o.obj === void 0 && a.length; )
      (r = `${a[a.length - 1]}.${r}`),
        (a = a.slice(0, a.length - 1)),
        (o = I(n, a, Object)),
        o && o.obj && typeof o.obj[`${o.k}.${r}`] < "u" && (o.obj = void 0);
    o.obj[`${o.k}.${r}`] = t;
  },
  pe = (n, e, t, s) => {
    const { obj: i, k: r } = I(n, e, Object);
    (i[r] = i[r] || []), i[r].push(t);
  },
  M = (n, e) => {
    const { obj: t, k: s } = I(n, e);
    if (t) return t[s];
  },
  me = (n, e, t) => {
    const s = M(n, t);
    return s !== void 0 ? s : M(e, t);
  },
  le = (n, e, t) => {
    for (const s in e)
      s !== "__proto__" &&
        s !== "constructor" &&
        (s in n
          ? typeof n[s] == "string" ||
            n[s] instanceof String ||
            typeof e[s] == "string" ||
            e[s] instanceof String
            ? t && (n[s] = e[s])
            : le(n[s], e[s], t)
          : (n[s] = e[s]));
    return n;
  },
  R = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var ye = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const xe = (n) =>
  typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => ye[e]) : n;
class be {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const s = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, s),
      this.regExpQueue.push(e),
      s
    );
  }
}
const Se = [" ", ",", "?", "!", ";"],
  Oe = new be(20),
  ve = (n, e, t) => {
    (e = e || ""), (t = t || "");
    const s = Se.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (s.length === 0) return !0;
    const i = Oe.getRegExp(
      `(${s.map((a) => (a === "?" ? "\\?" : a)).join("|")})`,
    );
    let r = !i.test(n);
    if (!r) {
      const a = n.indexOf(t);
      a > 0 && !i.test(n.substring(0, a)) && (r = !0);
    }
    return r;
  },
  Q = function (n, e) {
    let t =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!n) return;
    if (n[e]) return n[e];
    const s = e.split(t);
    let i = n;
    for (let r = 0; r < s.length; ) {
      if (!i || typeof i != "object") return;
      let a,
        o = "";
      for (let l = r; l < s.length; ++l)
        if ((l !== r && (o += t), (o += s[l]), (a = i[o]), a !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof a) > -1 &&
            l < s.length - 1
          )
            continue;
          r += l - r + 1;
          break;
        }
      i = a;
    }
    return i;
  },
  H = (n) => (n && n.indexOf("_") > 0 ? n.replace("_", "-") : n);
class te extends J {
  constructor(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      a =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    e.indexOf(".") > -1
      ? (o = e.split("."))
      : ((o = [e, t]),
        s &&
          (Array.isArray(s)
            ? o.push(...s)
            : typeof s == "string" && r
              ? o.push(...s.split(r))
              : o.push(s)));
    const l = M(this.data, o);
    return (
      !l &&
        !t &&
        !s &&
        e.indexOf(".") > -1 &&
        ((e = o[0]), (t = o[1]), (s = o.slice(2).join("."))),
      l || !a || typeof s != "string"
        ? l
        : Q(this.data && this.data[e] && this.data[e][t], s, r)
    );
  }
  addResource(e, t, s, i) {
    let r =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const a =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    s && (o = o.concat(a ? s.split(a) : s)),
      e.indexOf(".") > -1 && ((o = e.split(".")), (i = t), (t = o[1])),
      this.addNamespaces(t),
      ee(this.data, o, i),
      r.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const r in s)
      (typeof s[r] == "string" || Array.isArray(s[r])) &&
        this.addResource(e, t, r, s[r], { silent: !0 });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, r) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      o = [e, t];
    e.indexOf(".") > -1 && ((o = e.split(".")), (i = s), (s = t), (t = o[1])),
      this.addNamespaces(t);
    let l = M(this.data, o) || {};
    a.skipCopy || (s = JSON.parse(JSON.stringify(s))),
      i ? le(l, s, r) : (l = { ...l, ...s }),
      ee(this.data, o, l),
      a.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (
      t || (t = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(e, t) }
        : this.getResource(e, t)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (i) => t[i] && Object.keys(t[i]).length > 0,
    );
  }
  toJSON() {
    return this.data;
  }
}
var ue = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, i) {
    return (
      n.forEach((r) => {
        this.processors[r] && (e = this.processors[r].process(e, t, s, i));
      }),
      e
    );
  },
};
const se = {};
class z extends J {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      ce(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this,
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = N.create("translator"));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const s = this.resolve(e, t);
    return s && s.res !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const a = s && e.indexOf(s) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !ve(e, s, i);
    if (a && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: r };
      const f = e.split(s);
      (s !== i || (s === i && this.options.ns.indexOf(f[0]) > -1)) &&
        (r = f.shift()),
        (e = f.join(i));
    }
    return typeof r == "string" && (r = [r]), { key: e, namespaces: r };
  }
  translate(e, t, s) {
    if (
      (typeof t != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (t = this.options.overloadTranslationOptionHandler(arguments)),
      typeof t == "object" && (t = { ...t }),
      t || (t = {}),
      e == null)
    )
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const i =
        t.returnDetails !== void 0
          ? t.returnDetails
          : this.options.returnDetails,
      r =
        t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      { key: a, namespaces: o } = this.extractFromKey(e[e.length - 1], t),
      l = o[o.length - 1],
      f = t.lng || this.language,
      h = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (f && f.toLowerCase() === "cimode") {
      if (h) {
        const y = t.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${l}${y}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: f,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(t),
            }
          : `${l}${y}${a}`;
      }
      return i
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: f,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(t),
          }
        : a;
    }
    const g = this.resolve(e, t);
    let u = g && g.res;
    const c = (g && g.usedKey) || a,
      d = (g && g.exactUsedKey) || a,
      m = Object.prototype.toString.apply(u),
      p = ["[object Number]", "[object Function]", "[object RegExp]"],
      O = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
      x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      x &&
      u &&
      typeof u != "string" &&
      typeof u != "boolean" &&
      typeof u != "number" &&
      p.indexOf(m) < 0 &&
      !(typeof O == "string" && Array.isArray(u))
    ) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!",
          );
        const y = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(c, u, { ...t, ns: o })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return i
          ? ((g.res = y), (g.usedParams = this.getUsedParamsDetails(t)), g)
          : y;
      }
      if (r) {
        const y = Array.isArray(u),
          v = y ? [] : {},
          w = y ? d : c;
        for (const b in u)
          if (Object.prototype.hasOwnProperty.call(u, b)) {
            const V = `${w}${r}${b}`;
            (v[b] = this.translate(V, { ...t, joinArrays: !1, ns: o })),
              v[b] === V && (v[b] = u[b]);
          }
        u = v;
      }
    } else if (x && typeof O == "string" && Array.isArray(u))
      (u = u.join(O)), u && (u = this.extendTranslation(u, e, t, s));
    else {
      let y = !1,
        v = !1;
      const w = t.count !== void 0 && typeof t.count != "string",
        b = z.hasDefaultValue(t),
        V = w ? this.pluralResolver.getSuffix(f, t.count, t) : "",
        fe =
          t.ordinal && w
            ? this.pluralResolver.getSuffix(f, t.count, { ordinal: !1 })
            : "",
        Y =
          w &&
          !t.ordinal &&
          t.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        $ =
          (Y && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
          t[`defaultValue${V}`] ||
          t[`defaultValue${fe}`] ||
          t.defaultValue;
      !this.isValidLookup(u) && b && ((y = !0), (u = $)),
        this.isValidLookup(u) || ((v = !0), (u = a));
      const he =
          (t.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          v
            ? void 0
            : u,
        k = b && $ !== u && this.options.updateMissing;
      if (v || y || k) {
        if (
          (this.logger.log(k ? "updateKey" : "missingKey", f, l, a, k ? $ : u),
          r)
        ) {
          const L = this.resolve(a, { ...t, keySeparator: !1 });
          L &&
            L.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
            );
        }
        let E = [];
        const T = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          t.lng || this.language,
        );
        if (this.options.saveMissingTo === "fallback" && T && T[0])
          for (let L = 0; L < T.length; L++) E.push(T[L]);
        else
          this.options.saveMissingTo === "all"
            ? (E = this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
              ))
            : E.push(t.lng || this.language);
        const G = (L, C, F) => {
          const Z = b && F !== u ? F : he;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(L, l, C, Z, k, t)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(L, l, C, Z, k, t),
            this.emit("missingKey", L, l, C, u);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && w
            ? E.forEach((L) => {
                const C = this.pluralResolver.getSuffixes(L, t);
                Y &&
                  t[`defaultValue${this.options.pluralSeparator}zero`] &&
                  C.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  C.push(`${this.options.pluralSeparator}zero`),
                  C.forEach((F) => {
                    G([L], a + F, t[`defaultValue${F}`] || $);
                  });
              })
            : G(E, a, $));
      }
      (u = this.extendTranslation(u, e, t, g, s)),
        v &&
          u === a &&
          this.options.appendNamespaceToMissingKey &&
          (u = `${l}:${a}`),
        (v || y) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (u = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a,
                y ? u : void 0,
              ))
            : (u = this.options.parseMissingKeyHandler(u)));
    }
    return i
      ? ((g.res = u), (g.usedParams = this.getUsedParamsDetails(t)), g)
      : u;
  }
  extendTranslation(e, t, s, i, r) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...s },
        s.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i },
      );
    else if (!s.skipInterpolation) {
      s.interpolation &&
        this.interpolator.init({
          ...s,
          interpolation: { ...this.options.interpolation, ...s.interpolation },
        });
      const f =
        typeof e == "string" &&
        (s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let h;
      if (f) {
        const u = e.match(this.interpolator.nestingRegexp);
        h = u && u.length;
      }
      let g = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (e = this.interpolator.interpolate(
          e,
          g,
          s.lng || this.language || i.usedLng,
          s,
        )),
        f)
      ) {
        const u = e.match(this.interpolator.nestingRegexp),
          c = u && u.length;
        h < c && (s.nest = !1);
      }
      !s.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (s.lng = this.language || i.usedLng),
        s.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var u = arguments.length, c = new Array(u), d = 0;
                d < u;
                d++
              )
                c[d] = arguments[d];
              return r && r[0] === c[0] && !s.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${c[0]} in key: ${t[0]}`,
                  ),
                  null)
                : a.translate(...c, t);
            },
            s,
          )),
        s.interpolation && this.interpolator.reset();
    }
    const o = s.postProcess || this.options.postProcess,
      l = typeof o == "string" ? [o] : o;
    return (
      e != null &&
        l &&
        l.length &&
        s.applyPostProcessor !== !1 &&
        (e = ue.handle(
          l,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(s),
                },
                ...s,
              }
            : s,
          this,
        )),
      e
    );
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      s,
      i,
      r,
      a,
      o;
    return (
      typeof e == "string" && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(s)) return;
        const f = this.extractFromKey(l, t),
          h = f.key;
        i = h;
        let g = f.namespaces;
        this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
        const u = t.count !== void 0 && typeof t.count != "string",
          c =
            u &&
            !t.ordinal &&
            t.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          d =
            t.context !== void 0 &&
            (typeof t.context == "string" || typeof t.context == "number") &&
            t.context !== "",
          m = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng,
              );
        g.forEach((p) => {
          this.isValidLookup(s) ||
            ((o = p),
            !se[`${m[0]}-${p}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(o) &&
              ((se[`${m[0]}-${p}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
              )),
            m.forEach((O) => {
              if (this.isValidLookup(s)) return;
              a = O;
              const x = [h];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(x, h, O, p, t);
              else {
                let y;
                u && (y = this.pluralResolver.getSuffix(O, t.count, t));
                const v = `${this.options.pluralSeparator}zero`,
                  w = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (u &&
                    (x.push(h + y),
                    t.ordinal &&
                      y.indexOf(w) === 0 &&
                      x.push(h + y.replace(w, this.options.pluralSeparator)),
                    c && x.push(h + v)),
                  d)
                ) {
                  const b = `${h}${this.options.contextSeparator}${t.context}`;
                  x.push(b),
                    u &&
                      (x.push(b + y),
                      t.ordinal &&
                        y.indexOf(w) === 0 &&
                        x.push(b + y.replace(w, this.options.pluralSeparator)),
                      c && x.push(b + v));
                }
              }
              let D;
              for (; (D = x.pop()); )
                this.isValidLookup(s) ||
                  ((r = D), (s = this.getResource(O, p, D, t)));
            }));
        });
      }),
      { res: s, usedKey: i, exactUsedKey: r, usedLng: a, usedNS: o }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, t, s, i)
      : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      s = e.replace && typeof e.replace != "string";
    let i = s ? e.replace : e;
    if (
      (s && typeof e.count < "u" && (i.count = e.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !s)
    ) {
      i = { ...i };
      for (const r of t) delete i[r];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (
        Object.prototype.hasOwnProperty.call(e, s) &&
        t === s.substring(0, t.length) &&
        e[s] !== void 0
      )
        return !0;
    return !1;
  }
}
const B = (n) => n.charAt(0).toUpperCase() + n.slice(1);
class ie {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = N.create("languageUtils"));
  }
  getScriptPartFromCode(e) {
    if (((e = H(e)), !e || e.indexOf("-") < 0)) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = H(e)), !e || e.indexOf("-") < 0)) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return (
        this.options.lowerCaseLng
          ? (s = s.map((i) => i.toLowerCase()))
          : s.length === 2
            ? ((s[0] = s[0].toLowerCase()),
              (s[1] = s[1].toUpperCase()),
              t.indexOf(s[1].toLowerCase()) > -1 &&
                (s[1] = B(s[1].toLowerCase())))
            : s.length === 3 &&
              ((s[0] = s[0].toLowerCase()),
              s[1].length === 2 && (s[1] = s[1].toUpperCase()),
              s[0] !== "sgn" &&
                s[2].length === 2 &&
                (s[2] = s[2].toUpperCase()),
              t.indexOf(s[1].toLowerCase()) > -1 &&
                (s[1] = B(s[1].toLowerCase())),
              t.indexOf(s[2].toLowerCase()) > -1 &&
                (s[2] = B(s[2].toLowerCase()))),
        s.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((s) => {
        if (t) return;
        const i = this.formatLanguageCode(s);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((s) => {
          if (t) return;
          const i = this.getLanguagePartFromCode(s);
          if (this.isSupportedCode(i)) return (t = i);
          t = this.options.supportedLngs.find((r) => {
            if (r === i) return r;
            if (
              !(r.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              ((r.indexOf("-") > 0 &&
                i.indexOf("-") < 0 &&
                r.substring(0, r.indexOf("-")) === i) ||
                (r.indexOf(i) === 0 && i.length > 1))
            )
              return r;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(t)),
      typeof e == "string" && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!t) return e.default || [];
    let s = e[t];
    return (
      s || (s = e[this.getScriptPartFromCode(t)]),
      s || (s = e[this.formatLanguageCode(t)]),
      s || (s = e[this.getLanguagePartFromCode(t)]),
      s || (s = e.default),
      s || []
    );
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
      i = [],
      r = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? i.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`,
              ));
      };
    return (
      typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            r(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            r(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            r(this.getLanguagePartFromCode(e)))
        : typeof e == "string" && r(this.formatLanguageCode(e)),
      s.forEach((a) => {
        i.indexOf(a) < 0 && r(this.formatLanguageCode(a));
      }),
      i
    );
  }
}
let Le = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  we = {
    1: (n) => +(n > 1),
    2: (n) => +(n != 1),
    3: (n) => 0,
    4: (n) =>
      n % 10 == 1 && n % 100 != 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
    5: (n) =>
      n == 0
        ? 0
        : n == 1
          ? 1
          : n == 2
            ? 2
            : n % 100 >= 3 && n % 100 <= 10
              ? 3
              : n % 100 >= 11
                ? 4
                : 5,
    6: (n) => (n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2),
    7: (n) =>
      n == 1
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
    8: (n) => (n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3),
    9: (n) => +(n >= 2),
    10: (n) => (n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4),
    11: (n) =>
      n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3,
    12: (n) => +(n % 10 != 1 || n % 100 == 11),
    13: (n) => +(n !== 0),
    14: (n) => (n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3),
    15: (n) =>
      n % 10 == 1 && n % 100 != 11
        ? 0
        : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20)
          ? 1
          : 2,
    16: (n) => (n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2),
    17: (n) => (n == 1 || (n % 10 == 1 && n % 100 != 11) ? 0 : 1),
    18: (n) => (n == 0 ? 0 : n == 1 ? 1 : 2),
    19: (n) =>
      n == 1
        ? 0
        : n == 0 || (n % 100 > 1 && n % 100 < 11)
          ? 1
          : n % 100 > 10 && n % 100 < 20
            ? 2
            : 3,
    20: (n) => (n == 1 ? 0 : n == 0 || (n % 100 > 0 && n % 100 < 20) ? 1 : 2),
    21: (n) =>
      n % 100 == 1
        ? 1
        : n % 100 == 2
          ? 2
          : n % 100 == 3 || n % 100 == 4
            ? 3
            : 0,
    22: (n) =>
      n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3,
  };
const Ne = ["v1", "v2", "v3"],
  Ce = ["v4"],
  ne = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Re = () => {
    const n = {};
    return (
      Le.forEach((e) => {
        e.lngs.forEach((t) => {
          n[t] = { numbers: e.nr, plurals: we[e.fc] };
        });
      }),
      n
    );
  };
class Pe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = e),
      (this.options = t),
      (this.logger = N.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        Ce.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
        )),
      (this.rules = Re()),
      (this.pluralRulesCache = {});
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const s = H(e === "dev" ? "en" : e),
          i = t.ordinal ? "ordinal" : "cardinal",
          r = JSON.stringify({ cleanedCode: s, type: i });
        if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
        const a = new Intl.PluralRules(s, { type: i });
        return (this.pluralRulesCache[r] = a), a;
      } catch {
        return;
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return this.shouldUseIntlApi()
      ? s && s.resolvedOptions().pluralCategories.length > 1
      : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s
      ? this.shouldUseIntlApi()
        ? s
            .resolvedOptions()
            .pluralCategories.sort((i, r) => ne[i] - ne[r])
            .map(
              (i) =>
                `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`,
            )
        : s.numbers.map((i) => this.getSuffix(e, i, t))
      : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(e, s);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}`
        : this.getSuffixRetroCompatible(i, t)
      : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let i = e.numbers[s];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const r = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
          ? `_plural_${i.toString()}`
          : r()
      : this.options.compatibilityJSON === "v2" ||
          (this.options.simplifyPluralSuffix &&
            e.numbers.length === 2 &&
            e.numbers[0] === 1)
        ? r()
        : this.options.prepend && s.toString()
          ? this.options.prepend + s.toString()
          : s.toString();
  }
  shouldUseIntlApi() {
    return !Ne.includes(this.options.compatibilityJSON);
  }
}
const re = function (n, e, t) {
    let s =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      r = me(n, e, t);
    return (
      !r &&
        i &&
        typeof t == "string" &&
        ((r = Q(n, t, s)), r === void 0 && (r = Q(e, t, s))),
      r
    );
  },
  W = (n) => n.replace(/\$/g, "$$$$");
class $e {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = N.create("interpolator")),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((t) => t)),
      this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: s,
      useRawValueToEscape: i,
      prefix: r,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: f,
      unescapeSuffix: h,
      unescapePrefix: g,
      nestingPrefix: u,
      nestingPrefixEscaped: c,
      nestingSuffix: d,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: p,
      maxReplaces: O,
      alwaysFormat: x,
    } = e.interpolation;
    (this.escape = t !== void 0 ? t : xe),
      (this.escapeValue = s !== void 0 ? s : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = r ? R(r) : a || "{{"),
      (this.suffix = o ? R(o) : l || "}}"),
      (this.formatSeparator = f || ","),
      (this.unescapePrefix = h ? "" : g || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : h || ""),
      (this.nestingPrefix = u ? R(u) : c || R("$t(")),
      (this.nestingSuffix = d ? R(d) : m || R(")")),
      (this.nestingOptionsSeparator = p || ","),
      (this.maxReplaces = O || 1e3),
      (this.alwaysFormat = x !== void 0 ? x : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) =>
      t && t.source === s ? ((t.lastIndex = 0), t) : new RegExp(s, "g");
    (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ));
  }
  interpolate(e, t, s, i) {
    let r, a, o;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      f = (c) => {
        if (c.indexOf(this.formatSeparator) < 0) {
          const O = re(
            t,
            l,
            c,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          );
          return this.alwaysFormat
            ? this.format(O, void 0, s, { ...i, ...t, interpolationkey: c })
            : O;
        }
        const d = c.split(this.formatSeparator),
          m = d.shift().trim(),
          p = d.join(this.formatSeparator).trim();
        return this.format(
          re(
            t,
            l,
            m,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          p,
          s,
          { ...i, ...t, interpolationkey: m },
        );
      };
    this.resetRegExp();
    const h =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      g =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (c) => W(c) },
        {
          regex: this.regexp,
          safeValue: (c) => (this.escapeValue ? W(this.escape(c)) : W(c)),
        },
      ].forEach((c) => {
        for (o = 0; (r = c.regex.exec(e)); ) {
          const d = r[1].trim();
          if (((a = f(d)), a === void 0))
            if (typeof h == "function") {
              const p = h(e, r, i);
              a = typeof p == "string" ? p : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, d)) a = "";
            else if (g) {
              a = r[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${d} for interpolating ${e}`,
              ),
                (a = "");
          else typeof a != "string" && !this.useRawValueToEscape && (a = X(a));
          const m = c.safeValue(a);
          if (
            ((e = e.replace(r[0], m)),
            g
              ? ((c.regex.lastIndex += a.length),
                (c.regex.lastIndex -= r[0].length))
              : (c.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      r,
      a;
    const o = (l, f) => {
      const h = this.nestingOptionsSeparator;
      if (l.indexOf(h) < 0) return l;
      const g = l.split(new RegExp(`${h}[ ]*{`));
      let u = `{${g[1]}`;
      (l = g[0]), (u = this.interpolate(u, a));
      const c = u.match(/'/g),
        d = u.match(/"/g);
      ((c && c.length % 2 === 0 && !d) || d.length % 2 !== 0) &&
        (u = u.replace(/'/g, '"'));
      try {
        (a = JSON.parse(u)), f && (a = { ...f, ...a });
      } catch (m) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            m,
          ),
          `${l}${h}${u}`
        );
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      );
    };
    for (; (i = this.nestingRegexp.exec(e)); ) {
      let l = [];
      (a = { ...s }),
        (a = a.replace && typeof a.replace != "string" ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue;
      let f = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const h = i[1].split(this.formatSeparator).map((g) => g.trim());
        (i[1] = h.shift()), (l = h), (f = !0);
      }
      if (
        ((r = t(o.call(this, i[1].trim(), a), a)),
        r && i[0] === e && typeof r != "string")
      )
        return r;
      typeof r != "string" && (r = X(r)),
        r ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`),
          (r = "")),
        f &&
          (r = l.reduce(
            (h, g) =>
              this.format(h, g, s.lng, { ...s, interpolationkey: i[1].trim() }),
            r.trim(),
          )),
        (e = e.replace(i[0], r)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
const ke = (n) => {
    let e = n.toLowerCase().trim();
    const t = {};
    if (n.indexOf("(") > -1) {
      const s = n.split("(");
      e = s[0].toLowerCase().trim();
      const i = s[1].substring(0, s[1].length - 1);
      e === "currency" && i.indexOf(":") < 0
        ? t.currency || (t.currency = i.trim())
        : e === "relativetime" && i.indexOf(":") < 0
          ? t.range || (t.range = i.trim())
          : i.split(";").forEach((a) => {
              if (a) {
                const [o, ...l] = a.split(":"),
                  f = l
                    .join(":")
                    .trim()
                    .replace(/^'+|'+$/g, ""),
                  h = o.trim();
                t[h] || (t[h] = f),
                  f === "false" && (t[h] = !1),
                  f === "true" && (t[h] = !0),
                  isNaN(f) || (t[h] = parseInt(f, 10));
              }
            });
    }
    return { formatName: e, formatOptions: t };
  },
  P = (n) => {
    const e = {};
    return (t, s, i) => {
      let r = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (r = { ...r, [i.interpolationkey]: void 0 });
      const a = s + JSON.stringify(r);
      let o = e[a];
      return o || ((o = n(H(s), i)), (e[a] = o)), o(t);
    };
  };
class Ee {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = N.create("formatter")),
      (this.options = e),
      (this.formats = {
        number: P((t, s) => {
          const i = new Intl.NumberFormat(t, { ...s });
          return (r) => i.format(r);
        }),
        currency: P((t, s) => {
          const i = new Intl.NumberFormat(t, { ...s, style: "currency" });
          return (r) => i.format(r);
        }),
        datetime: P((t, s) => {
          const i = new Intl.DateTimeFormat(t, { ...s });
          return (r) => i.format(r);
        }),
        relativetime: P((t, s) => {
          const i = new Intl.RelativeTimeFormat(t, { ...s });
          return (r) => i.format(r, s.range || "day");
        }),
        list: P((t, s) => {
          const i = new Intl.ListFormat(t, { ...s });
          return (r) => i.format(r);
        }),
      }),
      this.init(e);
  }
  init(e) {
    const s = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = s.formatSeparator
      ? s.formatSeparator
      : s.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = P(t);
  }
  format(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (
      r.length > 1 &&
      r[0].indexOf("(") > 1 &&
      r[0].indexOf(")") < 0 &&
      r.find((o) => o.indexOf(")") > -1)
    ) {
      const o = r.findIndex((l) => l.indexOf(")") > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, l) => {
      const { formatName: f, formatOptions: h } = ke(l);
      if (this.formats[f]) {
        let g = o;
        try {
          const u =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            c = u.locale || u.lng || i.locale || i.lng || s;
          g = this.formats[f](o, c, { ...h, ...i, ...u });
        } catch (u) {
          this.logger.warn(u);
        }
        return g;
      } else this.logger.warn(`there was no format function for ${f}`);
      return o;
    }, e);
  }
}
const Fe = (n, e) => {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
};
class je extends J {
  constructor(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = e),
      (this.store = t),
      (this.services = s),
      (this.languageUtils = s.languageUtils),
      (this.options = i),
      (this.logger = N.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const r = {},
      a = {},
      o = {},
      l = {};
    return (
      e.forEach((f) => {
        let h = !0;
        t.forEach((g) => {
          const u = `${f}|${g}`;
          !s.reload && this.store.hasResourceBundle(f, g)
            ? (this.state[u] = 2)
            : this.state[u] < 0 ||
              (this.state[u] === 1
                ? a[u] === void 0 && (a[u] = !0)
                : ((this.state[u] = 1),
                  (h = !1),
                  a[u] === void 0 && (a[u] = !0),
                  r[u] === void 0 && (r[u] = !0),
                  l[g] === void 0 && (l[g] = !0)));
        }),
          h || (o[f] = !0);
      }),
      (Object.keys(r).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(r),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, t, s) {
    const i = e.split("|"),
      r = i[0],
      a = i[1];
    t && this.emit("failedLoading", r, a, t),
      !t &&
        s &&
        this.store.addResourceBundle(r, a, s, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && s && (this.state[e] = 0);
    const o = {};
    this.queue.forEach((l) => {
      pe(l.loaded, [r], a),
        Fe(l, e),
        t && l.errors.push(t),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((f) => {
            o[f] || (o[f] = {});
            const h = l.loaded[f];
            h.length &&
              h.forEach((g) => {
                o[f][g] === void 0 && (o[f][g] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit("loaded", o),
      (this.queue = this.queue.filter((l) => !l.done));
  }
  read(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      r =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: r,
        callback: a,
      });
      return;
    }
    this.readingCalls++;
    const o = (f, h) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const g = this.waitingReads.shift();
          this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (f && h && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, s, i + 1, r * 2, a);
          }, r);
          return;
        }
        a(f, h);
      },
      l = this.backend[s].bind(this.backend);
    if (l.length === 2) {
      try {
        const f = l(e, t);
        f && typeof f.then == "function"
          ? f.then((h) => o(null, h)).catch(o)
          : o(null, f);
      } catch (f) {
        o(f);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources.",
        ),
        i && i()
      );
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)),
      typeof t == "string" && (t = [t]);
    const r = this.queueLoad(e, t, s, i);
    if (!r.toLoad.length) return r.pending.length || i(), null;
    r.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, { reload: !0 }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"),
      i = s[0],
      r = s[1];
    this.read(i, r, "read", void 0, void 0, (a, o) => {
      a &&
        this.logger.warn(
          `${t}loading namespace ${r} for language ${i} failed`,
          a,
        ),
        !a &&
          o &&
          this.logger.log(`${t}loaded namespace ${r} for language ${i}`, o),
        this.loaded(e, a, o);
    });
  }
  saveMissing(e, t, s, i, r) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      o =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(t)
    ) {
      this.logger.warn(
        `did not save key "${s}" as the namespace "${t}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
      );
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const l = { ...a, isUpdate: r },
          f = this.backend.create.bind(this.backend);
        if (f.length < 6)
          try {
            let h;
            f.length === 5 ? (h = f(e, t, s, i, l)) : (h = f(e, t, s, i)),
              h && typeof h.then == "function"
                ? h.then((g) => o(null, g)).catch(o)
                : o(null, h);
          } catch (h) {
            o(h);
          }
        else f(e, t, s, i, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
const ae = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (n) => {
      let e = {};
      if (
        (typeof n[1] == "object" && (e = n[1]),
        typeof n[1] == "string" && (e.defaultValue = n[1]),
        typeof n[2] == "string" && (e.tDescription = n[2]),
        typeof n[2] == "object" || typeof n[3] == "object")
      ) {
        const t = n[3] || n[2];
        Object.keys(t).forEach((s) => {
          e[s] = t[s];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  oe = (n) => (
    typeof n.ns == "string" && (n.ns = [n.ns]),
    typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]),
    typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]),
    n.supportedLngs &&
      n.supportedLngs.indexOf("cimode") < 0 &&
      (n.supportedLngs = n.supportedLngs.concat(["cimode"])),
    n
  ),
  K = () => {},
  Ie = (n) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
      typeof n[t] == "function" && (n[t] = n[t].bind(n));
    });
  };
class A extends J {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = oe(e)),
      (this.services = {}),
      (this.logger = N),
      (this.modules = { external: [] }),
      Ie(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      s = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof t == "function" && ((s = t), (t = {})),
      !t.defaultNS &&
        t.defaultNS !== !1 &&
        t.ns &&
        (typeof t.ns == "string"
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const i = ae();
    (this.options = { ...i, ...this.options, ...oe(t) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator);
    const r = (h) => (h ? (typeof h == "function" ? new h() : h) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? N.init(r(this.modules.logger), this.options)
        : N.init(null, this.options);
      let h;
      this.modules.formatter
        ? (h = this.modules.formatter)
        : typeof Intl < "u" && (h = Ee);
      const g = new ie(this.options);
      this.store = new te(this.options.resources, this.options);
      const u = this.services;
      (u.logger = N),
        (u.resourceStore = this.store),
        (u.languageUtils = g),
        (u.pluralResolver = new Pe(g, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        h &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((u.formatter = r(h)),
          u.formatter.init(u, this.options),
          (this.options.interpolation.format = u.formatter.format.bind(
            u.formatter,
          ))),
        (u.interpolator = new $e(this.options)),
        (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (u.backendConnector = new je(
          r(this.modules.backend),
          u.resourceStore,
          u,
          this.options,
        )),
        u.backendConnector.on("*", function (c) {
          for (
            var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), p = 1;
            p < d;
            p++
          )
            m[p - 1] = arguments[p];
          e.emit(c, ...m);
        }),
        this.modules.languageDetector &&
          ((u.languageDetector = r(this.modules.languageDetector)),
          u.languageDetector.init &&
            u.languageDetector.init(u, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((u.i18nFormat = r(this.modules.i18nFormat)),
          u.i18nFormat.init && u.i18nFormat.init(this)),
        (this.translator = new z(this.services, this.options)),
        this.translator.on("*", function (c) {
          for (
            var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), p = 1;
            p < d;
            p++
          )
            m[p - 1] = arguments[p];
          e.emit(c, ...m);
        }),
        this.modules.external.forEach((c) => {
          c.init && c.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      s || (s = K),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const h = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      );
      h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined",
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((h) => {
        this[h] = function () {
          return e.store[h](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((h) => {
        this[h] = function () {
          return e.store[h](...arguments), e;
        };
      });
    const l = j(),
      f = () => {
        const h = (g, u) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!",
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            l.resolve(u),
            s(g, u);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return h(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, h);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? f()
        : setTimeout(f, 0),
      l
    );
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K;
    const i = typeof e == "string" ? e : this.language;
    if (
      (typeof e == "function" && (s = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return s();
      const r = [],
        a = (o) => {
          if (!o || o === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(o).forEach((f) => {
            f !== "cimode" && r.indexOf(f) < 0 && r.push(f);
          });
        };
      i
        ? a(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => a(l)),
        this.options.preload && this.options.preload.forEach((o) => a(o)),
        this.services.backendConnector.load(r, this.options.ns, (o) => {
          !o &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            s(o);
        });
    } else s(null);
  }
  reloadResources(e, t, s) {
    const i = j();
    return (
      typeof e == "function" && ((s = e), (e = void 0)),
      typeof t == "function" && ((s = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      s || (s = K),
      this.services.backendConnector.reload(e, t, (r) => {
        i.resolve(), s(r);
      }),
      i
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()",
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()",
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && ue.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (
          !(["cimode", "dev"].indexOf(s) > -1) &&
          this.store.hasLanguageSomeTranslations(s)
        ) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const i = j();
    this.emit("languageChanging", e);
    const r = (l) => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      a = (l, f) => {
        f
          ? (r(f),
            this.translator.changeLanguage(f),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", f),
            this.logger.log("languageChanged", f))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return s.t(...arguments);
          }),
          t &&
            t(l, function () {
              return s.t(...arguments);
            });
      },
      o = (l) => {
        !e && !l && this.services.languageDetector && (l = []);
        const f =
          typeof l == "string"
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l);
        f &&
          (this.language || r(f),
          this.translator.language || this.translator.changeLanguage(f),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(f)),
          this.loadResources(f, (h) => {
            a(h, f);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? o(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(o)
            : this.services.languageDetector.detect(o)
          : o(e),
      i
    );
  }
  getFixedT(e, t, s) {
    var i = this;
    const r = function (a, o) {
      let l;
      if (typeof o != "object") {
        for (
          var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), g = 2;
          g < f;
          g++
        )
          h[g - 2] = arguments[g];
        l = i.options.overloadTranslationOptionHandler([a, o].concat(h));
      } else l = { ...o };
      (l.lng = l.lng || r.lng),
        (l.lngs = l.lngs || r.lngs),
        (l.ns = l.ns || r.ns),
        l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || s || r.keyPrefix);
      const u = i.options.keySeparator || ".";
      let c;
      return (
        l.keyPrefix && Array.isArray(a)
          ? (c = a.map((d) => `${l.keyPrefix}${u}${d}`))
          : (c = l.keyPrefix ? `${l.keyPrefix}${u}${a}` : a),
        i.t(c, l)
      );
    };
    return (
      typeof e == "string" ? (r.lng = e) : (r.lngs = e),
      (r.ns = t),
      (r.keyPrefix = s),
      r
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages,
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages,
        ),
        !1
      );
    const s = t.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      r = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode") return !0;
    const a = (o, l) => {
      const f = this.services.backendConnector.state[`${o}|${l}`];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(s, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(s, e) && (!i || a(r, e)))
    );
  }
  loadNamespaces(e, t) {
    const s = j();
    return this.options.ns
      ? (typeof e == "string" && (e = [e]),
        e.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          s.resolve(), t && t(i);
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = j();
    typeof e == "string" && (e = [e]);
    const i = this.options.preload || [],
      r = e.filter(
        (a) =>
          i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a),
      );
    return r.length
      ? ((this.options.preload = i.concat(r)),
        this.loadResources((a) => {
          s.resolve(), t && t(a);
        }),
        s)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    const t = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      s = (this.services && this.services.languageUtils) || new ie(ae());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new A(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = { ...this.options, ...e, isClone: !0 },
      r = new A(i);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (r.logger = r.logger.clone(e)),
      ["store", "services", "language"].forEach((o) => {
        r[o] = this[o];
      }),
      (r.services = { ...this.services }),
      (r.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
      s &&
        ((r.store = new te(this.store.data, i)),
        (r.services.resourceStore = r.store)),
      (r.translator = new z(r.services, i)),
      r.translator.on("*", function (o) {
        for (
          var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), h = 1;
          h < l;
          h++
        )
          f[h - 1] = arguments[h];
        r.emit(o, ...f);
      }),
      r.init(i, t),
      (r.translator.options = i),
      (r.translator.backendConnector.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
      }),
      r
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const S = A.createInstance();
S.createInstance = A.createInstance;
S.createInstance;
S.dir;
S.init;
S.loadResources;
S.reloadResources;
S.use;
S.changeLanguage;
S.getFixedT;
S.t;
S.exists;
S.setDefaultNamespace;
S.hasLoadedNamespace;
S.loadNamespaces;
S.loadLanguages;
export { S as i };
