import Head from 'next/head';
import React from 'react';
import NewBtn from './NewBtn';
import styles from '../styles/CategoriesList.module.css';
import CategoryCard from './CategoryCard';
import categories from '../pages/bookcategories';

type Props = {
  [key: string]: any;
};

type Categories = {
  [key: string]: any;
};
// Departments List used as Landing page for demaprtment page if there are Departments.
const DepartmentsList = (props: Props) => {
  return (
    <>
      <Head>
        <title>Book Review | Categories</title>
      </Head>
      <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
          <div className={`card-body pe-5 ps-5 pb-4`}>  
            <div className={`row ${styles.cardsContainer}`}>
              {props.categories.map(
                (categories: Categories, index: number) => (
                  <div key={index} className={`col-sm-12 col-lg-4 col-md-6 ${styles.cardMargin}`}>
                    <CategoryCard
                      category_id={categories.category_id}
                      category_name={categories.category_name}
                    />
                  </div>
                )
              )}
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.selectNewBtnsContainer}`}>
                <span className='fs-3 me-3'>Didn't Find your Category ?</span>
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

export default DepartmentsList;
