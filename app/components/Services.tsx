import React from 'react'
import styles from '../styles/Services.module.css'
import {BsDribbble} from 'react-icons/bs'
const Services = () => {
  return (
   <>
   <section id="services" className="services text-center mt-5">
      <div className="container" >
        <div className={`section-title fs-5 ${styles.serviceHead}`}>
          <span className={`text-center fs-2 mt-2 myPrimary ${styles.serviceHead}`}>Services</span>
          <p className='fs-3 mt-4'>Check our <span>Services</span></p>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
           <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-2">
           <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-2">
           <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-2">
           <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-2">
           <div className={`${styles.serviceHead}`}>
              <div className={`${styles.iconBoxLink}`}><span className={`${styles.iconStyle}`}><BsDribbble size={50}/></span></div>
              <span className={`fs-4 mb-1 `}><a href="" className={` fs-3 ${styles.serviceLink}`}>hello</a></span>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
export default Services ;