import { cleanup } from "@testing-library/react"
import userReducer from "./redux/reducers/userReducer"

afterEach(()=>{
    cleanup()
})

test("should return initial state",()=>{


    expect(userReducer(undefined,{})).toEqual({
        user: {},
        users: []
    })

})

test("should add user to state during login",()=>{

    const initialState = {
        user: {},
        users: [{
            username: "Eugene",
            password: 123
        }]
    }
    const newState = {
            user: {
                username: "Eugene",
                password: 123
            },
            users: [{
                username: "Eugene",
                password: 123
            }],
    
        

    }

    const action = {
        type: "LOGIN",
        payload: {
            username: "Eugene",
            password: 123
        }
    }

    expect(userReducer(initialState,action)).toEqual(newState)
})