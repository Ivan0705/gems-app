import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { mount } from "cypress/react18";
import { SkeletonUserInfo } from "@/entities/users/ui/UserInfo/SkeletonUserInfo/SkeletonUserInfo";
import {
  skeletonUserInfo,
  skeletonUserInfo_aboutCompany_skeleton,
  skeletonUserInfo_aboutUser,
  skeletonUserInfo_avatar,
} from "../../../../consts/classes/userInfoById";
import { Skeleton } from "../../../../consts";
import { skeletonUserInfoByTestId } from "../../../../data-testid";
import {
  black,
  primary_color_light,
} from "../../../../consts/colors/rgdColors";

describe("LightSkeletonUserInfo.cy.tsx", () => {
  it("Test component SkeletonUsertsIsloading", () => {
    mount(
      <LightWrapper>
        <SkeletonUserInfo />
      </LightWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(skeletonUserInfoByTestId)
      .should("exist")
      .and("have.class", skeletonUserInfo)
      .and("have.css", "display", "grid")
      .and("have.css", "margin", "12px")
      .and("have.css", "color", primary_color_light)
      .and("have.css", "background-color", black);

    cy.get("div").each(($div) => {
      console.log($div);
    });

    cy.get("div")
      .eq(2)
      .should("have.class", skeletonUserInfo)
      .and("have.css", "display", "grid")
      .and("have.css", "margin", "12px");

    cy.get("div")
      .eq(3)
      .should("have.class", skeletonUserInfo_aboutUser)
      .and("have.css", "display", "grid");

    cy.get("div")
      .eq(4)
      .should("have.class", skeletonUserInfo_avatar)
      .and("have.css", "display", "grid");

    cy.get("div")
      .eq(5)
      .should("have.class", Skeleton)
      .and("have.css", "margin-bottom", "0px")
      .and("have.css", "width", "100px")
      .and("have.css", "height", "30px");

    cy.get("div")
      .eq(10)
      .should("have.class", skeletonUserInfo_aboutCompany_skeleton)
      .and("have.css", "margin-bottom", "0px")
      .and("have.css", "width", "476px")
      .and("have.css", "height", "50px");
  });
});
