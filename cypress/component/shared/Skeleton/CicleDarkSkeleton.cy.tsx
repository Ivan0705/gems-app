import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { Skeleton as Skl } from "../../../consts";
import { skeletonByTestId } from "./../../../data-testid";
import { skeleton_shadow_dark } from "../../../consts/colors/rgdColors";

describe("CirleLightSkeleton.cy.jsx", () => {
  it("Light circle skeleton", () => {
    mount(
      <DarkWrapper>
        <Skeleton border="50%" height={400} width={400} />
      </DarkWrapper>,
    );

    cy.get(skeletonByTestId).should("exist").and("have.class", Skl);

    cy.get("div")
      .eq(2)
      .should("exist")
      .and("have.css", "width", "400px")
      .and("have.css", "height", "400px")
      .and("have.css", "position", "relative")
      .and("have.css", "box-shadow", `${skeleton_shadow_dark} 0px 2px 10px 0px`)
      .and("have.css", "border-radius", "50%")
      .and("have.css", "overflow", "hidden");
  });
});
