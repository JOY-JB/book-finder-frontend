import RecentlyAddedBookCard from "../components/ui/HomePage/RecentlyAddedBookCard";
import Footer from "../components/ui/common/Footer";
import Header from "../components/ui/common/Header";
import { IBook } from "../types/globalTypes";

function Home() {
  const recentlyAddedBooks: IBook[] = [
    {
      _id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      publicationDate: "1925-04-10",
    },
    {
      _id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationDate: "1960-07-11",
    },
    {
      _id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Science Fiction",
      publicationDate: "1949-06-08",
    },
    {
      _id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Classic",
      publicationDate: "1813-01-28",
    },
    {
      _id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationDate: "1951-07-16",
    },
    {
      _id: 6,
      title: "To Kill a Kingdom",
      author: "Alexandra Christo",
      genre: "Fantasy",
      publicationDate: "2018-03-06",
    },
    {
      _id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationDate: "1937-09-21",
    },
    {
      _id: 8,
      title: "The Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publicationDate: "1997-06-26",
    },
    {
      _id: 9,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      publicationDate: "1988-01-01",
    },
    {
      _id: 10,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Thriller",
      publicationDate: "2003-03-18",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 my-8 mb-16">
        <div className="my-8">
          <h1 className="text-4xl font-bold mb-4">Book Catalog System</h1>
          <p className="text-lg text-gray-600">
            Welcome to the Book Catalog System! Explore the top 10 recently
            added books below. Add your favorite books to your wishlist or mark
            them as finished reading.
          </p>
        </div>

        {/* list of the top 10 recently added books */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentlyAddedBooks.map((book) => (
            <RecentlyAddedBookCard book={book} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
