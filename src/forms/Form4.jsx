import React, { useState } from 'react'

const Form4 = () => {
   const[name,setName]=useState('')
   const[email,setemail]=useState('')
   const[phone,setPhone]=useState('')
   const[message,setMessage]=useState('')

   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(`${name} ${email} ${phone} ${message}  `)


      setMessage('')
      setemail('')
      setPhone('')
      setMessage('')

   }


  return (
    <div>
      <h5>Form 4</h5>
      <div style={{width:"50%",border:'1px solid black',margin:'20px',padding:'20px'}}>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                  type="text"
                  placeholder='Enter Name'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />

            </div>
            <div>
                <input type="text"
                 placeholder='Enter Email'
                 value={email}
                 onChange={(e)=>setemail(e.target.value)}
                />

            </div>
            <div>
                <input type="text"
                placeholder='Enter Phone'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />

            </div>
            <div>
                <input type="text"
                placeholder='Enter Message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />

            </div>
            <div>
                <button type='submit'> SUBMIT</button>
            </div>
        </form>

        

      </div>

      <div style={{width:"50%",border:'1px solid black',margin:'20px',padding:'20px'}}>
        <ul>
            <li>NAME:{name}</li>
            <li>Email:{email}</li>
            <li>Phone:{phone}</li>
            <li>Message:{message}</li>
        </ul>
        

      </div>
    </div>
  )
}

export default Form4
