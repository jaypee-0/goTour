import React from "react";
import "./components/Fontawesome";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import background from "./assets/silas-baisch-Wn4ulyzVoD4-unsplash.png";
import Explore from "./components/Explore"
import ChooseUs from "./components/ChooseUs"
import Carousel from 'react-elastic-carousel'
import { testimony, blog, destinations } from "./data/testimony_blog_destinations";
import camera from "./assets/Icon awesome-camera-retro.png"
import path13 from "./assets/Path 13.png"
import plane from "./assets/airplane.png"
import ScrollButton from "./components/ScrollButton";

const landingImg={
  backgroundImage: `url(${background})`,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function App() {
  return (
    <div>      
      <div id='landing' className='d-flex align-items-center' style={landingImg}>
        <div className="container container-md">
          <Navigation />
          <div className='text-center d-flex vh-100 flex-column'>
            <div className="m-auto">
              <h1 className="mt-5">Create your<br /> Own Adventure</h1>
              <p className="w-75 m-auto">The world is a book and those who do not travel read only one page, find the place of your dreams. Create your own adventure.</p>  
            </div>           
            <p className='mt-auto'>Begin your journey with <span className="style-orange fw-bolder">Go</span>Tour</p>     
            <i className="bi style-orange mb-3 bi-chevron-down"></i>
          </div>
        </div>
      </div>       
      <div className="container container-md">        
        <Explore /> 
      </div>
        
        <div className="container container-md"> 
        <ChooseUs />    
        </div>
        <div id="image-slider" className="">
          {
            destinations.map((destinations) => {
              return (
                <div key={ destinations.id }>
                  <div className="sliderT">
                    <img src={ destinations.image } alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="container container-md"> 
        <div id="clients">
          <div className="text-center">  
            <h2 className="py-5">What Clients say</h2>   
              <div id="carousel">  
                <Carousel itemsToShow={1} showArrows={false}>
                  {
                    testimony.map((testimony) => {
                      return (
                          <div key={ testimony.id }>
                            <img className="py-3" src={ testimony.image } alt="" />
                            <p>{ testimony.text }</p>
                            <h2>{ testimony.name }</h2>
                            <h5>{ testimony.location }</h5>
                          </div>
                      )
                    })
                  }
                </Carousel>                 
              </div>                   
          </div>
        </div>
        <div id="blog" className="pb-5 my-5">
          <img style={{ marginLeft: "2rem" }} className="position-absolute" src={camera} alt="" />
          <img id="path13" className="img-fluid mt-5 position-absolute" src={path13} alt="" />
          <div id="checkOut" className="my-5 py-5">            
            <h1>checkout our <span className="style-orange">blog</span></h1>
          </div>
          
          <div id="blogPosts" className="m-auto d-flex flex-column flex-sm-row justify-content-between">
              {                
                blog.map((blog) => {
                  return (    
                    <div className="cardT" key={ blog.id }>                      
                        <img className="img-fluid" src={blog.image} alt="" />
                          <h3>{ blog.title }</h3>
                          <h3>{ blog.title_sub }</h3>
                          <h4 className="text-right">{ blog.date }</h4>                      
                    </div>
                  )})
              }
              </div>
          <img style={{ marginLeft: "3rem", marginTop: "2rem" }} className="position-absolute" src={plane} alt="" />
        </div>
        <Footer />
        <ScrollButton />
      </div>      
    </div>
  );
}

export default App;
