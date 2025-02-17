import { render, screen } from "@testing-library/react";
import { PostItem } from "./PostItem";

describe("PostItem test", () => {
  test("PosItem element: exist after fetch data...", async () => {
    const argsForTest = {
      post: {
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "bodyquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
      },
    };
    render(<PostItem {...argsForTest} />);
    expect(await screen.findByTestId("postitem")).toBeInTheDocument();
  });

  test("Resolves to postitem", () => {
    const argsForTest = {
      post: {
        id: 1,
        title: "title",
        body: "body",
      },
    };
    expect(argsForTest.post.id).toBe(1);
    expect(argsForTest.post.title).toBe("title");
    expect(argsForTest.post.body).toBe("body");
  });
});
