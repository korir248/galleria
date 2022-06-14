import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {

    const {posts} = useSelector(state=> state.post)
    console.log(posts);
  return (
    <>
    <div>Posts</div>
    {posts.map((post,ix)=>{
        return (
          <div key={ix}>
            <p>{post.file}</p>
            <img src={post.file} alt='img'/>
            <p>{post.description}</p>

          </div>
        )
    })}

    </>
  )
}

export default Posts