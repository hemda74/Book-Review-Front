import Image from 'next/image';
import bookimage from '../public/bookimage.png'
import styles  from '../styles/Book.module.css';
import { BsStarFill } from 'react-icons/bs';
import React,{useState} from 'react';
import { useRouter } from 'next/router';
type Props = {
  book:{
  book_id: number;
  book_name: string;
  author_name: string;
  book_rate: number;
  category_name:string;
  category_id:number;
}
};
// design for book detailes 
const Book = (props:Props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  // declaring next router in a variable.
  const router = useRouter();
  const handleCancelBtn = () => {
      router.push('/books');
    };
  return (
 <>
    <div className={` row ${styles.bookCont}`} >
        <div className="col-3">
        </div>
        <div className="col-lg-4">
            <Image src={bookimage} className={` ${styles.cardImage} ms-2  `} alt=""/>
        </div>
        <div className={`col-lg-2 text-center m-auto`}>
            <span className={` fw-bold  mt-5  fs-1`}>
                {props.book.book_name} 
            </span>
            <p className="card-text-details mt-3 mt-4 fs-3 ">
                Written By : {props.book.author_name}
            </p>
            <p className="card-text-details  mt-3 fs-3 ">
                Category :{props.book.category_name} 
            </p>
            <p className="card-text-details  fs-3 mt-3  mb-5">
                Rate :  {props.book.book_rate} 
                <span className={`${styles.iconStyle}`}> 
                <BsStarFill className='mb-2'/></span>
            </p>
            <button
                type="button"
                className={`btn myPrimary ${styles.confirmBtn}`}
                disabled={isPending}>
                {!isPending && (
                <span className="fs-5 fw-semibold" data-trans="confirm">
                    Add Review 
                </span>
                )}
                {isPending && <span>Loading...</span>}
            </button>
        </div>
        <div className="col-3">
        </div>
      <div className={`d-flex justify-content-center mt-5 ${styles.buttonsStyles}`}>
            <button
                type="button"
                className={`btn myDanger ${styles.confirmBtn} me-5 ms-2`}
                onClick={() => handleCancelBtn()}
                disabled={isPending}>
                <span className="fs-5 fw-semibold" data-trans="cancel">
                Delete Book
                </span>
                </button>
                <button
                type="button"
                className={`btn myInfo ${styles.confirmBtn}`}
                disabled={isPending}>
                {!isPending && (
                <span className="fs-5 fw-semibold" data-trans="confirm">
                    Update Data
                </span>
                )}
                {isPending && <span>Loading...</span>}
            </button>
          </div>
    </div>    
</>
  )
}
export default Book ;