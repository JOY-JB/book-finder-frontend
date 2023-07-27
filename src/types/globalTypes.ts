export interface IBook {
  _id?: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  userEmail: string;
}

export interface IReview {
  comment: string;
  userEmail: string;
}

export interface IApiResponse<Data> {
  statusCode: number;
  success: boolean;
  message: string;
  data: Data;
}
