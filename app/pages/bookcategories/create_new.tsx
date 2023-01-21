import React,{ReactElement} from 'react'
import CategoriesLanding from '../../components/CategoriesLanding'
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layout/ViewerLayout';
import CreateNewCategoryComp from '../../components/CreateNewCateComp';
type Props = {};

const create_new:NextPageWithLayout = (props:Props) => {
  return (
    <CreateNewCategoryComp/>
  )
  
}
// adding Layout
create_new.getLayout = function getLayout(index: ReactElement) {
    return <ViewerLayout childern={index}></ViewerLayout>;
}
export default create_new;