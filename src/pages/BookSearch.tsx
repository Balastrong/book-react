import { useState } from "react";
import BookCard from "../domain-components/BookCard";
import { Book } from "../models/books/response/book";
import { getBooks } from "../services/books.service";
import { removeEmptyFields } from "../utils/dataUtils";
import "./BookSearch.scss";

const BookSearch = () => {
  const [books, setBooks] = useState<Book[] | undefined>(undefined);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isbn, setIsbn] = useState<string>("");

  const search = async () => {
    // search books
    getBooks(removeEmptyFields({ title, author, isbn })).then((res) => {
      setBooks(res.results);
    });
  };

  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <div className="search-form-controls">
          <div className="form-field">
            <label>Title</label>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Author</label>
            <input
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>ISBN</label>
            <input
              placeholder="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className="form-field">
            <div className="full-width">
              <button className="full-width">Search</button>
            </div>
          </div>
        </div>
      </form>
      <div className="books-container">
        {books?.map((book, index) => (
          <div className="books-container-item" key={index}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookSearch;
