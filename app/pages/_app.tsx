import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'; // impoting bootstrap.css file
import '../styles/bootstrapClasses.css'; // impoting customized bootstrap.css file
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // on first render import bootstrapfile.
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.js');
  }, []);
  return(<>
  <Component {...pageProps} /></>)
}
