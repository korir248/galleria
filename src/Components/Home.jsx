import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from './CreatePost'
import Posts from './Posts'

const Home = () => {
  const { user}= useSelector(state=> state.user)
  console.log(user.isEmpty);
  return (<>
    {
      Object.keys(user).length > 0 ? (
        <>
    <div>Home</div>    
    
    <Posts/>

        </>

      ): <>

      <p className="error">No posts at the moment </p>
      <CreatePost/>
      
      </>
    }

  

  </>
  )
}

export default Home