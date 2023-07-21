import { useParams } from "react-router-dom";
import BookData from "../components/ui/common/BookData";
import Loading from "../components/ui/common/Loading";
import { useGetSingleBookQuery } from "../redux/features/books/bookApi";

const UpdateBook = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetSingleBookQuery(id);

  const bookData = data?.data;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : bookData ? (
        <BookData isUpdate bookData={bookData} />
      ) : (
        <div>Book not found!</div>
      )}
    </>
  );
};

export default UpdateBook;
