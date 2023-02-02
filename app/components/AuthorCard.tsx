import React from 'react';
import styles from '../styles/CategoryCard.module.css';
import Link from 'next/link';
import { FcBusinessman } from 'react-icons/fc';

type Props = {
  author_id: number;
  author_name: string;
  
};

// Author Card component.
const AuthorCard = (props: Props) => {
  return (
    <Link
      href={`/books`}>
       <span  className=" text-decoration-none">
        <div
          className={` card-body d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex flex-column text-center p-5">
            <span className={`fs-2 fw-bold ${styles.textStyle}`}>
              <FcBusinessman className='mb-3' size={50}/> {props.author_name}
            </span>
            <span className={` mt-3 fs-6 ms-3 myPrimary p-2 rounded d-inline-block ${styles.textStyle}`}> View Books</span>
          </div>
        </div>
      </span> 
    </Link>
  );
};

export default AuthorCard;
