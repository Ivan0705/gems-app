import { IPost, ISkeleton } from "../model/types/types";

export const arraySkeleton: Array<ISkeleton> = [
  { width: "10%", height: 30 },
  { width: "100%", height: 90 },
  { width: "100%", height: 90 },
  { width: "100%", height: 90 },
  { width: "100%", height: 90 },
  { width: "100%", height: 90 },
];

export const postsForTesting: Array<IPost> = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
