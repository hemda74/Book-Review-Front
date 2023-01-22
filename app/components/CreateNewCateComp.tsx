import React,{useState} from 'react'
import styles from'../styles/CreateNewCate.module.css'
import { useRouter } from 'next/router';

type Props={[key:string]:any};

const CreateNewCategoryComp = function (props: Props) {
    const [isPassError, setIsPassError] = useState(false);
    const [isPassMatchError, setIsPassMatchError] = useState(false);
    const [isOldPassError, setIsOldPassError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    // declaring next router in a variable.
    const router = useRouter();
    const handleCancelBtn = () => {
        router.push('/bookcategories');
      };
    return (
        <>
            <div className="flex-column min-vh-100 align-items-center justify-content-center mb-5 d-flex  ">
                <div className="card border-light ">
                    <div className={`card-body  ${styles.cardBodyContainer}`}>
                        {/* design heading section */}
                        <div className={`${styles.headingSection}`}>
                            <h3 className='m-0' data-trans="">New Category</h3>
                        </div>
                        <div className='all inputs conainer row '>
                            <div className="firstinputs  col-12">
                                <div className="form-group pt-4">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="category-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Site Name*</span></label>
                                    <input type="text" className={`form-control ${styles.inputWidth}`}  id="site-name-input" />
                                </div>
                                <div className="form-group mt-3">
                                    <label className={`col-form-label mt-4${styles.colFormLabel}}`} htmlFor="site-name-input" data-trans=""><span className={`${styles.inputLabel}`}>Description</span></label>
                                    <textarea className={`form-control ${styles.textAreainput}`} id="description-input" rows={5} />
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center mb-5 ${styles.buttonsStyles}`}>
                        <button
                            type="button"
                            className={`btn myPrimary-outline ${styles.confirmBtn} me-2 ms-2`}
                            onClick={() => handleCancelBtn()}
                            disabled={isPending}>
                            <span className="fs-5 fw-semibold" data-trans="cancel">
                            Cancel
                            </span>
                            </button>
                            <button
                            type="button"
                            className={`btn myPrimary ${styles.confirmBtn}`}
                            disabled={isPending}>
                            {!isPending && (
                            <span className="fs-5 fw-semibold" data-trans="confirm">
                                Confirm
                            </span>
                            )}
                            {isPending && <span>Loading...</span>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreateNewCategoryComp;