const initialState ={
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {},
    users: sessionStorage.getItem("users") ? JSON.parse(sessionStorage.getItem("users")) : []

}
const userReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case "LOGIN":
    return { ...state, user: payload }
  case "SIGNUP":
    return {
      ...state,user: payload
    }

  default:
    return state
  }
}

export default userReducer

