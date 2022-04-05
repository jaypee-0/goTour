import React from 'react'
import Choose from '../data/chooseUs.json'

const ChooseUs = () => {
  return (
    <div id='chooseUs'>
      <div className='w-100 text-center'>
        <h2 className='py-3'>Why Choose Us?</h2>
        <div id="chooseus" className='m-auto'>
          {
            Choose && Choose.map( choose => {
                return(
                  <div className='postion-relative px-2 py-3 ' key={ choose.id }>
                    <div className='postion-absolute' style={{ top: 60, left: 60, width: "40", height: "40" }}>
                      <img className='py-3 ' src={ choose.icon } alt="" />
                    </div>
                    <h2 className='mb-0'>{ choose.captionNo }</h2>
                    <h2>{ choose.captionTitle }</h2>
                    <p className='py-2'>{ choose.captionText }</p>
                  </div>
                )
              })
          }
        </div>
      </div>
      <div className='my-5 py-5 col-10 col-sm-5 ml-auto text-right'>
          <h1>Popular Destinations</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam </p>
          <button id='explorebutton' className='px-5 py-2 btn'>Explore</button>
      </div>
    </div>
  )
}

export default ChooseUs