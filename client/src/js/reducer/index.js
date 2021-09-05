import {combineReducers} from "redux"
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import productReducer from "./¨productReducer"
const rootReducer = combineReducers({authReducer,userReducer,productReducer})

export default rootReducer