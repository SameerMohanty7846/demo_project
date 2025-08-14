import React, { useState } from 'react'

const Form7 = () => {
  const[formData,setFormData]=useState({
    username:'',
    email:'',
    phone:'',
    salary:'',
    dateOfJoining:''
  })

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value
    }

    ))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    setFormData({
    username:'',
    email:'',
    phone:'',
    salary:'',
    dateOfJoining:''
  })
  }










  return (
    <div style={{ width: "400px", margin: "0 auto", textAlign: "center" }}>
      <h1>Add Employee Form</h1>
      <form onSubmit={handleSubmit}>
       <div>
          <input type="text"
           placeholder='Enter Employee Name'
           name='username'
           value={formData.username}
           onChange={handleChange}
           />
       </div>
       <div>
          <input type="text"
           placeholder='Enter Employee Email'
           name='email'
           value={formData.email}
           onChange={handleChange}
           />
       </div>
       <div>
         <input type="text"
          placeholder='Enter Employee Phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          />
       </div>
       <div>
         <input type="text"
          placeholder='Enter Employee Salary'
          name='salary'
          value={formData.salary}
          onChange={handleChange}
         />
       </div>
       <div>
         <input type="date"
          placeholder='Date Of Joining'
          name='dateOfJoining'
          value={formData.dateOfJoining}
          onChange={handleChange} />
       </div>
       <div>
         {/* dropdowns and Dynamic Employee Expereince */}
       </div>
       <div>
         <button type='submit'>SUBMIT</button>
       </div>

      </form>
    </div>
  )
}

export default Form7
