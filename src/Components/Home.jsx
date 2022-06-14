import React from 'react'
import { useSelector } from 'react-redux'
import Posts from './mini/Posts'

const Home = () => {
  const { user}= useSelector(state=> state.user)
  console.log(user);
  return (<>   
    <Posts/>  

  </>
  )
}

export default Home