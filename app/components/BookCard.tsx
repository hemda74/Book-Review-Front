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
        <div className={`card pt-5 ${styles.cardContainer}`}>
          {/* here we can can add book image insted of icon */}
              <BsBookFill  className={`${styles.cardImage}`}/>
              <div className="text-center">
                    <span className={`fs-2 d-block mt-3 ${styles.textTitle} ${styles.textStyle}`}>
                      {props.book_name}
                    </span>
                    <div className="mt-4 d-flex row">
                          <div className="col-1">
                          </div>
                          <span className={`fs-6 col-5 p-2 myInfo rounded me-2`}>
                              {props.author_name} 
                          </span>
                          <span className={`fs-6 col-5 p-2 myInfo rounded `}>
                              {props.category_name} 
                          </span>
                    </div>
              </div>
              <span className={`fs-4 mt-4 ms-3 text-center fw-semibold ${styles.rateSpan}`}>
                    Rate: {props.book_rate}
                    <span className={`${styles.iconStyle}`}> <BsStarFill size={20} className=' mb-2 mt-0'/>
                    </span>
              </span>
        </div>
    </Link>
  </>
  );
};

export default BookCard;
