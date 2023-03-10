import Head from 'next/head'
import Image from 'next/image'
import { Content, Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Counts from '../components/Counts'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import LandSection from '../components/LandSection'
import Footer from '../components/Footer'
import { NextPage } from 'next'
const inter = Inter({ subsets: ['latin'] })
const Home: NextPage=()=> {
  return (
    <>
      <Head>
        <title>Book Review App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  </Head>
  <TopBar/>
        <NavBar />
  <LandSection/>
  <Counts />
  <Services/>
  <About/>
  <Contact />
  <Footer />
    </>
  )
}
export default Home;