import AvatarImg from "@/shared/ui/Avatar/picture/storybook.jpg";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { mount } from "cypress/react18";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { Avatar as ava } from "../../../consts";
import { avatarByTestId } from "../../../data-testid";

describe("DarkAvatar.cy.jsx", () => {
  it("Medium dakr avatar", () => {
    mount(
      <DarkWrapper>
        <Avatar size={150} src={AvatarImg} />
      </DarkWrapper>,
    );
    cy.get(avatarByTestId)
      .should("exist")
      .and("have.class", ava)
      .and("have.css", "border-radius", "50%")
      .and("have.css", "height", "150px")
      .and("have.css", "width", "150px")
      .and("not.have.attr", "h2");
  });
});
