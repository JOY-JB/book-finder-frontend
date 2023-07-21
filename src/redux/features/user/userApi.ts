import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: `user/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostUserMutation } = bookApi;
