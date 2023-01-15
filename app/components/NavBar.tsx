import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.svg'
const NavBar = () => {
  return (
    <>
    <nav className={`navbar navbar-expand-lg fixed-top navbar-scroll d-flex align-items-center ms-0 mt-4 myPrimary ${styles.navBar}`}>
  <div className={`container d-flex justify-content-between align-items-center `}>
    <a className="navbar-brand fs-1 " href="#"><Image
                  alt="trash icon"
                  src={logo}
                  width={220}
                  height={50}
                /></a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`}href="#">Authors</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`} href="#">Books</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`}href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`}href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link fs-4 ${styles.navLink}`}href="#">Contact Me</a>
        </li>        
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default NavBar;