import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navigation = () => {
    const [navbar, setNavbar] = useState(false)
    const changeNavBg = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 500) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
      useEffect(() => {
        changeNavBg()
        window.addEventListener("scroll", changeNavBg)
      },[])
  return (
    <div className='row navigationb'>
        <Navbar className={navbar ? "navbarT active" : "navbarT"} collapseOnSelect expand="sm" bg="inherit fixed-top">
            <NavLink as={Link} to="/"><span className='navbarbrandb'><span className='style-orange'>Go</span>Tour</span></NavLink>
                <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="#navbarScroll" />
                <Navbar.Collapse id='navbarScroll'>
                    <form className="d-none d-lg-flex mx-auto">
                        <i className="bi bi-search position-absolute pt-2 pl-3"></i>
                        <input className="form-control mx-auto bg-inherit rounded-pill px-5" type="search" placeholder="Search..." aria-label="Search" />                        
                    </form>
                    <Nav className='nav ml-auto align-items-center'>                     
                        <NavLink as={Link} to="/" className='px-2'><span className='style-orange fw-bold'>Home</span></NavLink> 
                        <NavLink as={Link} to="/" className='px-4'>About</NavLink> 
                        <NavLink as={Link} to="/" className='px-3'>Contact</NavLink> 
                        <NavLink as={Link} to="/" className='px-3'>Blog</NavLink>
                        <NavLink as={Link} to="/"><button className='btn bg-inherit text-light border border-2'>Login</button></NavLink> 
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Navigation