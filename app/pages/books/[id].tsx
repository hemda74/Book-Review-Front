import { type } from 'os'
import React,{ReactElement} from 'react'
import Book from '../../components/Book'
import ViewerLayout from '../../layout/ViewerLayout'
import { NextPageWithLayout } from '../_app'
type Props={};
const dummyData= 
    {
      book:{
      book_id: 0,
      book_name:"book 1",
      author_name:"author 1",
      book_rate:4.1,
      category_id: 0,
      category_name: 'Category 1 ',
      }
    }
const id:NextPageWithLayout = (props:Props) => {
    return (
  <>
 <Book book={dummyData.book}/>
  </>
  )
}
id.getLayout = function getLayout(index: ReactElement) {
    return <ViewerLayout childern={index}></ViewerLayout>;
  };
  
  export default id;