import { BookRequestModel } from "../models/books/request/bookRequestModel";
import { Book } from "../models/books/response/book";
import { BookApiResponse } from "../models/books/response/bookApiResponse";
import {
  flatObjectToQueryString,
  objectKeysToCamelCase,
} from "../utils/dataUtils";

const baseUrl: string = "https://api.nytimes.com/svc/books/v3";

async function getApiKey(): Promise<string> {
  return await fetch("../API_KEY").then((res) => res.text());
}

export const getBooks = async (
  requestModel: BookRequestModel
): Promise<BookApiResponse<Book>> => {
  const authenticatedRequest = {
    ...requestModel,
    "api-key": await getApiKey(),
  };

  return await fetch(
    `${baseUrl}/lists/best-sellers/history.json?${flatObjectToQueryString(
      authenticatedRequest
    )}`
  )
    .then((res) => res.json())
    .then((res: BookApiResponse<Book>) =>
      objectKeysToCamelCase({
        ...res,
        results: res.results.map((book) => new Book(book)),
      })
    );
};
