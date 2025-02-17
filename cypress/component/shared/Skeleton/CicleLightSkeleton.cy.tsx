import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { mount } from "cypress/react18";
import { Skeleton as Skl } from "../../../consts";
import { skeletonByTestId } from "./../../../data-testid";
import { hover_text_light } from "../../../consts/colors/rgdColors";

describe("CirleLightSkeleton.cy.jsx", () => {
  it("Light circle skeleton", () => {
    mount(
      <LightWrapper>
        <Skeleton border="50%" height={200} width={200} />
      </LightWrapper>,
    );

    cy.get(skeletonByTestId).should("exist").and("have.class", Skl);

    cy.get("div")
      .eq(2)
      .should("exist")
      .and("have.css", "width", "200px")
      .and("have.css", "height", "200px")
      .and("have.css", "position", "relative")
      .and("have.css", "box-shadow", `${hover_text_light} 0px 2px 10px 0px`)
      .and("have.css", "border-radius", "50%")
      .and("have.css", "overflow", "hidden");
  });
});
