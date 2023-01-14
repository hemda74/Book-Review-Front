import React from 'react'
import styles from'../styles/LandSection.module.css'
const LandSection = () => {
  return (
<>
<div id="hero" className={`d-flex align-items-center ${styles.landHead}`}>
    <div className="container ">
      <span className={`fs-1 ${styles.landQuet1}`}>Welcome to Book Review Application </span>
      <span className={`fs-2  ${styles.landQuet2}`}>All Your Needs About Books</span>
      <div className="d-flex">
        <a href="#about" className={`btn-get-started scrollto ${styles.getStart}`}>Get Start</a>
      </div>
    </div>
  </div>
</>  
)
}

export default LandSection;