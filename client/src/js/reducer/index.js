import {combineReducers} from "redux"
import userReducer from "./usersReducer";
import authReducer from "./authReducer"
const rootReducer = combineReducers({authReducer,userReducer})

export default rootReducer