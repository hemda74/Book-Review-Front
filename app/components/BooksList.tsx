import Head from 'next/head';
import React from 'react';
import NewBtn from './NewBtn';
import styles from '../styles/CategoriesList.module.css';
import BookCard from './BookCard';

type Props = {
  [key: string]: any;
};

type Books = {
  [key: string]: any;
};
// Departments List used as Landing page for demaprtment page if there are Departments.
const DepartmentsList = (props: Props) => {
  return (
    <>
      <Head>
        <title>Book Review | Books</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>  
            <div className={`row ${styles.cardsContainer}`}>
              {props.books.map(
                (books: Books, index: number) => (
                  <div key={index} className={`col-sm-12 col-lg-3 col-md-6 ${styles.cardMargin}`}>
                    <BookCard
                      book_id={books.book_id}
                      book_name={books.book_name}
                      book_rate={books.book_rate}
                      author_name={books.author_name}
                      category_id={books.category_id}
                      category_name={books.category_name}
                    />
                  </div>
                )
              )
              }
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.selectNewBtnsContainer}`}>
                <span className='fs-3 me-3'>Add New Book</span>
              <NewBtn
                href="/books/create_new"
                imageWidth={24}
                imageHeigth={24}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsList;
