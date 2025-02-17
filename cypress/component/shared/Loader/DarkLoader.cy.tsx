import { Loader } from "@/shared/ui/Loader/Loader";
import { mount } from "cypress/react18";
import "@/app/styles/index.scss";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { lds_ellipsis } from "../../../consts";
import { loaderByTestId } from "./../../../data-testid";
import { black } from "../../../consts/colors/rgdColors";

describe("Loader.cy.jsx", () => {
  it("Light loader displayed", () => {
    mount(
      <DarkWrapper>
        <Loader />
      </DarkWrapper>,
    );

    cy.get(loaderByTestId)
      .should("exist")
      .and("have.class", lds_ellipsis)
      .and("have.css", "display", "inline-block")
      .and("have.css", "position", "relative")
      .and("have.css", "width", "80px")
      .and("have.css", "height", "80px")
      .and("have.text", "loading");

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", lds_ellipsis)
      .and("have.css", "top", "0px")
      .and("have.css", "position", "relative")
      .and("have.css", "width", "80px")
      .and("have.css", "height", "80px")
      .and("have.css", "border-radius", "0px")
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "animation-timing-function", "ease")
      .and("have.text", "loading");

    cy.get("div:nth-child(1)")
      .should("exist")
      .and("have.class", lds_ellipsis)
      .and("have.css", "left", "auto")
      .and("have.css", "animation", "none 0s ease 0s 1 normal none running");
  });
});
