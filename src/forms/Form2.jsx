import React, { useState } from 'react'

const Form2 = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`name ${name} password ${password}`)

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder='Enter Your Name'
                                value={name}
                                onChange={handleNameChange}
                            />

                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder='Enter Your Password'
                                value={password}
                                onChange={handlePasswordChange}

                            />
                        </div>

                        <div>
                            <button type='submit' >SUBMIT</button>
                        </div>
                    </div>



                </form>
            </div>

            <div>
                <h3>Data</h3>
                <ul>
                    <li>Name:{name}</li>
                    <li>Password:{password}</li>
                </ul>

            </div>

        </div>
    )
}

export default Form2
