import { U as d } from "./UserCard-Bx_-phAH.js";
import { f as u } from "./index-Bm9fFANh.js";
import { T as c, a as m } from "./ThemeDecorator-D9J30xas.js";
/* empty css              */ import "./jsx-runtime-CfatFE5O.js";
import "./index-ClcD9ViR.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./Avatar-DgzAITNe.js";
import "./classNames-mpNP1gNJ.js";
import "./Button-CEQMFML8.js";
import "./useTranslation-qApjsL5e.js";
import "./i18nInstance-DCxlOlkw.js";
const p = {
    id: 1,
    name: "Cat Bob",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: { lat: "29.4572", lng: "-164.2990" },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
    goToBack: u(),
    btn_title: "back",
  },
  v = {
    component: d,
    title: "entities/users/UserInfo/UserCard/UserCard",
    argTypes: { background: { color: "control" } },
    tags: ["autodocs"],
  },
  r = { args: p };
r.decorators = [c(m.LIGHT)];
const e = { args: p };
e.decorators = [c(m.DARK)];
var o, t, a;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: userInfo
}`,
      ...((a = (t = r.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : a.source),
    },
  },
};
var s, i, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: userInfo
}`,
      ...((n = (i = e.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : n.source),
    },
  },
};
const x = ["Light", "Dark"];
export { e as Dark, r as Light, x as __namedExportsOrder, v as default };
