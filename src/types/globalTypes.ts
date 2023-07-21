export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

export interface IReview {
  // id: number; // Unique identifier for the review
  comment: string;
  userId: number;
  bookId: number;
}

export interface IApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
}
