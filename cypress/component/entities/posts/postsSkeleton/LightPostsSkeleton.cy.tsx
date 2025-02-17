import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { mount } from "cypress/react18";
import { SkeletonPosts } from "@/entities/posts/ui/PostsList/IsLoadingPostList/SkeletonPosts/SkeletonPosts";
import { skeleton, skeleton_item, skl } from "../../../../consts";
import { skeletonpostsByTestId } from "../../../../data-testid";
import { black } from "../../../../consts/colors/rgdColors";

describe("LightPostsSkeleton.cy.tsx", () => {
  it("Test component PostsSkeleton", () => {
    mount(
      <LightWrapper>
        <SkeletonPosts />
      </LightWrapper>,
    );

    cy.get(skeletonpostsByTestId)
      .should("exist")
      .and("have.class", skeleton)
      .and("have.css", "margin", "5px")
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
