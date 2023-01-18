import React,{ReactElement} from 'react'
import About from '../components/About'
import ViewerLayout from '../layout/ViewerLayout';
import type { NextPageWithLayout } from './_app'
type Props={[key:string]:any};
// about us page 
export const about:NextPageWithLayout = (props:Props) => {
  return (
<About />
  )
}
// adding Layout
about.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default about