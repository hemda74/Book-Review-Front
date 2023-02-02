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
    <div className="col-lg-6 ">
        <Image src={bookimage} className={` ${styles.cardImage}`} alt=""/>
    </div>
    <div className="col-lg-4 text-center m-auto  ">
        <span className={` fw-bold  p-3  rounded fs-1`}>
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
                                <span className={`${styles.iconStyle} `}> 
                                <BsStarFill className='mb-2'/></span>
                            </p>
 
</div>
<div className={`d-flex justify-content-center mt-5 ${styles.buttonsStyles}`}>
                        <button
                            type="button"
                            className={`btn myPrimary-outline ${styles.confirmBtn} me-5 ms-2`}
                            onClick={() => handleCancelBtn()}
                            disabled={isPending}>
                            <span className="fs-5 fw-semibold p-4 " data-trans="cancel">
                            Cancel
                            </span>
                            </button>
                            <button
                            type="button"
                            className={`btn myPrimary-outline ${styles.confirmBtn} me-5 ms-2`}
                            onClick={() => handleCancelBtn()}
                            disabled={isPending}>
                            <span className="fs-5 fw-semibold p-4 " data-trans="cancel">
                            Cancel
                            </span>
                            </button>
                            <button
                            type="button"
                            className={`btn myPrimary ${styles.confirmBtn}`}
                            disabled={isPending}>
                            {!isPending && (
                            <span className="fs-5 fw-semibold p-4" data-trans="confirm">
                                Confirm
                            </span>
                            )}
                            {isPending && <span>Loading...</span>}
                        </button>
                    </div>
</div>    
                    {/* <div className={`col-lg-6 col-md-6 col-sm-12 card-detalis d-flex align-items-center   ${styles.innerCont}`}>
                    <Image src={bookimage} width={350} height={500}  alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 justify-content-center text-center  ">
                            <span className="card-text-details fw-bold  fs-1">
                                 {props.book.book_name} 
                            </span>
                            <p className="card-text-details border-bottom p-1 fs-4 mt-5">
                                Written By : {props.book.author_name}
                            </p>
                            <p className="card-text-details border-bottom p-1 fs-4 mt-5">
                                Category :{props.book.category_name} 
                            </p>
                            <p className="card-text-details border-bottom fs-4 p-2 mt-5 mb-5">
                                Rate :  {props.book.book_rate} 
                                <span className={`${styles.iconStyle} `}> 
                                <BsStarFill className='mb-2'/></span>
                            </p>
                            <span className={` mt-4 fs-3 myPrimary ${styles.spanAbout}`}> Add your Rate </span>
                      </div> */}
                    
                
            
          
    {/* <section className={`text-center mt-5 vh-100 `}>
        <div className={`container ${styles.aboutCont}`} >
          <div className="row mt-5">
          <div className="col-lg-6 ">
              <Image src={bookimage} width={350} className=" ms-2" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center">
              <h1 className={`${styles.textStyle2}`}>{props.book.book_name}</h1>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle}`}>
              Written by  <br/>
              <span className=" border-bottom ">
              {props.book.author_name}
              </span>
              </span>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle}`}>
                Category 
                 {props.book.category_name}</span>
              <span className={`fs-4 mt-3 fw-bold ${styles.textStyle}`}>
                Rate: {props.book.book_rate} 
                <span className={`${styles.iconStyle} `}> 
                <BsStarFill className=' mb-2'/></span>
                </span>
                <div className="section-title mt-3 p-2">
            <span className={` mt-5 fs-3 myPrimary ${styles.spanAbout}`}> Add your Rate </span>
          </div>
            </div>
          </div>
        </div>
  </section> */}
  </>
  )
}
export default Book;