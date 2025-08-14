import React, { useState } from 'react'

const Form1 = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (e) => {
    setName(e.target.value)

  }
  const handlePassword = (e) => {
    setPassword(e.target.value)

  }
  const handleSubmit = (e) => {
          e.preventDefault();  
          alert(`name ${name} password ${password}`) 
          setName('Default Name')
          setPassword('Default Password') 


  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter Your Name'
          onChange={handleName}
          value={name}
        
        />


        <br /> <br /> <br />
        <small>{name}</small>
        <input type="text"
         placeholder='Enter Your Password'
         onChange={handlePassword}
         value={password}
         
         
         
         /> <br /> <br /> <br />
        <small>{password}</small>
        <button type='submit'>SUBMIT</button>



      </form>

    </div>
  )
}

export default Form1
