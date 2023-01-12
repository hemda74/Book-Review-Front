import React,{useState} from 'react'
import styles from '../styles/Counts.module.css'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
 import {FcReadingEbook,FcBusinessman,FcVoicePresentation,FcKindle} from 'react-icons/fc'
const Counts = () => {
  return (
    <>
    <section id="counts" className={`${styles.counts} container`}>
        <span className={`fs-2 myPrimary mt-0 ${styles.ourNumbers}`}> Our Numbers</span>
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6">
          <div className={`${styles.countBox}`}>
            <FcVoicePresentation size={50}  />
            <span className='mt-3 fs-6'>Number of Reveiwers</span>
            <span className='mt-3 fs-6'><CountUp end={7249} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className={`${styles.countBox}`}>
            <FcKindle size={50}/>
            <span className='mt-3 fs-6'>Number of Books</span>
            <span className='mt-3 fs-6'>  <CountUp end={1284} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp> </span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={`${styles.countBox}`}>
          <FcReadingEbook size={50}/>
            <span className='mt-3 fs-6'>Number of Countries</span>
            <span className='mt-3 fs-6'><CountUp end={94} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={`${styles.countBox}`}>
            <FcBusinessman size={50}/>
            <span className='mt-3 fs-6'>Number of Authors </span>
            <span className='mt-3 fs-6'><CountUp end={890} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></span>
          </div>
        </div>
      </div>
  </section>
  
  </>
  )
}

export default Counts