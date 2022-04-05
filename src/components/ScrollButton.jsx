import React from 'react'
import { useState } from 'react'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    window.addEventListener('scroll', toggleVisible);
  return (
    <div id="scrollUpButton">        
        <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="position-fixed py-3 px-3"><i className="bi bi-chevron-up"></i></button> 
    </div>
  )
}

export default ScrollButton