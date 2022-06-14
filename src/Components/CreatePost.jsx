import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/actions/postActions'


const CreatePost = () => {
  const [description, setDescription] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    e.preventDefault()
    
    setDescription(e.target.value)

  }
  const handleChange1=(e)=>{
    e.preventDefault()

    setSelectedImage(e.target.files[0])

  }

  const handleSubmit =(e)=>{
    e.preventDefault()

    const post = {
      selectedImage,
      description
    }
    sessionStorage.setItem('posts')
    dispatch(addPost(post))


  }
  return (<>
    <div >
        <div className='create-post'>
        <form onSubmit={handleSubmit}>
    
    <label>File to upload</label>              
    <input name="file" type='file' required onChange={handleChange1}/>
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