import { mount } from "cypress/react18";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { PostItem } from "@/entities/posts/ui/PostItem/PostItem";
import {
  postItem,
  postItem_line,
  postItem_title,
} from "../../../../consts/classes/postsConsts";
import { postItemByTestId } from "../../../../data-testid";
import {
  inverted_secondary_color_dark,
  primary_text_color_dark,
} from "../../../../consts/colors/rgdColors";

describe("DarkPost.cy.tsx", () => {
  it("Test component PostItem", () => {
    const args = {
      post: {
        userId: 1,
        id: 1,
        title:
          " sunt aut facere repellat provident occaecati excepturi optio reprehenderit ",
        body: " quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto ",
      },
    };
    mount(
      <DarkWrapper>
        <PostItem {...args} />
      </DarkWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(postItemByTestId)
      .should("exist")
      .and("have.class", postItem)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_dark}`)
      .and("have.css", "padding", "4px")
      .and("have.css", "border-radius", "10px")
      .and("have.css", "color", primary_text_color_dark)
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)")
      .and(
        "have.text",
        "1.  sunt aut facere repellat provident occaecati excepturi optio reprehenderit  quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto ",
      );

    cy.get("b")
      .should("have.class", postItem_title)
      .and("have.css", "font-size", "20px")
      .and("have.css", "margin-left", "-5px");

    cy.get("hr")
      .should("have.class", postItem_line)
      .and("have.css", "width", "483.109375px")
      .and("have.css", "margin-left", "2px")
      .and("have.css", "margin-bottom", "2px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_dark}`);
  });
});
