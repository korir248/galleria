const initialState ={
  posts : [{
    file: 'some path',
    description: 'some image'
  }]

}
const postReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_POST":
    return { ...state, posts: [...state.posts, payload] }

  default:
    return state
  }
}

export default postReducer
