import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <nav className="flex items-center justify-between container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Book Finder
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
