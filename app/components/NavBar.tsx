import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.svg'
import Link from 'next/link';
const NavBar = () => {
  return (
    //design nav
<>
  <nav className={`navbar  navbar-expand-lg sticky-top  myInfo ${styles.navBar}`}>
    <div className={`container d-flex justify-content-center align-items-center mt-4`}>
      <Link href="/" className="navbar-brand fs-1 ">
        <Image
            alt="trash icon"
            src={logo}
            width={220}
            height={50}
        />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span>
      </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link fs-4 ${styles.navLink}`} id="link">Home</Link>
            </li>
            <li className="nav-item">
            <Link href="/authors" className={`nav-link fs-4 ${styles.navLink}`} id="link">Authors</Link>
            </li>
            <li className="nav-item">
            <Link href="/books" className={`nav-link fs-4 ${styles.navLink}`} id="link">Books</Link>
            </li>
            <li className="nav-item">
            <Link href="/bookcategories" className={`nav-link fs-4 ${styles.navLink}`} id="link">Categories</Link>
            </li>
            <li className="nav-item">
            <Link href="/about" className={`nav-link fs-4 ${styles.navLink}`} id="link">About Us</Link>
            </li>
            <li className="nav-item">
            <Link href="/contact" className={`nav-link fs-4 ${styles.navLink}`} id="link">Contact Us</Link>
            </li>         
          </ul>
        </div>
      </div>
 </nav>
</>
  );
}

export default NavBar;