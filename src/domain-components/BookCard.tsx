import { Book } from "../models/books/response/book";
import "./BookCard.scss";

interface IProps {
  book: Book;
}

const BookCard = (props: IProps) => {
  return (
    <div className="bkr-book-card">
      <div className="book-card-content">
        <div className="book-card-title">{props.book?.title}</div>
        <div className="book-card-author">{props.book?.author}</div>
        <div className="book-card-description">{props.book?.description}</div>
      </div>
      <div className="book-card-footer">
        <div className="book-card-top-ranks">{/* Tooltip */}</div>
        <div className="book-card-buttons">
          {/* Buttons 
      <button className="book-card-reviews-button" onClick={loadReviews()} disabled={showLoadingIndicator}>
        <ng-container *ngIf="!showLoadingIndicator; else loadingDiv">
          { reviews ? 'Show reviews (' + reviews.length + ')' : 'Load reviews' }
        </ng-container>
        <ng-template #loadingDiv> Loading... </ng-template>
      </button>
      <button
        className="book-card-favourite-button"
        [ngclassName]="{ active: isFavourite }"
        (click)="addFavourite()"
        bkrTooltip
        [tooltip]="(isFavourite ? 'Remove from' : 'Add to') + ' favourites'"
      >
        ⭐
      </button>
    */}
        </div>
      </div>

      {/* dialog */}
    </div>
  );
};

export default BookCard;
