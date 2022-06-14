import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'

const  store = configureStore({
    reducer : {
        post: postReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false
    })

})

export default store