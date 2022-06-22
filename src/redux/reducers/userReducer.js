const initialState ={
    user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {},
    users: sessionStorage.getItem("users") ? JSON.parse(sessionStorage.getItem("users")) : []

}
const userReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case "LOGOUT":
    return {
      ...state, user: {}
    }

  case "LOGIN":
    const newuser = state.users?.find(user=>user.username===payload.username)
    if(!newuser){
      sessionStorage.setItem("user",JSON.stringify(payload))

      return { ...state, user: newuser }

    }
    return {
      ...state
    }

  
  case "SIGNUP":
    const specUser = state.users?.find(user=>user.username===payload.username)

    const existingUser = state.users.find(user=> user.username === specUser.username)
    if(existingUser){
      return {
        ...state
      }
    }else{
      return {
        ...state,user: payload,users: [...state.users, specUser]
      }

    } 

  default:
    return state
  }
}

export default userReducer

