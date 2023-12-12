import React, { useState } from 'react'

interface formData {
    name: string
    email: string
    phone: string
    city: string
    password: string

}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        phone: '',
        city: '',
        password: ''
    })
    const handleChange = (e: any): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Register</h1>
            <form className='main-form' onSubmit={() => alert("Form submitted successfully")}>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={(e) => handleChange(e)} value={formData.name} required />
                <br />

                <label htmlFor='phone'>Phone:</label>
                <input name='phone' type='text' onChange={(e) => handleChange(e)} value={formData.phone} required />
                <br />

                <label htmlFor='city'>City:</label>
                <input name='city' type='text' onChange={(e) => handleChange(e)} value={formData.city} required />
                <br />

                <label htmlFor='Email'>Email:</label>
                <input type='email' name='email' autoComplete='username' onChange={(e) => handleChange(e)} value={formData.email} required />
                <br />

                <label htmlFor='password'>Password:</label>
                <input name='password' type='password' autoComplete='current-password' onChange={(e) => handleChange(e)} value={formData.password} required />
                <br />

                <input id='submit' type='submit' />
            </form>
        </div>
    )
}


export default Register;