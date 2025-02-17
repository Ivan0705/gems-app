import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { SkeletonUsertsIsloading } from "@/entities/users/ui/UsersList/UsersIsLoadingList/SkeletonUsersIsLoading/SkeletonUsersIsLoading";
import {
  skeletonSearch,
  skeletonUsersIsLoading,
  skeletonUsersIsLoading_btn,
  skeletonUsersIsLoading_title,
} from "../../../../consts/classes/usersConsts";
import { skeletonUsersIsLoadingByTestId } from "../../../../data-testid";
import { black, primary_color_dark } from "../../../../consts/colors/rgdColors";

describe("DarkUsersSkeleton.cy.tsx", () => {
  it("Test component SkeletonUsertsIsloading", () => {
    mount(
      <DarkWrapper>
        <SkeletonUsertsIsloading />
      </DarkWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(skeletonUsersIsLoadingByTestId)
      .should("exist")
      .and("have.class", skeletonUsersIsLoading)
      .and("have.css", "display", "block")
      .and("have.css", "margin", "0px")
      .and("have.css", "color", primary_color_dark)
      .and("have.css", "background-color", black);

    cy.get("div")
      .eq(2)
      .should("have.class", skeletonUsersIsLoading)
      .and("have.css", "margin", "0px");

    cy.get("div")
      .eq(3)
      .should("have.class", skeletonSearch)
      .and("have.css", "margin-bottom", "12px")
      .and("have.css", "border-radius", "5px");

    cy.get("div")
      .eq(4)
      .should("have.class", skeletonUsersIsLoading_title)
      .and("have.css", "margin-bottom", "5px")
      .and("have.css", "border-radius", "8px");

    cy.get("div")
      .eq(5)
      .should("have.class", skeletonUsersIsLoading_btn)
      .and("have.css", "margin-bottom", "20px")
      .and("have.css", "border-radius", "2px");
  });
});
