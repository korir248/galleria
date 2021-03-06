import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()

        setFormData({...formData,[e.target.name]: e.target.value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData);
        dispatch(loginUser(formData,navigate))

        
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='login-form'>
    <label>Username</label>
    <input name="username" placeholder="Enter Username" required onChange={handleChange}/>
    
    <label>Password</label>
    <input name="password" placeholder='Enter password'required onChange={handleChange} />

    
    <input className='btn-submit' type="submit" value='Login'/>
    <p>Don't have an account? <a href='/signup'>Sign up</a></p>

    </form>
    </>
  )
}

export default Login