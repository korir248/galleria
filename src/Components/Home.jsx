import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from './CreatePost'
import Posts from './Posts'

const Home = () => {
  const { user}= useSelector(state=> state.user)
  console.log(user);
  return (<>
   
    <Posts/>

  

  </>
  )
}

export default Home