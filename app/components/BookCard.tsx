import React from 'react';
import styles from '../styles/BookCard.module.css';
import Link from 'next/link';
import { BsBookFill,BsStarFill } from 'react-icons/bs';
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
      href={`/books/${props.book_id}`}>
      <span  className="text-decoration-none">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex p-5 ">
            <div className="d-flex align-items-center justify-content-center"><BsBookFill size={80} className={` me-4  ${styles.textStyle2} `}/></div>
            <div className="book-info">
          <span className={` fs-4 fw-semibold ${styles.textStyle} `}>
               <span className='fs-2'>{props.book_name}</span> <br/>
                {props.author_name} <br/>
                <span className='fs-4 mt-0'>{props.category_name} </span><br/>
                <span className='fs-4 mt-0'>Rate: {props.book_rate}  <span className={`${styles.iconStyle} `}> <BsStarFill   className=' mb-2'/></span></span>
            </span>
            </div>
          </div>
        </div>
      </span>
    </Link>
  </>
  );
};

export default BookCard;
