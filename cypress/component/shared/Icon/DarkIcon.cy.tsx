import { IconSize } from "@/shared/ui/Icon/consts";
import { Icon } from "@/shared/ui/Icon/Icon";
import { mount } from "cypress/react18";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { icon, normal } from "../../../consts";
import { iconByTestId } from "./../../../data-testid";
import {
  primary_color_dark,
  black_icon,
  black,
} from "../../../consts/colors/rgdColors";

describe("DarkIcon.cy.jsx", () => {
  it("Normal dark icon", () => {
    mount(
      <DarkWrapper>
        <Icon Svg={Diamond} size={IconSize.NORMAL} />
      </DarkWrapper>,
    );

    cy.get(iconByTestId)
      .should("exist")
      .and("have.class", icon)
      .and("have.css", "fill", black_icon)
      .and("have.css", "border-radius", "0px")
      .and("have.css", "color", primary_color_dark)
      .and("not.have.attr", "button");

    cy.get("svg")
      .should("exist")
      .and("have.class", normal)
      .and("have.css", "padding", "0px")
      .and("have.css", "border", `0px none ${primary_color_dark}`)
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "outline", `${primary_color_dark} none 0px`)
      .and("have.css", "height", "150px")
      .and("have.css", "width", "150px");
  });
});
