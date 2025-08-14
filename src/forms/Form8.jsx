import React, { useState } from 'react'

const Form8 = () => {
  const[formData,setFormData]=useState({
    username:'',
    email:'',
    employeeType:'',
    experience:'0'
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    if(name===formData.employeeType){
        setFormData((prev)=>({
            ...prev,
            [name]:value,
            
        }))

    }else{

    }
    


  }

  return (
    <div>
        <div>
            <input 
            type="text"
            placeholder='Enter User name'
            value={formData.username}
            name='username'

            />

        </div>
            

         <div>
             <input
              type="text"
              placeholder='Enter Email'
              value={formData.email}
              name='email'
              />
            
        </div>
         <div>
            <h4>Select Employee Type</h4>
            <select name="employeeType" value={formData.employeeType} >
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
            </select>
            
        </div>

         <div>
            {(formData.employeeType==="Experienced") &&
            <input
             type="text" 
             placeholder='Enter Your Experience'
             name='experience'
             value={formData.experience}
             />
             


            }
            
         </div>

      
    </div>
  )
}

export default Form8
