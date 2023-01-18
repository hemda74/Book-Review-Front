import React, { ReactElement } from 'react'
import ViewerLayout from '../../layout/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props={[key:string]:any};
export const index:NextPageWithLayout = (props:Props) => {  return (
    <div>heloooooooooooooooooooooooooooooooooooooooooo</div>
)
}
// adding Layout
index.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default index