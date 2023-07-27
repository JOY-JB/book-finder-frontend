import { Link } from "react-router-dom";
import {
  useAddToWishlistMutation,
  useGetUserQuery,
  useRemoveFromWishlistMutation,
} from "../../../redux/features/user/userApi";
import { useAppSelector } from "../../../redux/hook";
import { IBook } from "../../../types/globalTypes";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const { user } = useAppSelector((state) => state.user);
  const { data } = useGetUserQuery(user.email);

  const wishlist: string[] = data?.data?.wishlist || [];

  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  const addToWishlistHandler = async () => {
    try {
      await addToWishlist({ bookId: book._id, userEmail: user.email });
    } catch (error) {}
  };

  const removeFromWishlistHandler = async () => {
    try {
      await removeFromWishlist({ bookId: book._id, userEmail: user.email });
    } catch (error) {}
  };

  const isBookInWishlist = (book: IBook): boolean => {
    return wishlist.includes(book._id?.toString() || "");
  };

  const truncateString = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-md overflow-hidden transition duration-300 transform hover:scale-105">
      <Link to={`/book/${book._id}`}>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">
            {truncateString(book.title, 23)}
          </h3>
          <p className="text-gray-600 text-sm">Author: {book.author}</p>
          <p className="text-gray-600 text-sm">Genre: {book.genre}</p>
          <p className="text-gray-600 text-sm">
            Publication Date: {book.publicationDate}
          </p>
        </div>
      </Link>
      <div className="bg-gray-200 px-4 py-3 flex justify-end">
        <button
          className={`${
            isBookInWishlist(book)
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } font-bold py-2 px-4 rounded transition-colors text-xs`}
          onClick={() =>
            isBookInWishlist(book)
              ? removeFromWishlistHandler()
              : addToWishlistHandler()
          }
          disabled={!user.email}
        >
          {isBookInWishlist(book) ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
