export const loginUser = (user) => {
    const {username,password} = user
    console.log(username,password);
    let users = sessionStorage.getItem("users")

    users.filter(user=> user.username === username)

    return {
        type: "LOGIN",
        payload: user
    }
}

export const signupUser = (user) => {
    
    // users.push(user)
    // JSON.parse(sessionStorage.getItem("users"))
    console.log(user)

    return {
        type: "SIGNUP",
        payload: user
    }
}
