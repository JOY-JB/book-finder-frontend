import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { usePostBookMutation } from "../redux/features/books/bookApi";
import { IBook } from "../types/globalTypes";

interface FormData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface BookResponse {
  data: IBook;
}

const AddNewBook = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [postBook, { isLoading }] = usePostBookMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = (await postBook(formData)) as BookResponse;
      if (response.data) {
        toast.success("Book added successfully!");
        // Reset form after successful submission
        setFormData({
          title: "",
          author: "",
          genre: "",
          publicationDate: "",
        });
      }
    } catch (error) {
      toast.error("Failed to add book. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Enter the book title"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium">
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              value={formData.author}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Enter the book author"
            />
          </div>
          <div>
            <label htmlFor="genre" className="block text-sm font-medium">
              Genre
            </label>
            <input
              id="genre"
              name="genre"
              type="text"
              required
              value={formData.genre}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
              placeholder="Enter the book genre"
            />
          </div>
          <div>
            <label
              htmlFor="publicationDate"
              className="block text-sm font-medium"
            >
              Publication Date
            </label>
            <input
              id="publicationDate"
              name="publicationDate"
              type="date"
              required
              value={formData.publicationDate}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-gray-400"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded shadow-md"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Book"}
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="bg-gray-100 rounded-md p-4 shadow-md">
          <h2 className="text-xl font-bold">Books Data</h2>
          {/* Add your books data here */}
        </div>
      </div>
    </div>
  );
};

export default AddNewBook;
