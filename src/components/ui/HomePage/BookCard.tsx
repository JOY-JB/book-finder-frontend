import { useState } from "react";
import { IBook } from "../../../types/globalTypes";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  const addToWishlist = (book: IBook): void => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
  };

  const removeFromWishlist = (book: IBook): void => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistBook) => wishlistBook._id !== book._id)
    );
  };

  const isBookInWishlist = (book: IBook): boolean => {
    return wishlist.some((wishlistBook) => wishlistBook._id === book._id);
  };

  const truncateString = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div
      key={book._id}
      className="bg-gray-100 shadow-lg rounded-md overflow-hidden transition duration-300 transform hover:scale-105"
    >
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
      <div className="bg-gray-200 px-4 py-3 flex justify-end">
        <button
          className={`${
            isBookInWishlist(book)
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } font-bold py-2 px-4 rounded transition-colors`}
          onClick={() =>
            isBookInWishlist(book)
              ? removeFromWishlist(book)
              : addToWishlist(book)
          }
        >
          {isBookInWishlist(book) ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
