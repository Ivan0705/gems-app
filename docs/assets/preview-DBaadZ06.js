const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./DocsRenderer-CFRXHY34-Dvg0hnGv.js",
      "./iframe-DPtl8C2l.js",
      "./index-ClcD9ViR.js",
      "./_commonjsHelpers-Cpj98o6Y.js",
      "./jsx-runtime-CfatFE5O.js",
      "./index-CBV61OJ-.js",
      "./index-D-8MO0q_.js",
      "./index-CJyPbrN5.js",
      "./index-DrFu-skq.js",
      "./react-18-DkvqOA9u.js",
    ]),
) => i.map((i) => d[i]);
import { _ as a } from "./iframe-DPtl8C2l.js";
var s = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  l = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import("./DocsRenderer-CFRXHY34-Dvg0hnGv.js").then((r) => r.D),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (
            (e.tags || []).filter((t) => s[t]).length === 0 &&
            !((r = e.parameters.docs) != null && r.disable)
          );
        },
      },
    },
  };
export { l as parameters };
