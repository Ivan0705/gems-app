import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { SkeletonUserInfo } from "@/entities/users/ui/UserInfo/SkeletonUserInfo/SkeletonUserInfo";
import {
  skeletonUserInfo,
  skeletonUserInfo_aboutCompany_skeleton,
  skeletonUserInfo_aboutUser,
  skeletonUserInfo_avatar,
  skeletonUserInfo_userInfo,
} from "../../../../consts/classes/userInfoById";
import { Skeleton } from "../../../../consts";
import { skeletonUserInfoByTestId } from "../../../../data-testid";
import { primary_color_dark, black } from "../../../../consts/colors/rgdColors";

describe("DarkSkeletonUserInfo.cy.tsx", () => {
  it("Test component SkeletonUsertsIsloading", () => {
    mount(
      <DarkWrapper>
        <SkeletonUserInfo />
      </DarkWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(skeletonUserInfoByTestId)
      .should("exist")
      .and("have.class", skeletonUserInfo)
      .and("have.css", "color", primary_color_dark)
      .and("have.css", "background-color", black);

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
      .eq(7)
      .should("have.class", skeletonUserInfo_userInfo)
      .and("have.css", "margin-top", "20px");

    cy.get("div")
      .eq(10)
      .should("have.class", skeletonUserInfo_aboutCompany_skeleton)
      .and("have.css", "margin-bottom", "0px")
      .and("have.css", "width", "471px")
      .and("have.css", "height", "50px");
  });
});
