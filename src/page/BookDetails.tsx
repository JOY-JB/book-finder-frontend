import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetReviewQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
} from "../redux/features/books/bookApi";
import { useAppSelector } from "../redux/hook";
import { IBook, IReview } from "../types/globalTypes";

const BookDetails = () => {
  const { id } = useParams();
  const { data: reviews } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postReview] = usePostReviewMutation();

  const { data, isLoading } = useGetSingleBookQuery(id);
  const book: IBook | undefined = data?.data;

  const { user } = useAppSelector((state) => state.user);

  // Function to handle review submission
  const handleReviewSubmit = (reviewData: IReview) => {
    postReview({ id, reviewData });
  };

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  const nevigate = useNavigate();

  // Function to handle Delete Book button click
  const handleDeleteBook = async () => {
    try {
      if (book) {
        const response = await deleteBook(book._id);

        console.log(response);

        if ("data" in response) {
          toast.success("Book deleted successfully!");

          nevigate("/all-books");
        } else if ("error" in response) {
          toast.error("Failed to delete book. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Failed to delete book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-10">
      {isLoading ? (
        <div className="flex items-center justify-center mt-20">
          <div className="animate-spin rounded-full h-36 w-36 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">{book?.title}</h2>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Author:</span> {book?.author}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Genre:</span> {book?.genre}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">Publication Date:</span>{" "}
            {book?.publicationDate}
          </p>

          {/* Edit and Delete Buttons */}
          {user.email === book?.userEmail && (
            <div className="flex justify-end space-x-4">
              <Link
                to={`/book/update-book/${id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Edit Book
              </Link>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => {
                  const shouldDelete = window.confirm(
                    "Are you sure you want to delete this book?"
                  );
                  if (shouldDelete) {
                    handleDeleteBook(); // Call the handleDelete function if the user confirms
                  }
                }}
              >
                {isDeleting ? "Deleting..." : "Delete Book"}
              </button>
            </div>
          )}
          {/* Review Submission Form */}
          {user.email ? (
            <div>
              <h2 className="text-3xl font-semibold mb-4">Write a Review</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const reviewText = (
                    form.elements.namedItem("reviewText") as HTMLTextAreaElement
                  ).value;
                  const reviewData: IReview = {
                    comment: reviewText,
                    userEmail: user.email!,
                  };

                  handleReviewSubmit(reviewData);
                  form.reset();
                }}
              >
                <div className="mb-4">
                  <textarea
                    id="reviewText"
                    name="reviewText"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows={4}
                    placeholder="Share your thoughts about the book..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit Review
                </button>
              </form>
            </div>
          ) : (
            <p className="text-gray-600">Please sign in to leave a review.</p>
          )}

          {/* Reviews List */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Reviews</h2>
            {reviews?.data.length === 0 ? (
              <p>No reviews available.</p>
            ) : (
              <ul className="space-y-4">
                {reviews?.data.map((review: IReview, index: number) => (
                  <li
                    key={index}
                    className="border border-gray-300 rounded-md p-4"
                  >
                    <p className="text-gray-600 font-semibold mb-2">
                      {review.userEmail}
                    </p>
                    <p className="text-gray-600">{review.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
