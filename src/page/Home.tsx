/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BookCard from "../components/ui/common/BookCard";
import BookQuotesSection from "../components/ui/common/BookQuotesSection";
import HeroSection from "../components/ui/common/HeroSection";
import Loading from "../components/ui/common/Loading";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";

function Home() {
  const { data, isLoading } = useGetBooksQuery(undefined);

  let recentlyAddedBooks: IBook[] = [];

  if (!isLoading) {
    recentlyAddedBooks = data?.data;
  }

  const getTopRecentlyAddedBooks = (books: IBook[]) => {
    if (books.length) {
      const sortedBooks = [...books].sort((a, b) => {
        const dateA = new Date(a.publicationDate) as any as number;
        const dateB = new Date(b.publicationDate) as any as number;
        return dateB - dateA;
      });
      const topRecentlyAddedBooks = sortedBooks.slice(0, 10);
      return topRecentlyAddedBooks;
    }
  };

  const topRecentlyAddedBooks = getTopRecentlyAddedBooks(recentlyAddedBooks);

  return (
    <div>
      {isLoading && !topRecentlyAddedBooks ? (
        <Loading />
      ) : (
        <div>
          <HeroSection />
          <div className="container mx-auto px-4 my-8 mb-16">
            <div className="my-8">
              <h1 className="text-4xl font-bold mb-4">Book Catalog System</h1>
              <p className="text-lg text-gray-600">
                Welcome to the Book Catalog System! Explore the top 10 recently
                added books below. Add your favorite books to your wishlist.
              </p>
            </div>

            {/* list of the top 10 recently added books */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {topRecentlyAddedBooks?.map((book) => (
                <BookCard book={book} key={book._id} />
              ))}
            </div>
          </div>
          <BookQuotesSection />
        </div>
      )}
    </div>
  );
}

export default Home;
