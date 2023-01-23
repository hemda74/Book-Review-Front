import React from 'react'
import styles from '../styles/ListCategoriesData.module.css'
import NewBtn from './NewBtn'
import Image from 'next/image';
const CategoryBooks = () => {
  return (
    <>
    <div className="d-flex flex-column w-100 h-100 mt-4">
        <div className="card border-light mb-3">
            <div className={`card-body p-0  ${styles.cardBodyContainer}`}>
                <div className={`${styles.headingArea} mb-5`}>
                    <div className={`${styles.headingSection} `}>
                            <h3 className='mb-2' data-trans="">All Books</h3>
                    </div>
                </div> 
                <div className={` ${styles.sitesList}`}></div>                  
                <ul className={`list-group mb-1`}>
                    <li className={`list-group-item d-flex align-items-center justify-content-between mb-4 p-0 myShadow-lg ${styles.sitesListLi}`}> 
                        <div className={`d-flex align-items-center ${styles.locationSiteDiv}`}>
                            <div className="d-flex flex-column align-items-center">
                                <span className={`${styles.siteHeading} fs-6`}>Egypt</span>
                                <span className='fw-semibold fs-2'>Cairo</span>
                            </div>
                        </div>
                        <div className='d-flex h-100 mt-3 me-3 ms-3'>
                            <div className='mt-1 me-1 ms-1'>
                                <div className="d-flex align-items-start">
                                    <span className={`fw-bold myPrimary-Text ${styles.editText}`} data-trans="">Edit</span>
                                </div> 
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CategoryBooks;