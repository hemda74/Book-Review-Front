import React from 'react'
import styles from '../styles/Counts.module.css'
 import {FcReadingEbook,FcBusinessman,FcVoicePresentation,FcKindle} from 'react-icons/fc'
const Counts = () => {
  return (
    <>
    <section id="counts" className={`${styles.counts} container`}>
        <span className='fs-1  '> Our Numbers</span>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className={`${styles.countBox}`}>
            <FcVoicePresentation size={50}  />
            <span className='mt-3 fs-6'>Number of Reveiwers</span>
            <span className='mt-3 fs-6'>9172</span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className={`${styles.countBox}`}>
            <FcKindle size={50}/>
            <span className='mt-3 fs-6'>Number of Books</span>
            <span className='mt-3 fs-6'>1172 </span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={`${styles.countBox}`}>
          <FcReadingEbook size={50}/>
            <span className='mt-3 fs-6'>Number of Countries</span>
            <span className='mt-3 fs-6'>49 </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={`${styles.countBox}`}>
            <FcBusinessman size={50}/>
            <span className='mt-3 fs-6'>Number of Authors </span>
            <span className='mt-3 fs-6'>172 </span>
          </div>
        </div>
      </div>
  </section>
  {/* -- End Counts Section -- */}
  </>
  )
}

export default Counts