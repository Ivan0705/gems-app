import { Button } from "@/shared/ui/Button/Button";
import { mount } from "cypress/react18";
import { Icon } from "@/shared/ui/Icon/Icon";
import { ReactComponent as Diamond } from "@/shared/assets/icons/diamond.svg?react";
import { IconSize } from "@/shared/ui/Icon/consts";
import cls from "./Custom.module.scss";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { classNames } from "@/shared/libs/classNames/classNames";
import { LightWrapper } from "../helper/themeWrapper/LightWrapper";
import { app, light, outline, size_m } from "../../consts";
import {
  btn,
  icon,
  withIconWithButton,
  withIconWithButton_title,
  withIconWithButton_wapperTitleAndButton,
  withIconWithButton_wrapper,
} from "./customConsts";
import { buttonCypress } from "../helper/cypressTests";
import { font_family3 } from "../../consts/fonts/fonts";

describe("Testing custom element...", () => {
  it("Mounting component and testing...", () => {
    mount(
      <LightWrapper>
        <div className={cls.withIconWithButton}>
          <div className={cls.withIconWithButton_wrapper}>
            <div className={cls.withIconWithButton_wapperTitleAndButton}>
              <div className={classNames(cls.icon)}>
                <Icon Svg={Diamond} size={IconSize.SMALL} />
              </div>
              <div className={cls.withIconWithButton_title}>EMERALD</div>
              <Button
                theme={ButtonTheme.OUTLINE}
                className={classNames(cls.btn)}
              >
                emerald
              </Button>
            </div>
          </div>
        </div>
      </LightWrapper>,
    );

    cy.get("div").should("exist").eq(1).and("have.class", app);
    cy.get("div").should("exist").eq(1).and("have.class", light);

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", withIconWithButton)
      .and("have.css", "display", "grid");

    cy.get("div")
      .should("exist")
      .eq(3)
      .and("have.class", withIconWithButton_wrapper)
      .and("have.css", "display", "grid")
      .and("have.css", "border", "2px solid rgb(0, 0, 0)")
      .and("have.css", "border-radius", "25px")
      .and("have.css", "margin", "50px")
      .and("have.css", "align-items", "center")
      .and("have.css", "justify-content", "center");

    cy.get("div")
      .should("exist")
      .eq(4)
      .and("have.class", withIconWithButton_wapperTitleAndButton)
      .and("have.css", "display", "grid")
      .and("have.css", "justify-content", "center");

    cy.get("div")
      .should("exist")
      .eq(5)
      .and("have.class", icon)
      .and("have.css", "margin-left", "28px");

    cy.get("div")
      .should("exist")
      .eq(6)
      .and("have.class", withIconWithButton_title)
      .and("have.css", "font-family", font_family3)
      .and("have.css", "font-size", "25px")
      .and("have.text", "EMERALD");

    buttonCypress(0, "rgb(27, 27, 27)", "6px 15px");
    cy.get("button")
      .should("exist")
      .eq(0)
      //btn class
      .and("have.class", btn)
      .and("have.css", "margin", "9px 0px 15px")
      .and("have.css", "font-size", "20px")
      .and("have.css", "font-style", "italic")
      .trigger("hover")
      .and("have.css", "color", "rgb(27, 27, 27)")
      .and(
        "have.css",
        "background",
        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      )
      //outline class
      .and("have.class", outline)
      .and("have.css", "border", "1px solid rgb(27, 27, 27)")
      .and("have.css", "color", "rgb(27, 27, 27)")
      .and(
        "have.css",
        "background",
        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      )
      //size_m class
      .and("have.class", size_m)
      .and(
        "have.css",
        "font",
        'italic 20px / 24px consolas, "Times New Roman", serif',
      )
      .and("have.text", "emerald")
      .click();
  });
});
