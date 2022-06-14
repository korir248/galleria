export const addPost = (post)=>{
    const {file,description} = post
    const freader = new FileReader()

    return {
        type: "ADD_POST",
        payload: {
            file,
            description
        }       
        
    }
}