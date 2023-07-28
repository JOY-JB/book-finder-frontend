import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookfinder-server.vercel.app/api/v1/",
  }),
  tagTypes: ["review", "book", "user"],
  endpoints: () => ({}),
});
