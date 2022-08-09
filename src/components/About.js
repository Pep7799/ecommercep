import React from 'react'

import bgvid from '../images/bgvid.mp4'
import { FaTruckMoving, FaLock, FaTeamspeak, FaCheckCircle } from 'react-icons/fa'

const About = () => {
  return (
    <div>
    
      <div className='container' id='about'>
        <video loop autoPlay muted>
            <source src= {bgvid} type = "video/mp4"/>
        </video>
    
      <div>
        <div className='overlay'>          
            <h1>ABOUT US</h1>            
        </div>

        <div className='overlaytext'>
          

          <div className='eachoverlaytext'>          
             <FaTruckMoving size={20} style={{ color: '#FF0000' }}/>
            <span>Fast delivery</span>
          </div>

          <div className='eachoverlaytext'>          
            <FaLock size={20} style={{ color: '#FF0000' }}/> 
            <span>Secure payment</span>
          </div>

          <div className='eachoverlaytext'>          
            <FaTeamspeak size={20} style={{ color: '#FF0000' }}/>
            <span>Customer service</span>
          </div>
          <div className='eachoverlaytext'>          
          <FaCheckCircle size={20} style={{ color: '#FF0000' }}/> 
            <span>Save records</span>
          </div>

        </div>

      </div>
     </div>  
      
    </div>
  )
}

export default About