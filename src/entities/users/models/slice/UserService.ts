import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/types";
import { baseUrl, users } from "@/shared/api/api";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, timeout: 10000 }),
  tagTypes: ["User"],
  refetchOnFocus: true,
  refetchOnMountOrArgChange: 30,
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (number) => ({
        url: users,
        params: {
          _limit: number,
        },
        timeout: 3000,
      }),
      providesTags: ["User"],
    }),
    fetchUserById: build.query<IUser[], number>({
      query: (id: number) => ({
        url: users,
        params: {
          id: id,
        },
        timeout: 3000,
      }),
    }),
  }),
});
