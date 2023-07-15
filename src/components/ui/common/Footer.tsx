const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 text-center fixed bottom-0 left-0 w-full">
      &copy; {new Date().getFullYear()} Book Catalog. All rights reserved.
    </footer>
  );
};

export default Footer;
