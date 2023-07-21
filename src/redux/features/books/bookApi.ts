import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => `books/`,
      providesTags: ["book"],
    }),
    getSingleBook: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["book"],
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `books/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: updateData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    postReview: builder.mutation({
      query: ({ id, reviewData }) => ({
        url: `/books/${id}/reviews`,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["review"],
    }),
    getReview: builder.query({
      query: (id) => `/books/${id}/reviews`,
      providesTags: ["review"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  usePostBookMutation,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useGetReviewQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
