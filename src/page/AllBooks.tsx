/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import RecentlyAddedBookCard from "../components/ui/HomePage/RecentlyAddedBookCard";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  let recentlyAddedBooks: IBook[] = [];

  if (!isLoading) {
    recentlyAddedBooks = data?.data;
  }

  return (
    <div className="container mx-auto py-8 mb-12">
      <h1 className="text-3xl font-bold mb-4">All Books</h1>
      {isLoading ? (
        <div className="flex items-center justify-center mt-20">
          <div className="animate-spin rounded-full h-36 w-36 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentlyAddedBooks?.map((book) => (
            <RecentlyAddedBookCard book={book} key={book._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
