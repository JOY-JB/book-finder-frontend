import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/ui/common/BookCard";
import Loading from "../components/ui/common/Loading";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPublicationYear, setSelectedPublicationYear] = useState<
    string | null
  >(null);

  let allBooks: IBook[] = [];
  if (!isLoading) {
    allBooks = data?.data;
  }

  const allGenres = [...new Set(allBooks.map((book) => book.genre))];
  const allPublicationYears = [
    ...new Set(allBooks.map((book) => book.publicationDate.substring(0, 4))),
  ];

  const filteredBooks = allBooks?.filter((book) => {
    const genreMatch =
      selectedGenre === null ||
      book.genre.toLowerCase() === selectedGenre.toLowerCase();
    const publicationYearMatch =
      selectedPublicationYear === null ||
      book.publicationDate.startsWith(selectedPublicationYear);

    const titleAuthorGenreMatch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase());

    return titleAuthorGenreMatch && genreMatch && publicationYearMatch;
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value || null);
  };

  const handlePublicationYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPublicationYear(e.target.value || null);
  };

  return (
    <div className="container mx-auto py-8 mb-12">
      <div className="flex space-x-8 mb-4">
        {/* Left Section: Search Bar and Filtering Options */}
        <div className="w-1/6 mt-9">
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <select
            value={selectedGenre || ""}
            onChange={handleGenreChange}
            className="block w-full mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All Genres</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <select
            value={selectedPublicationYear || ""}
            onChange={handlePublicationYearChange}
            className="block w-full mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">All Years</option>
            {allPublicationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Center Section: Book Cards */}
        <div className="w-5/6">
          <div className="flex justify-between mb-5">
            <h1 className="text-3xl font-bold mb-4">All Books</h1>
            <Link to="/add-new-book">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add New Book
              </button>
            </Link>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredBooks.map((book) => (
                <div key={book._id}>
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
