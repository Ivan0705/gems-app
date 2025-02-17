import AvatarImg from "@/shared/ui/Avatar/picture/storybook.jpg";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { mount } from "cypress/react18";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { Avatar as ava } from "../../../consts";
import { avatarByTestId } from "../../../data-testid";

describe("LightAvatar.cy.jsx", () => {
  it("Big light avatar", () => {
    mount(
      <LightWrapper>
        <Avatar size={250} src={AvatarImg} />
      </LightWrapper>,
    );
    cy.get(avatarByTestId)
      .should("exist")
      .and("have.class", ava)
      .and("have.css", "border-radius", "50%")
      .and("have.css", "height", "250px")
      .and("have.css", "width", "250px")
      .and("not.have.attr", "p");
  });
});
