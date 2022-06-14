import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {

    const {posts} = useSelector(state=> state.post)
    console.log(posts);
  return (
    <>
    <div >Available Posts</div>
    <div className='posts'>

    {posts.map((post,ix)=>{

      
        return (
          <div key={ix} className='card'>
          <div className='portrait'>
            <img src={post.image} alt='not found'/>
          </div>
            <p>{post.description}</p>

          </div>
        )
    })}
    </div>

    </>
  )
}

export default Posts