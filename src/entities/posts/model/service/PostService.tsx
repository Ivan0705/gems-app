import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../types/types";
import { baseUrl, posts } from "@/shared/api/api";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[] | undefined, number>({
      query: (limit: number = 5) => ({
        url: posts,
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Post"],
    }),
  }),
});
