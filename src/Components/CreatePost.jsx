import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'


const CreatePost = () => {
  const [post, setPost] = useState({})
  
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    e.preventDefault()
    
    setPost({...post,[e.target.name]: e.target.value})
    const files = e.target.files
    console.log(files[0])

  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(post)
    dispatch(addPost(post))


  }
  return (<>
    <div >
        <div className='create-post'>
        <form onSubmit={handleSubmit}>
    
    <label>File to upload</label>              
    <input name="file" type='file' required onChange={handleChange}/>
    <label>Description</label>
    <input name="description" placeholder="Enter description" required onChange={handleChange}/>
    
    
    <input type="submit" value='Create Post'/>

    </form>
        </div>
    </div>
    <a href='/'><button>Back to Posts</button></a>
  </>
  )
}

export default CreatePost