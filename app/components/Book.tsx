import React from 'react';
import Image from 'next/image';
import bookimage from '../public/bookimage.png'
import styles  from '../styles/Book.module.css';
import { BsStarFill } from 'react-icons/bs';
type Props = {
  book:{
  book_id: number;
  book_name: string;
  author_name: string;
  book_rate: number;
  category_name:string;
  category_id:number;}
};
const Book = (props:Props) => {
  return (
    <>
    <section className={` text-center mt-5`}>
        <div className={`container ${styles.aboutCont}`} >
          <div className="row mt-5">
          <div className="col-lg-6 ">
              <Image src={bookimage} className="img-fluid ms-2" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
              <h1 className={`${styles.textStyle2}   `}>{props.book.book_name}</h1>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle}`}>
              Written by :{props.book.author_name}
              </span>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle} `}>
                Category : {props.book.category_name}</span>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle} `}>
                Rate: {props.book.book_rate} 
                <span className={`${styles.iconStyle} `}> 
                <BsStarFill className=' mb-2'/></span>
                </span>
                <div className="section-title mt-3 pt-3">
            <span className={` mt-5 fs-2 myPrimary ${styles.spanAbout}`}> Add your Rate </span>
          </div>
            </div>
          </div>
        </div>
  </section>
  </>
  )
}
export default Book;