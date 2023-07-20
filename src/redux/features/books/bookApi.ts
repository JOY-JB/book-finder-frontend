import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `books/`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
