import React from 'react'
import styles from '../styles/Contact.module.css'
import {BiMap} from 'react-icons/bi'
import {BsEnvelopeFill,BsFillTelephoneFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
   <section className={` text-center mt-5`}>
    <div className={`container ${styles.aboutCont}`} >
    <div className="section-title pt-5">
        <span className={`fs-2 myPrimary mt-5 ${styles.contactHead}`}> Contact Us</span>
        <p className='mt-5 fs-5'>we can offer you a review of any book you've read before to help other readers </p>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-6">
          <div className={`mb-4 ${styles.infoBox}`}>
          <span className={`${styles.iconStyle}`}><BiMap size={40} /></span>
            <span className='mt-2 fs-3 d-block'>Our Address</span>
            <p>108 Nasr City Street, Cairo, Egypt</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className={`mb-4 ${styles.infoBox}`}>
            <span className={`${styles.iconStyle}`}> <BsEnvelopeFill size={40}/></span>
            <span className='mt-2 fs-3 d-block'>Email Us</span>
            <p>ahmedashrafhemdan74@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
        <div className={`mb-4 ${styles.infoBox}`}>
        <span className={`${styles.iconStyle}`}><BsFillTelephoneFill size={40} /></span>
            <span className='mt-2 fs-3 d-block'>Call Us</span>
            <p>+20 1121900466 </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13816.478633038354!2d31.271807858276365!3d30.033424799549813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840ac90c2ed63%3A0x2fdb96e4e9f72e6f!2sSalah%20Al-Din%20Al-Ayoubi%20Castle!5e0!3m2!1sen!2seg!4v1659307228307!5m2!1sen!2seg"    loading="lazy" ></iframe>
        </div>
        <div className="col-lg-6">
          <form action="forms/contact.php" method="post" role="form" className={`${styles.emailForm}`}>
            <div className="row">
            <div className={`form-group ${styles.formGrop}`}>
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className={`form-group ${styles.formGrop}`}>
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className={`form-group ${styles.formGrop}`}>
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className={`form-group text-area ${styles.formGrop}`}>
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className={`${styles.loadingMessaga}`}>Loading</div>
              <div className={`${styles.errorMessaga}`}></div>
              <div className={`${styles.sentMessaga}`}>Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit" className='myPrimary p-2 rounded'>Send Message</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
 
  </>
  )
}
export default Contact