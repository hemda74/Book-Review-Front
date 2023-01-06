import React from 'react'
import Image from 'next/image'
import Image_1 from '../public/01.jpg'
import Image_2 from '../public/02.jpg'
import Image_3 from '../public/03.jpg'
const Carsoule = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide " >
    <div className="carousel-inner">
      <div className="carousel-item active">
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
  <Image
  fill
    alt='Mountains'
    src={Image_1}
     sizes='100vw'
  />
</div>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      </div>
  </div>
  )
}
export default Carsoule;