import React, { ReactElement, ReactNode } from 'react';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
// decaling an alias for layout childern
// decaling an alias for layout childern
type LayoutProps = {
  childern: React.ReactNode;
};
// vieweres Layout.
const ViewerLayout = ({ childern }:LayoutProps) => {
  return (
    <>
            <TopBar />
            <NavBar />
            <main>{childern}</main>  
            <Footer />
     
    </>
  );
};

export default ViewerLayout;
