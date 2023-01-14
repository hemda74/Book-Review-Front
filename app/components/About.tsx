import React from 'react'
import about from '../public/about.jpg'
import Image from 'next/image'
import styles  from '../styles/about.module.css'
import {BiStore} from 'react-icons/bi'
import{BsBookFill} from'react-icons/bs'
const About = () => {
  return (
    <>
    <section  className={`myPrimary text-center mt-3`}>
    <div className="container">
      <div className="section-title pt-3">
        <h2 className={` mt-5 ${styles.spanAbout}`}> About Us</h2>
        <p className='mt-4  fs-5'>we can offer you a review of any book you've read before to help other readers, If you are an author, you can add the books you have written </p>
      </div>
      <div className="row">
        <div className="col-lg-6 " data-aos="fade-right" >
          <Image src={about} className="img-fluid ms-4" alt=""/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
          <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul className={`ms-3 ${styles.ulAbout}`}>
            <li className={`${styles.liAbout}`}>
              <BiStore size={65}/>
              <div className='mt-3'>
                <span className='fs-5 ms-2'>Ullamco laboris nisi ut aliquip consequat</span>
                <span className='fs-6 ms-2'>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</span>
              </div>
            </li>
            <li className='d-flex'>
            <BsBookFill size={65}/>
              <div className='mt-3'>
                <span className='fs-5 ms-3'>Magnam soluta odio exercitationem reprehenderi</span>
                <span className='fs-6 ms-2'>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</span>
              </div>
            </li>
          </ul>
          <span className='fs-6'>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
export default About;