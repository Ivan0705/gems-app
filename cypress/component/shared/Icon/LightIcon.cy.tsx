import { IconSize } from "@/shared/ui/Icon/consts";
import { Icon } from "@/shared/ui/Icon/Icon";
import { mount } from "cypress/react18";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { icon, small } from "../../../consts";
import { iconByTestId } from "./../../../data-testid";
import {
  primary_color_light,
  black_icon,
  black,
} from "../../../consts/colors/rgdColors";

describe("LightIcon.cy.jsx", () => {
  it("Small light icon", () => {
    mount(
      <LightWrapper>
        <Icon Svg={Diamond} size={IconSize.SMALL} />
      </LightWrapper>,
    );

    cy.get(iconByTestId)
      .should("exist")
      .and("have.class", icon)
      .and("have.css", "fill", black_icon)
      .and("have.css", "border-radius", "0px")
      .and("have.css", "color", primary_color_light)
      .and("not.have.attr", "button");

    cy.get("svg")
      .should("exist")
      .and("have.class", small)
      .and("have.css", "padding", "0px")
      .and("have.css", "border", `0px none ${primary_color_light}`)
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "outline", `${primary_color_light} none 0px`)
      .and("have.css", "height", "50px")
      .and("have.css", "width", "50px");
  });
});
