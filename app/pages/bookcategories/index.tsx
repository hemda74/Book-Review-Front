import Head from 'next/head';
import React, { ReactElement } from 'react'
import CategoriesLanding from '../../components/CategoriesLanding';
import CategoriesList from '../../components/CategoriesList';
import ViewerLayout from '../../layout/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const dummyData = {
  departments: [
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
    category_name: 'Category One ',
     
    },
    {
      category_id: 3,
    category_name: 'Category One ',
     
    },
    {
      category_id: 4,
    category_name: 'Category One ',
     
    },
    {
      category_id: 5,
    category_name: 'Category One ',
     
    },
  ],
};

//  categories page.
export const categories:NextPageWithLayout = (props:Props) => {  return (
  <>
    <Head>
       <title>B R App | bookcategories </title> 
      </Head>
     {Object.entries(dummyData.departments).length === 0 && (
        <CategoriesLanding />
      )}
      {Object.entries(dummyData.departments).length !== 0 && (
        <CategoriesList departments={dummyData.departments} />
      )}
    </>
)
}
// adding Layout
categories.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default categories