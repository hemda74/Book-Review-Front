import Head from 'next/head';
import React, { ReactElement } from 'react'
import CategoriesLanding from '../../components/CategoriesLanding';
import CategoriesList from '../../components/CategoriesList';
import ViewerLayout from '../../layout/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const dummyData = {
  categories: [
    {
      category_id: 0,
      category_name: 'Category 1 ',
     
    },
    {
      category_id: 1,
      category_name: 'Category 2 ',
     
    },
    {
      category_id: 2,
      category_name: 'Category 3 ',
     
    },
    {
      category_id: 3,
      category_name: 'Category 4 ',
     
    },
    {
      category_id: 4,
      category_name: 'Category 5 ',
     
    },
     {
       category_id: 5,
       category_name: 'Category 6 ',
     
     },
  ],
};

//  categories page.
export const categories:NextPageWithLayout = (props:Props) => { 
  
  return (
  <>
    <Head>
       <title>B R App | bookcategories </title> 
      </Head>
     {Object.entries(dummyData.categories).length === 0 && (
        <CategoriesLanding />
      )}
      {Object.entries(dummyData.categories).length !== 0 && (
        <CategoriesList categories={dummyData.categories}  />
      )}
    </>
)
}
// adding Layout
categories.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default categories