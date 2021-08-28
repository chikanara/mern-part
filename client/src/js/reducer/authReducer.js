import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "../const"


const intialState = {
    isLoading:null,
    user:null,
    error:null,
    token:null,
    isAuth:null
}
const authReducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case LOGIN_USER:
        case REGISTER_USER:
        case GET_PROFILE:
            return {...state,isLoading:true}
        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            return {...state,isLoading:false,user:payload.user,token:payload.token,isAuth:true}
        case GET_PROFILE_SUCCESS:
            return {...state,isLoading:false,isAuth:false,user:payload}
        
        case LOGIN_USER_FAIL:
        case REGISTER_USER_FAIL:
        case GET_PROFILE_FAIL:
            return {...state,error:payload,isLoading:false}

        case LOGOUT:
            return {...state,token:null,user:null,isAuth:false,isLoading:false}
            
          
    
        default:
            return state;
    }
}
 
export default authReducer;