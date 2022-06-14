import { configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'

const  store = configureStore({
    reducer : {
        post: postReducer,
        user: userReducer
    }

})

export default store