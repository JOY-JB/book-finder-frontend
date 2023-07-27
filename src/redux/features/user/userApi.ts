import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => `user/${email}`,
      providesTags: ["user"],
    }),
    postUser: builder.mutation({
      query: (data) => ({
        url: `user/`,
        method: "POST",
        body: data,
      }),
    }),
    addToWishlist: builder.mutation({
      query: ({ bookId, userEmail }) => ({
        url: `user/wishlist/${bookId}`,
        method: "POST",
        body: { userEmail },
      }),
      invalidatesTags: ["user"],
    }),
    removeFromWishlist: builder.mutation({
      query: ({ bookId, userEmail }) => ({
        url: `user/wishlist/${bookId}`,
        method: "DELETE",
        body: { userEmail },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  usePostUserMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = userApi;
