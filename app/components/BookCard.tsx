import React from 'react';
import styles from '../styles/BookCard.module.css';
import Link from 'next/link';
import { BsBookFill } from 'react-icons/bs';
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
    <>
    <Link
      href={`/bookcategories/${props.category_id}/${props.book_id}`}>
      <span  className="text-decoration-none">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex flex-column p-5 ">
          <span className={` fs-4 fw-bold ${styles.textStyle} `}>
            <BsBookFill size={60} className=" align-center d-block"/>
            <span className={`${styles.textStyle2} `}> {props.book_name} </span><br/>
              Author : <span className={`${styles.textStyle} `}>{props.author_name}</span> <br/>
              Category : <span className={`${styles.textStyle} `}> {props.category_name} </span> <br/>
               Rate : <span className={` ${styles.textStyle} `}>{props.book_rate}</span>
            </span>
          </div>
        </div>
      </span>
    </Link>
  </>
  );
};

export default BookCard;
