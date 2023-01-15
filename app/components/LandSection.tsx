import React from 'react'
import styles from'../styles/LandSection.module.css'
const LandSection = () => {
  return (
<>
<div className={`d-flex align-items-center justify-content-center ${styles.landHead}`}>
    <div className={`container ${styles.landCont}`}>
      <span className={`fs-1 text-center fw-bold ${styles.landQuet1}`}>Welcome to Book Review Application </span>
      <span className={`fs-2  mt-4 fw-semibold ${styles.landQuet2}`}>All Your Needs About Books</span>
      <div className={` d-felx mt-4 ${styles.buttonCont}`}>
        <a href="/#" className={`btn-get-started scrollto myPrimary ${styles.getStart}`}>Get Start</a>
      </div>
    </div>
  </div>
</>  
)
}

export default LandSection;