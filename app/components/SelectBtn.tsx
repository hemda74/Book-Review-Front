import Link from 'next/link';
import React from 'react';
import styles from '../styles/SelectBtn.module.css'; 
type Props = {};

// Select btn component which changes the reading only state to select state.
const SelectBtn = (props: Props) => {
  return (
    <Link
      type="button"
      className={`btn myPrimary-outline text-decoration-none d-flex align-items-center justify-content-center ${styles.newOpHourBtn}`} href={''}>
      <span className={`ps-1 pe-1 fw-semibold ${styles.newWord}`} data-trans="">
        Select
      </span>
    </Link>
  );
};

export default SelectBtn;
