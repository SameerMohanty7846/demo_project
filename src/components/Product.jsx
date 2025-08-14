import React from 'react'

const Product = ({name,price,stock}) => {
  return (
    <div style={{
       backgroundColor:"red",
       width:"30%",
       margin:"50px",
       padding:"10px",
       
      
    }}>
       <h1 style={{
        textAlign:"center"
          


       }} >Product Information</h1>
       <ul>
         <li>Product Name:-{name}</li>
         <li>Product Price:-{price}</li>
         {
          stock==true &&
                    <li>Product Available</li>

         }
       </ul>
     
    </div>
  )
}

export default Product
