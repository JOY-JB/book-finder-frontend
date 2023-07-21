import { useState } from "react";
import { IBook, IReview } from "../../../types/globalTypes";

interface IProps {
  book: IBook;
}

const BookDetails = ({ book }: IProps) => {
  const [reviews, setReviews] = useState<IReview[]>([]); // Assuming IReview is the type for a review object

  // Function to handle review submission
  const handleReviewSubmit = (reviewData: IReview) => {
    // Implement the logic to add the review to the book's reviews array
    // For example, you can use an API call to post the review and then update the state
    // setReviews((prevReviews) => [...prevReviews, reviewData]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{book.title}</h2>
      <p className="text-gray-600 text-sm">Author: {book.author}</p>
      <p className="text-gray-600 text-sm">Genre: {book.genre}</p>
      <p className="text-gray-600 text-sm">
        Publication Date: {book.publicationDate}
      </p>
      <h3 className="text-lg font-bold my-4">Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{review.comment}</li>
          ))}
        </ul>
      )}
      {/* Add review form here */}
      {/* Implement the review form using a text area for the review comment */}
      {/* Use handleReviewSubmit function to handle the form submission */}
      {/* For example: */}
      {/* <form onSubmit={handleReviewSubmit}>
        <textarea
          value={newReviewComment}
          onChange={(e) => setNewReviewComment(e.target.value)}
          placeholder="Write a review..."
        />
        <button type="submit">Submit Review</button>
      </form> */}
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
