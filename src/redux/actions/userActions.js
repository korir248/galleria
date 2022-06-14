export const loginUser = (user) => {
    
    return {
        type: "LOGIN",
        payload: user
    }
}

export const signupUser = (user) => {


    return {
        type: "SIGNUP",
        payload: user
    }
}
