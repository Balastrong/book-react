import { useState } from "react";
import BookCard from "../domain-components/BookCard";
import { Book } from "../models/books/response/book";
import "./BookSearch.scss";

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

  const search = () => {
    // search books
  };

  return (
    <>
      <div className="search-form">
        <div className="search-form-controls">
          <div className="form-field">
            <label>Title</label>
            <input placeholder="Title" />
          </div>
          <div className="form-field">
            <label>Author</label>
            <input placeholder="Author" />
          </div>
          <div className="form-field">
            <label>ISBN</label>
            <input placeholder="ISBN" />
          </div>
          <div className="form-field">
            <div className="full-width">
              <button className="full-width" onClick={search}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="books-container">
        {books.map((book, index) => (
          <div className="books-container-item" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookSearch;
