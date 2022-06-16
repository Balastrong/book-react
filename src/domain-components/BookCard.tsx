import { useState } from "react";
import Dialog from "../generic-components/Dialog";
import { Book } from "../models/books/response/book";
import { Review } from "../models/books/response/review";
import { getReviews } from "../services/books.service";
import "./BookCard.scss";

interface IProps {
  book: Book;
}

const BookCard = ({ book }: IProps) => {
  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(false);
  const [isReviewDialogVisible, setIsReviewDialogVisible] =
    useState<boolean>(false);
  const [reviews, setReviews] = useState<Review[] | undefined>(undefined);

  const findReviews = async () => {
    if (book) {
      if (reviews === undefined) {
        setIsLoadingReviews(true);

        await getReviews({ title: book.title, author: book.author }).then(
          (res) => {
            setIsLoadingReviews(false);
            setReviews(res.results);
            setIsReviewDialogVisible(true);
          },
          () => setIsLoadingReviews(false)
        );
      } else {
        setIsReviewDialogVisible(true);
      }
    }
  };

  const addFavourite = () => {};

  return (
    <div className="bkr-book-card">
      <div className="book-card-content">
        <div className="book-card-title">{book?.title}</div>
        <div className="book-card-author">{book?.author}</div>
        <div className="book-card-description">{book?.description}</div>
      </div>
      <div className="book-card-footer">
        <div className="book-card-top-ranks">{/* Tooltip */}</div>
        <div className="book-card-buttons">
          <button className="book-card-reviews-button" onClick={findReviews}>
            {isLoadingReviews
              ? "Loading..."
              : reviews
              ? "Show reviews (" + (reviews?.length ?? 0) + ")"
              : "Load reviews"}
          </button>
          <button className="book-card-favourite-button" onClick={addFavourite}>
            ⭐
          </button>
        </div>
      </div>

      <Dialog
        isVisible={isReviewDialogVisible}
        onClose={() => {
          setIsReviewDialogVisible(false);
        }}
      >
        Content
      </Dialog>
    </div>
  );
};

export default BookCard;
