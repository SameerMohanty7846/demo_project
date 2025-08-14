import React, { useState } from 'react'

const Form9 = () => {
  const[formData,setFormData]=useState({
    username:'',
    email:'',
    phone:'',
    salary:'',
    dateofjoining:'',
    employeetype:'Fresher',
    experience:'0'

  })

  const handleChange=(e)=>{
      const{name,value}=e.target;
      if(name==="employeetype"){
       const ExperienceValue=  (value==="Fresher" )? 0:formData.experience;
       setFormData((prev)=>({
        ...prev,
        [name]:value,
        experience:ExperienceValue
       }))
      }else{
        setFormData((prev)=>({
            ...prev,
            [name]:value

        }))
      }

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }


  return (
    <div>
       <form onSubmit={handleSubmit}>
         <div>
            <input 
            type="text"
            placeholder='Enter Your Name'
            name='username'
            value={formData.username}
            onChange={handleChange}
            />
        </div>

        <div>
            <input
             type="text"
             placeholder='Enter Your Email'
             name='email'
             value={formData.email}
             onChange={handleChange}
             />
        </div>
        <div>
            <input 
            type="text"
            placeholder='Enter Your Phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            />

        </div>
        <div>
            <input 
            type="text"
            placeholder='Enter Your Salary'
            name='salary'
            value={formData.salary}
            onChange={handleChange}
            />
        </div>
        <div>
            <input 
            type="date"
            placeholder='Enter Your Date Of Joining'
            name='dateofjoining'
            value={formData.dateofjoining}
            onChange={handleChange}
            />
        </div>
        <div>
            <h5>Employee Type</h5>
            <select name="employeetype" value={formData.employeetype} onChange={handleChange}>
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>

            </select>
        </div>
        {
        formData.employeetype==="Experienced" &&(
            <div>
                <input type="text"
                 placeholder='Enter Number of Years of Experience'
                 value={formData.experience}
                 name='experience'
                 onChange={handleChange}
                 />
            </div>
        )
              
        }

        <div>
            <button type='submit'>SUBMIT</button>
        </div>
       </form>


      
    </div>
  )
}

export default Form9
