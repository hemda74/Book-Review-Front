import React from 'react'
import styles from '../styles/NavBar.module.css' ;
const NavBar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark  myPrimary d-flex align-items-center ">
  <div className="container d-flex justify-content-between align-items-center  ">
    <a className="navbar-brand" href="#">Book Review App</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className={`nav-link  ${styles.navLink}`} href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${styles.navLink}`}href="#">Authors</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${styles.navLink}`} href="#">Books</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${styles.navLink}`}href="#">Categories</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default NavBar;