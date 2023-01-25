import Head from 'next/head';
import React,{ReactElement} from 'react'
import BooksLanding from '../../components/BooksLanding';
import BooksList from '../../components/BooksList';
import ViewerLayout from '../../layout/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData = {
  books: [
    {
      book_id: 0,
      book_name:"book 1",
      author_name:"author 1",
      book_rate:4.1,
      category_id: 0,
      category_name: 'Category 1 ',
     
    },
    {
      category_id: 1,
      category_name: 'Category 2 ',
      book_id: 1,
      book_name:"book 2",
      author_name:"author 2",
      book_rate:2.5,
      
    },
    {
      book_id: 2,
      category_id: 2,
      book_name:"book 3",
      author_name:"author 3",
      book_rate: 4.5 ,
      category_name: 'Category 3 ',
    },
    {
      book_id: 3,
      category_id: 3,
      book_name:"book 4",
      author_name:"author 4",
      book_rate: 3.5 ,
      category_name: 'Category 4 ',
     
    },
    {
      book_id: 4,
      category_id: 4,
      book_name:"book 4",
      author_name:"author 4",
      book_rate: 4.34 ,
      category_name: 'Category 5 ',
     
    },
    {
      book_id: 4,
      category_id: 4,
      book_name:"book 4",
      author_name:"author 4",
      book_rate: 4.34 ,
      category_name: 'Category 5 ',
     
    },
     {
      book_id: 0,
      category_id: 2,
      book_name:"book 3",
      author_name:"author 3",
      book_rate: 1.9 ,
      category_name: 'Category 6 ',
     
     },
  ],
};
const id:NextPageWithLayout = (props:Props) => {  return (
  <>
    <Head>
       <title>B R App | bookcategories </title> 
      </Head>
     {Object.entries(dummyData.books).length === 0 && (
        <BooksLanding />
      )}
      {Object.entries(dummyData.books).length !== 0 && (
        <BooksList books={dummyData.books}  />
      )}
    </>
)
}
id.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};

export default id;