import { r as s } from "./index-ClcD9ViR.js";
import { b as a, a as e, L as n } from "./ThemeDecorator-D9J30xas.js";
function h() {
  const { theme: o, setTheme: t } = s.useContext(a),
    r = () => {
      const m = o === e.DARK ? e.LIGHT : e.DARK;
      t == null || t(m), localStorage.setItem(n, m);
    };
  return { theme: o || e.LIGHT, toggleTheme: r };
}
export { h as u };
