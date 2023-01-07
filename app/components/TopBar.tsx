import React from 'react'
import {BsFacebook,BsTwitter,BsLinkedin,BsGithub,BsEnvelopeFill,BsFillTelephoneFill} from 'react-icons/bs';
const TopBar = () => {
  return (
    
      <div id="topbar" className="d-flex align-items-center mySecondary fixed-top  ">
       <div className="container d-flex justify-content-center justify-content-md-between  ">
           <div className="contact-info d-flex align-items-center ">
          <div className="d-flex align-items-center me-2 "><BsEnvelopeFill /><a href="mailto:ahmedashrafhemdan74@gmail.com" className='ms-2'>ahmedashrafhemdan74@gmail.com</a></div>
             < div className="d-flex align-items-center "><BsFillTelephoneFill/><span className='ms-2'>+201121900466</span></div>
           </div>
           <div className="social-links d-none d-md-flex align-items-center ">
             <a href="https://twitter.com/AhmedHemdan72" target="_blank" className="twitter ms-2" >< BsTwitter /></a>
             <a href="https://www.facebook.com/profile.php?id=100009361588650" target="_blank" className="facebook ms-2">< BsFacebook/></a>
             <a href="https://www.linkedin.com/in/ahmed-hemdan-695408201/" target="_blank" className="linkedin ms-2"> <BsLinkedin/></a>
             <a href="https://github.com/hemda74" target="_blank" className="github ms-2"> <BsGithub/></a>
       </div>
       </div>
    </div>
  )
}

export default TopBar;
