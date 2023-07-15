
const BookCard = () => {
    return (
        <div className="container mx-auto py-8">
  <h1 className="text-3xl font-bold mb-4">Recently Added Books</h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {recentlyAddedBooks.map(book => (
      <li key={book.id} className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="text-gray-600">By {book.author}</p>
        <p className="text-gray-600">Published: {book.publishedDate}</p>
      </li>
    ))}
  </ul>
</div>;
    );
};

export default BookCard;