import React from 'react'
import { GrMail } from 'react-icons/gr'
import { MdCall } from 'react-icons/md'


const Contact = () => {
  return (
    <div className='contactcontainer' id='contact'>
       <div className='row1'>
        <h5>Home</h5>
        <h5>Collections</h5>
        <h5>About</h5>        
        <h5>Contact us</h5>
       </div>
       
       <div className='row2'>
        <h3>Contact us at</h3>
        <h4><GrMail className='contacticon'/> support@dazzling.com</h4>
        <h4><MdCall className='contacticon2'/> +555-555-555-555-555</h4>
       </div>

       <div className='row3'>
        <h4>Follow us for news and updates</h4>
        <input className='contactform' type="text" />
        <br />
        <button className='submitcontact' type='submit'>Subscribe</button>
       </div>
       <footer className='footer'>
        
          Copyright © 2022 Created by Pep. All Rights Reserved
       
       </footer>
      
    </div>

    
  )
}

export default Contact