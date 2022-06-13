import React from 'react'
import { useState } from 'react'

const Login = () => {
    // const dispatch = useDispatch()

    
    const [formData, setFormData] = useState({})
    
    
    const handleChange = (e)=>{
        e.preventDefault()

        setFormData({...formData,[e.target.name]: e.target.value})

    }
    const loggingInUser =(e)=>{
        e.preventDefault()

        console.log("hi")
    }

  return (
    <>
        <p>Login Page</p>
        <div className="login-form">
            <label>Username</label>
            <input name="username" placeholder="Enter Username" onChange={handleChange} required/>

            <label >Password</label>
            <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} required/>

            <button  type="submit" onSubmit={()=> loggingInUser(formData)}>Login</button>
            {/* <i>Don't have an account? <Link to="/register">Sign up now!</Link></i><br/>
                    <i><Link to="/">Cancel</Link></i> */}
        </div>
    </>
  )
}

export default Login