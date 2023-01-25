import React from 'react'
import about from '../public/about.jpg'
import Image from 'next/image'
import styles  from '../styles/about.module.css'
import {BiStore} from 'react-icons/bi'
import{BsBookFill} from'react-icons/bs'
const Book = () => {
  return (
    <>
    <section className={` text-center mt-5`}>
    <div className={`container ${styles.aboutCont}`} >
      <div className="section-title pt-3">
        <span className={` mt-5 fs-2 myPrimary ${styles.spanAbout}`}> About Us</span>
        <span className='mt-5 fs-5 d-block'>we can offer you a review of any book you've read before to help other readers.</span>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 "  >
          <BsBookFill className="img-fluid ms-2" />
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
                <span className='fs-5 ms-2 d-block'>Ullamco laboris nisi ut aliquip consequat</span>
                <span className='fs-6 ms-2 d-block'>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</span>
              </div>
            </li>
            <li className='d-flex'>
            <BsBookFill size={65}/>
              <div className='mt-3'>
                <span className='fs-5 ms-3 d-block'>Magnam soluta odio exercitationem reprehenderi</span>
                <span className='fs-6 ms-2 d-block'>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
export default Book;