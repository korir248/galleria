export const loginUser = (user) => {
    const {username,password} = user
    console.log(username,password);
    let users = sessionStorage.getItem("users")

    users.find(user=> user.username === username)

    return {
        type: "LOGIN",
        payload: user
    }
}

export const signupUser = (user) => {

    sessionStorage.clear()

    let users = sessionStorage.setItem("users",[])
    
    // users.push(user)
    // JSON.parse(sessionStorage.getItem("users"))
    console.log(users)

    return {
        type: "SIGNUP",
        payload: user
    }
}
