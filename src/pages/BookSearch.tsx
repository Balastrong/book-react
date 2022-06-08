import { useState } from "react";
import BookCard from "../domain-components/BookCard";
import { Book } from "../models/books/response/book";

const BookSearch = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      title: "Book 1",
      author: "Author 1",
      description: "Description 1",
    },
    {
      title: "Book 2",
      author: "Author 2",
      description: "Description 2",
    },
  ] as Book[]);

  return (
    <>
      <form></form>
      <div className="books-container">
        {books.map((book, index) => (
          <BookCard book={book} key={index} />
        ))}
      </div>
    </>
  );
};

export default BookSearch;
