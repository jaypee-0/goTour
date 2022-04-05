import React from 'react'
import firstPlace from '../assets/rolands-varsbergs-miKmVyq3qhE-unsplash.svg'
import secondPlace from '../assets/ian-dooley-hpTH5b6mo2s-unsplash.svg'
import thirdPlace from '../assets/john-t-4GYkrk4gpBo-unsplash.svg'
import fourthPlace from '../assets/ibrahim-rifath-Y6tBl0pTe-g-unsplash.svg'
import fifthPlace from '../assets/dino-reichmuth-A5rCN8626Ck-unsplash.svg'
import path12 from '../assets/Path 12.svg'

const Explore = () => {
  return (
    <div id='Explore'>
      
        <div className='my-5 py-5 col-10 col-sm-7'>
            <h1>Explore Beautiful <br />places in the world</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.</p>
            <button className='px-5 py-2 btn'>Explore</button>
        </div>   
        <img id="path12" style={{ marginBottom: "4rem" }} src={path12} className="d-none d-lg-block position-absolute" alt="" />
        
        <div style={{ padding: "5rem 0" }} id='beautifulPlaces' className='d-flex flex-column flex-md-row w-75 m-auto justify-content-center'>
           <div className='mt-5'><img src={firstPlace} alt="" /></div>
           <div className='d-none d-lg-block flex-column'>
            <img src={secondPlace} alt="" />
            <img src={thirdPlace} alt="" />
           </div>
           <div className='mt-4 flex-column'>
            <img src={fourthPlace} alt="" />
            <img src={fifthPlace} alt="" />
           </div>
        </div>
    </div>
  )
}

export default Explore