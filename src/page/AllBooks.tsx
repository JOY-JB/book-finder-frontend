import Footer from "../components/ui/common/Footer";
import Header from "../components/ui/common/Header";

const AllBooks = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">All Books</h1>
        {/* Content for All Books page */}
      </div>
      <Footer />
    </>
  );
};

export default AllBooks;
