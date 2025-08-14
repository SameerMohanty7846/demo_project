import React, { useState } from 'react'

const Header1 = () => {
  const data=['HOME','CONTACT','PAGES','ABOUT']

  const[options,setOptions]=useState(data)
  const[info,setInfo]=useState("WELCOME");

  return (
    <div>
        <header style={{
            width:"100%",
            height:"60px",
            backgroundColor:"red",
        }}>

            <ul 
              style={{
                display:"flex",
                listStyleType:"none",
                justifyContent:"center",
                gap:"50px",
                padding:"20px"
                ,
              }}
               >
               {
                options.map((data)=>(
                    <li onClick={()=>setInfo('Thank you')} >{data}</li>
                ))
               }
                <h1>
                {
                    info
                }
            </h1>
            </ul>
           

        </header>
      
    </div>
  )
}

export default Header1
