import Head from 'next/head';
import React, { ReactElement } from 'react'
import CategoriesLanding from '../../components/CategoriesLanding';
import AuthorsList from '../../components/AuthorsList';
import ViewerLayout from '../../layout/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const dummyData = {
  authors: [
    {
      author_id: 0,
      author_name: 'Author 1',
    },
    {
      author_id: 1,
      author_name: 'Author 2',
     
    },
    {
      author_id: 2,
      author_name: 'Author 3',
     
    },
    {
      author_id: 3,
      author_name: 'Author 4',
     
    },
     
  ],
};

//  categories page.
 const categories:NextPageWithLayout = (props:Props) => { 
  
  return (
  <>
    <Head>
       <title>B R App | Authors </title> 
      </Head>
     {Object.entries(dummyData.authors).length === 0 && (
        <CategoriesLanding />
      )}
      {Object.entries(dummyData.authors).length !== 0 && (
        <AuthorsList categories={dummyData.authors}  />
      )}
    </>
)
}
// adding Layout
categories.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default categories