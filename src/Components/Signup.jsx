import React, { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e)=>{
        e.preventDefault()

        setFormData({...formData,[e.target.name]: e.target.value})

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formData);

    }

  return (<>

    <form onSubmit={handleSubmit}>
    
    <label>Fullname</label>              
    <input name="fullname" placeholder="Enter Fullname" required onChange={handleChange}/>
    <label>Username</label>
    <input name="username" placeholder="Enter Username" required onChange={handleChange}/>
    <label>Email</label>
    <input name="email" placeholder="Enter Email" required onChange={handleChange}/>
    <label>Password</label>
    <input name="password" placeholder='Enter password'required />
    <label>Confirm Password</label>
    
    <input type="submit" value='Signup'/>
    <p>Have an account? <a href='/login'>Log In</a></p>

    </form>
  </>
  )
}

export default Signup