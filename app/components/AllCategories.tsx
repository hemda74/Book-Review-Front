import Link from 'next/link';
import React from 'react';
import styles from '../styles/AllCategories.module.css';
type Props = {};
// All Categories Component
const AllCategories = (props: Props) => {
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${styles.mainContainer}`}>
      <Link href="">
        <a
          type="button"
          className={`btn btn-link text-decoration-none w-100 bg-dark rounded`}>
          <span className="text-white">All Departments</span>
        </a>
      </Link>
      <Link href="">
        <a
          type="button"
          className="btn btn-link bg-transparent w-100 text-decoration-none">
          <span className="text-black">Sites Departments</span>
        </a>
      </Link>
    </div>
  );
};

export default AllCategories;
