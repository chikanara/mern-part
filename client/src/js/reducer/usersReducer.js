import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from "../const";

const intialState = {
    isLoading:null,
    users:[],
    error:null
}
const userReducer = (state=intialState,{type,payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state,isLoading:true}
        case GET_USERS_SUCCESS:
            return {...state,isLoading:false,users:payload}
        case GET_USERS_FAIL:
            return {...state,isLoading:false,error:payload}
            
          
    
        default:
            return state;
    }
}
 
export default userReducer;