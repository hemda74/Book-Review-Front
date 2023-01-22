import React from 'react';
import Image from 'next/image';
import DepartmentsLandingImage from '../public/images/categories-landing.svg';
import NewBtn from './NewBtn';
import styles from '../styles/CategoriesLanding.module.css';

type Props = {};

// Books Landing component used as Categories Landing page.
const BooksLanding = (props: Props) => {
  return (
    <div className="d-flex flex-column w-100 h-100 mt-4">
      <div className="card border-light mb-3">
        <div className={`card-body pe-5 ps-5 pb-4 ${styles.cardBodyContainer}`}>
          <div className="d-flex flex-column align-items-center">
             <Image
              src={DepartmentsLandingImage}
              alt="departments-landing-image"
              width={365}
              height={365}
            /> 
            <span className={`mt-4 ${styles.landingPageHeader}`} data-trans="">
              Create A Category
            </span>
            <div className={styles.newOpHourBtn}>
              <NewBtn
                href="/tenant-admin/organization_details/departments/create_new"
                imageWidth={22}
                imageHeigth={22}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksLanding;
