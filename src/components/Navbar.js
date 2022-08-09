import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../images/logo.png'
import { Link } from 'react-scroll/modules'
import { BsHandbagFill } from 'react-icons/bs'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

      return (
            <div className='header'>
               
            <nav className='navbar'>
               <h1><a href='/' id = "logo">
                <img src={logo} alt = "logo" width= "20px" height= "25px"/> Dazzling</a></h1> 
                <div className='close' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#000' }} />)
                        : (<FaBars size={20} style={{ color: '#000' }} />)}

                </div>
               
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                
                    <li className='each-item'>
                       <Link to="home" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
        
                   
                    <li className='major each-item'>
                        <Link to="men" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Collections</Link>

                         <div className='content'>
                            
                         <Link to="men" spy={true} smooth={true} offset={-30} duration={500}  onClick={closeMenu}>Men</Link>
                         <Link to="ladies" spy={true} smooth={true} offset={-30} duration={500}  onClick={closeMenu}>Ladies</Link>
                    
        
                         </div>
                    </li>
                    <li className='each-item'>
                        <Link to="about" spy={true} smooth={true} offset={-30} duration={600}  onClick={closeMenu}>About</Link>
                    </li>
        
                   
                    <li className='each-item'>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='each-item'>
                        <BsHandbagFill/> <sup>0</sup>
                    </li>

                     
                    </ul>  
                         
            </nav>
          </div>
          )
        }
        
        export default Navbar