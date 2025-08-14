import React, { useState } from 'react'

const Form5 = () => {
    const [formData, setFormData] = useState(
        {
            name: '',
            password: ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        })



        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = `${formData.name} ${formData.password}`;
        console.log(data);
    };




    return (
        <div>
            <div style={{ width: '30%', border: '3px solid black', margin: '20px', padding: '5px' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder='enter name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />

                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder='Enter password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                        />

                    </div>
                    <div>
                        <button type='submit' >SUBMIT</button>

                    </div>
                </form>

            </div>
            <div style={{ width: '30%', border: '3px solid black', margin: '20px', padding: '5px' }}>
                <ul>
                    <li>Name:-{formData.name}</li>
                    <li>Password:{formData.password}</li>
                </ul>

            </div>
        </div>
    )
}

export default Form5
