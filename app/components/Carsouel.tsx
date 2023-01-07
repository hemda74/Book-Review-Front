import React from 'react'
import Image from 'next/image'
import Image_1 from '../public/01.jpg'
import Image_2 from '../public/02.jpg'
import Image_3 from '../public/03.jpg'
import styles from '../styles/Carsoule.module.css'
const Carsoule = () => {
  return (
<div id="carouselExampleDark" className="carousel carousel-light slide w-70" data-bs-ride="carousel">
<div className={`${styles.carsoleOverlay}`}></div>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
    <Image src={Image_2} className={`d-block w-100 ${styles.carsoleImg}`} alt="..."/>
    <div className={`carousel-caption  ${styles.carsouelCaption}`} >
        <span className={`${styles.spanQoutes}`}>"Reading should not be presented to children as a chore, a duty. It should be offered as a gift." – Kate DiCamillo</span>
      </div>
    </div>
    <div className={`carousel-item `} data-bs-interval="5000">
      <Image src={Image_1} className={`d-block w-100 ${styles.carsoleImg}`}  alt="..."/>
      <div className={`carousel-caption  ${styles.carsouelCaption}`} >
        <span className={`${styles.spanQoutes1}`}>"Reading makes immigrants of us all. It takes us away from home, but more important, it finds homes for us everywhere." – Jean Rhys</span>
      </div>
    </div>
    <div className="carousel-item " data-bs-interval="5000">
    <Image src={Image_3} className={`d-block w-100 ${styles.carsoleImg}`} alt="..."/>
    <div className={`carousel-caption  ${styles.carsouelCaption}`} >
        <span className={`${styles.spanQoutes2}`}>"A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading." – William Styron</span>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
export default Carsoule;