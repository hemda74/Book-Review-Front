import React from 'react';
import styles from '../styles/NewBtn.module.css';
import Link from 'next/link';
import {AiOutlinePlus} from 'react-icons/ai';
type Props = {
  href: string;
  imageWidth: number; // in Pxiels
  imageHeigth: number; // in Pxiels
};

// New Button Component takes {href, imageWidth, imageHeigth}
const NewBtn = (props: Props) => {
  return (
    <Link href={props.href}
        type="button"
        id="link"
        className={`btn myPrimary d-flex align-items-center justify-content-center ${styles.newOpHourBtn}`}>
        <AiOutlinePlus
          width={props.imageWidth}
          height={props.imageHeigth}
        />
        <span
          className={`ps-1 pe-1 text-white fw-semibold ${styles.newWord}`}
          data-trans="new">
          New
        </span>
    </Link>
  );
};

export default NewBtn;
