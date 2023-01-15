import React from 'react'
import styles from '../styles/TopBar.module.css'
import {BsFacebook,BsTwitter,BsLinkedin,BsGithub,BsEnvelopeFill,BsFillTelephoneFill} from 'react-icons/bs';
const TopBar = () => {
  return (
      //  topbar implementation
      <div id="topbar" className={`d-flex align-items-center mySecondary fixed-top ${styles.topBarColors}`}>
       <div className="container d-flex justify-content-center justify-content-md-between ">
           <div className="contact-info d-flex align-items-center">
           {/* // phone and mail */}
          <div className="d-flex align-items-center me-2"><BsEnvelopeFill/><a href="mailto:ahmedashrafhemdan74@gmail.com" className={`ms-2 ${styles.aTag}`}>ahmedashrafhemdan74@gmail.com</a></div>
             < div className="d-flex align-items-center"><BsFillTelephoneFill/><span className=''>+201121900466</span></div>
           </div>
            {/* social media links */}
           <div className={`social-links d-none d-md-flex align-items-center ${styles.topBarColors}`}>
             <div className={`${styles.topBarColors}`}><a href="https://twitter.com/AhmedHemdan72" target="_blank" className="ms-2" >< BsTwitter /></a></div>
             <a href="https://www.facebook.com/profile.php?id=100009361588650" target="_blank" className="ms-2">< BsFacebook/></a>
             <a href="https://www.linkedin.com/in/ahmed-hemdan-695408201/" target="_blank" className="ms-2"> <BsLinkedin/></a>
             <a href="https://github.com/hemda74" target="_blank" className="ms-2"> <BsGithub/></a>
       </div>
       </div>
    </div>
  )
}
export default TopBar;
