import React, { useState } from 'react'

const Form3 = () => {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[city,setCity]=useState('')

   const handleNameChange=(e)=>{
    setName(e.target.value)

   }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    
   }
    const handlePhoneChange=(e)=>{
       setPhone(e.target.value)
   }
    const handleCityChange=(e)=>{
       setCity(e.target.value)
   }
   const handleSubmit=(e)=>{
     e.preventDefault();
     const data=`name:- ${name} Email:-${email} Phone:-${phone} city:${city} `
     alert(data)
   }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input
                 type="text"
                 placeholder='Enter Name'
                 value={name}
                 onChange={handleNameChange}
                 />

            </div>
            <div>
              <input 
                type="text"
                placeholder='Enter Email'
                value={email}
                onChange={handleEmailChange}
              />

            </div>

            <div>
                <input 
                type="text"
                placeholder='Enter Your Phone'
                value={phone}
                onChange={handlePhoneChange}
                />

            </div>
            <div>
                <input
                 type="text"
                 placeholder='Enter Your City'
                 value={city}
                 onChange={handleCityChange}
                 />

            </div>
             <div>
                <button type='submit'>SUBMIT</button>
            </div>


        </form>

      </div>
      <div>
        <h4>Data Submitted</h4>
        <ul>
            <li>Name:{name}</li>
            <li>Email:{email}</li>
            <li>Phone:{phone}</li>
            <li>City:{city}</li>
        </ul>


      </div>
    </div>
  )
}

export default Form3
