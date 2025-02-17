import { mount } from "cypress/react18";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { SkeletonPosts } from "@/entities/posts/ui/PostsList/IsLoadingPostList/SkeletonPosts/SkeletonPosts";
import { skeleton, skeleton_item, skl } from "../../../../consts";
import { skeletonpostsByTestId } from "../../../../data-testid";
import { black, primary_color_dark } from "../../../../consts/colors/rgdColors";

describe("DarkPostsSkeleton.cy.tsx", () => {
  it("Test component PostItem", () => {
    mount(
      <DarkWrapper>
        <SkeletonPosts />
      </DarkWrapper>,
    );

    cy.get(skeletonpostsByTestId)
      .should("exist")
      .and("have.class", skeleton)
      .and("have.css", "margin", "5px")
      .and("have.css", "color", primary_color_dark)
      .and("have.css", "background-color", black);

    cy.get("div").each(($div) => {
      console.log($div);
    });

    cy.get("div")
      .eq(3)
      .should("exist")
      .and("have.class", skeleton_item)
      .and("have.css", "margin-top", "12px");

    cy.get("div")
      .eq(4)
      .should("exist")
      .and("have.class", skl)
      .and("have.css", "border-radius", "7px");
  });
});
