import React, { ReactElement } from 'react'
import Contact from '../components/Contact'
import ViewerLayout from '../layout/ViewerLayout';
const contact = () => {
  return (
   <>
      <Contact />
   </>
  )
}
// adding Layout
contact.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default contact