import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'; // impoting bootstrap.css file
import '../styles/bootstrapClasses.css'; // impoting customized bootstrap.css file
import ViewerLayout from '../layout/ViewerLayout';
import { useEffect, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

// here we export the alias of next page with layout as optional.
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// here we are declaring nex page with layout as app props.
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   // Use the layout defined at the page level, if available.
   const getLayout = Component.getLayout ?? (page => page);
  // on first render import bootstrapfile.
  useEffect(() => {
    
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  return(
  <>
 
  {getLayout(<Component {...pageProps} />)}
 
  </>)
}
