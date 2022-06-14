import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

const Login = () => {
    const dispatch = useDispatch()

    
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()

        setFormData({...formData,[e.target.name]: e.target.value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData);
        dispatch(loginUser(formData))

        
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
    <label>Username</label>
    <input name="username" placeholder="Enter Username" required onChange={handleChange}/>
    
    <label>Password</label>
    <input name="password" placeholder='Enter password'required onChange={handleChange} />

    
    <input type="submit" value='Login'/>
    <p>Don't have an account? <a href='/signup'>Sign up</a></p>

    </form>
    </>
  )
}

export default Login