import React, { useState } from 'react'

const Page1 = () => {
    const[formData,setFormData]=useState({
        username:'',
        phone:'',
        password:'',
        email:'',
        currentDate:'',
        time:'',
        color:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(JSON.stringify(formData))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <input type="text"
            placeholder='Enter Username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            />

        </div>

        <div>
            <input type="number"
             placeholder='Enter Phone'
             name='phone'
             value={formData.phone}
             onChange={handleChange}
            />

        </div>

        <div>
            <input type="password"
             placeholder='Enter Password'
             name='password'
             value={formData.password}
             onChange={handleChange}
            />
        </div>

        <div>
            <input type="text"
             placeholder='Enter Email'
             name='email'
             value={formData.email}
             onChange={handleChange}
            />
        </div>

        <div>
            <input type="text" />
        </div>



      </form>
    </div>
  )
}

export default Page1
