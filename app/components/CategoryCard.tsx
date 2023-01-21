import React from 'react';
import styles from '../styles/DepartmentCard.module.css';
import Link from 'next/link';

type Props = {
  category_id: number;
  category_name: string;
  
};

// Category Card component.
const CategoryCard = (props: Props) => {
  return (
    <Link
      href={`/bookcategories/${props.category_id}`}>
      <span  className="text-decoration-none">
        <div
          className={`d-flex align-items-center justify-content-center ${styles.cardContainer}`}>
          <div className="d-flex flex-column text-center p-5">
            <span className="fs-5 fw-semibold text-black">
              {props.category_name}
            </span>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default CategoryCard;
