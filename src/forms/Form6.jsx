import React, { useState } from 'react'

const Form6 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }

        ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />


                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder='Enter Phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="text"
                            placeholder='Enter Message'

                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type='submit'>SUBMIT</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form6
