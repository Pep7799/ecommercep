import React from 'react'

import data2 from '../data2'


export const Ladies = (product) => {
 

  
    return (
      <>
      
     <div className='all2' id='ladies'>
        <p className='productcontainer2'>Ladies collections</p>
      {data2.map((product, id) => (
        <div className='card' key={product.id}>
          <img src={`./pimages2/${product.image}`} alt={product.title} width="200" height="400" className="image1" />
                <p className='title1'> {`${product.title}`} </p>
                <p className='line'> {`${product.price}`}</p> 
                <div className='btnbtn'>
                <button onClick = {() => alert('Added to cart. In progress...')}  className='btn'>Add to cart</button>
                </div>

        </div>
      ))}

     </div>   
     
     </>   
    )
}  
      
