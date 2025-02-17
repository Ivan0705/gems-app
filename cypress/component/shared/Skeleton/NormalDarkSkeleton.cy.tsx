import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { Skeleton as Skl } from "../../../consts";
import { skeletonByTestId } from "./../../../data-testid";
import { skeleton_shadow_dark } from "../../../consts/colors/rgdColors";

describe("NormalSkeleton.cy.jsx", () => {
  it("Dark normal skeleton", () => {
    mount(
      <DarkWrapper>
        <Skeleton height={50} width={200} />
      </DarkWrapper>,
    );

    cy.get(skeletonByTestId).should("exist").and("have.class", Skl);

    cy.get("div")
      .eq(2)
      .should("exist")
      .and("have.css", "width", "200px")
      .and("have.css", "height", "50px")
      .and("have.css", "position", "relative")
      .and("have.css", "box-shadow", `${skeleton_shadow_dark} 0px 2px 10px 0px`)
      .and("have.css", "overflow", "hidden");
  });
});
