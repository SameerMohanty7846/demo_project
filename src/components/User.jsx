import React from 'react'
import './User.css'
const User = ({id,name,age,city}) => {
  return (
    <div>
        <div className='userDiv'>
            <h2>Name:{name}</h2>
            <h3>id:{id}</h3>
            <h3>age:{age}</h3>
            <h3>city:{city}</h3>
        </div>
      
    </div>
  )
}

export default User
