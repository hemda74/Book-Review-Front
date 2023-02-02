import Head from 'next/head';
import React from 'react';
import NewBtn from './NewBtn';
import styles from '../styles/CategoriesList.module.css';
import AuthorCard from './AuthorCard';

type Props = {
  [key: string]: any;
};
type Authors = {
  [key: string]: any;
};
// Authors List used as Landing page for Authors page if there are Authors.
const AuthorsList = (props: Props) => {
  return (
    <>
      <Head>
        <title>B R App | Authors </title>
      </Head>
      <div className="d-flex flex-column w-100 vh-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>  
            <div className={`row ${styles.cardsContainer}`}>
              {props.categories.map(
                (authors: Authors, index: number) => (
                  <div key={index} className={`col-sm-12 col-lg-4 col-md-6 ${styles.cardMargin}`}>
                    <AuthorCard
                      author_id={authors.author_id}
                      author_name={authors.author_name}
                    />
                  </div>
                )
              )}
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.selectNewBtnsContainer}`}>
                <span className='fs-3 me-3'>Add Author</span>
              <NewBtn
                href="/bookcategories/create_new"
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

export default AuthorsList;
