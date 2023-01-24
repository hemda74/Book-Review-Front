import React from 'react';
import styles from '../styles/BookCard.module.css';
import Link from 'next/link';

type Props = {
  book_id: number;
  book_name: string;
  author_name: string;
  book_rate: number;
  category_name:string;
  category_id:number;
};

// Book Card component.
const BookCard = (props: Props) => {
  return (
    <Link
      href={`/bookcategories/${props.category_id}/${props.book_id}`}>
      <span  className="text-decoration-none">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex flex-column text-center p-5">
            <span className="fs-5 fw-semibold text-black">
              {props.book_name}
              {props.author_name}
            </span>
            <span className="fs-5 fw-semibold text-black">
              {props.category_name}
              {props.book_rate}
            </span>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default BookCard;
