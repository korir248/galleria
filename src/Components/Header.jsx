import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const {user} = useSelector(state=> state.user)
  
  return (
    <>
    <div className='header'>
    <a href='/'><div>Galleria</div></a>
    <div ><a href='/createpost'><button >Create Post</button></a></div>
    {
      !user.hasOwnProperty('username') ? (
        <>
    <div> <a href='/login'>Login</a></div>
    <div> <a href='/signup'>Signup</a></div>
    </>
        
      ): (
        <p></p>
      )
    }
    </div>
      
    </>
  )
}

export default Header