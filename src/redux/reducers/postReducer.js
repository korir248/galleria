const initialState ={
  posts : [{
    image: 'src/assets/Vader.jpeg',
    description: 'darth Vader'
  },
{
  image: "src/assets/Meruem-Specialist-Featured.jpg",
  description: "King Meruem"
}]

}
const postReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_POST":
    sessionStorage.setItem("posts",state.posts)

    console.log(sessionStorage.getItem("posts"))


    return { ...state, posts: [...state.posts, payload] }

  default:
    return state
  }
}

export default postReducer
