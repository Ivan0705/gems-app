import { j as t } from "./jsx-runtime-CfatFE5O.js";
import { r as o } from "./index-ClcD9ViR.js";
var m = ((e) => ((e.LIGHT = "light"), (e.DARK = "dark"), e))(m || {});
const d = o.createContext({}),
  h = "theme",
  l = localStorage.getItem(h) || m.LIGHT,
  n = o.memo((e) => {
    const { children: r, initialTheme: c } = e,
      [s, a] = o.useState(c || l),
      i = o.useMemo(() => ({ theme: s, setTheme: a }), [s, a]);
    return t.jsx(d.Provider, { value: i, children: r });
  });
n.__docgenInfo = { description: "", methods: [], displayName: "ThemeProvider" };
const x = (e) => (r) =>
  t.jsx(n, {
    children: t.jsx("div", { className: `app ${e}`, children: t.jsx(r, {}) }),
  });
export { h as L, x as T, m as a, d as b };
