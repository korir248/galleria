export const addPost = (post)=>{
    const {selectedImage,description} = post
    delete selectedImage.lastModifiedDate
    console.log(selectedImage);



    let image = URL.createObjectURL(selectedImage)
    console.log(image)


    sessionStorage.setItem("posts", JSON.stringify(post))

    return {
        type: "ADD_POST",
        payload: {
            image,
            description
        }       
        
    }
}