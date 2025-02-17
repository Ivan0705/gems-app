import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { mount } from "cypress/react18";
import { PostItem } from "@/entities/posts/ui/PostItem/PostItem";
import {
  postItem,
  postItem_line,
  postItem_title,
} from "../../../../consts/classes/postsConsts";
import { postItemByTestId } from "../../../../data-testid";
import {
  primary_text_color_light,
  inverted_secondary_color_light,
} from "../../../../consts/colors/rgdColors";

describe("LightPost.cy.tsx", () => {
  it("Test component PostItem", () => {
    const args = {
      post: {
        userId: 1,
        id: 1,
        title: " nesciunt quas odio ",
        body: " repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque ",
      },
    };
    mount(
      <LightWrapper>
        <PostItem {...args} />
      </LightWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(postItemByTestId)
      .should("exist")
      .and("have.class", postItem)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_light}`)
      .and("have.css", "padding", "4px")
      .and("have.css", "border-radius", "10px")
      .and("have.css", "color", primary_text_color_light)
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .and(
        "have.text",
        "1.  nesciunt quas odio  repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque ",
      );

    cy.get("b")
      .should("have.class", postItem_title)
      .and("have.css", "margin-left", "-5px");

    cy.get("hr")
      .should("have.class", postItem_line)
      .and("have.css", "width", "483.109375px")
      .and("have.css", "margin-left", "2px")
      .and("have.css", "margin-bottom", "2px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_light}`);
  });
});
