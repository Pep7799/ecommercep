import React from 'react'

import data1 from '../data1'




export const Men = (product) => {


  
  

  
    return (
      <>
   
         <div className='all'  id='men'>
            <p className='productcontainer'>Men Collections</p>
            {data1.map((product, id) => (
             <div className='card' key={product.id}>
             <img src={`./pimages/${product.image}`} alt={product.title} width="200" height="400" className="image1" />
                <p className='title1'> {`${product.title}`} </p>
                <p className='line'> {`${product.price}`} </p>
                <div className='btnbtn'>
                <button onClick = {() => alert('Added to cart. In progress...')} className='btn'>Add to cart</button>
                </div>
        </div>
      ))}

     </div> 
  
    
    
     </>   
    )
}  
      

           