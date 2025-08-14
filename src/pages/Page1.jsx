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
        setFormData({
        username:'',
        phone:'',
        password:'',
        email:'',
        currentDate:'',
        time:'',
        color:''
    })
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
            <h3>Enter Current Date</h3>
            <input type="date"
              
              name='currentDate'
              value={formData.currentDate}
              onChange={handleChange}
            />
        </div>

        <div>
            <h3>Enter Current TIme</h3>
            <input type="time"
              name='time'
              value={formData.time}
              onChange={handleChange}
            />
        </div>

        <div>
            <h3>Select COlor</h3>
            <input type="color"
             name='color'
             value={formData.color}
             onChange={handleChange}
            />
        </div>

        <div>
            <button type='submit'>SUBMIT</button>
        </div>



      </form>
    </div>
  )
}

export default Page1
