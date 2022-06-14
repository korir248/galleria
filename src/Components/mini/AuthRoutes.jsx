import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import CreatePost from './CreatePost'

const AuthRoutes = () => {
  return (<>
  <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
  </Routes>
  </>
  )
}

export default AuthRoutes