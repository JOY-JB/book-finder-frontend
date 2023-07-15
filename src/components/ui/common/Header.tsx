import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <nav className="flex items-center justify-between container mx-auto">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <img className="mr-2 h-6 bg-gray-900" src="./book_logo.png" alt="" />
          <span className="align-middle">Book Finder</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/all-books">All Books</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
