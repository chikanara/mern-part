import axios from "axios"
import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from "../const"

export const login = (user) => async(dispatch)  => {
    //user = {email,password}
    dispatch({type:LOGIN_USER})
    try {
        const {data} = await axios.post("/auth/login",user)
        dispatch({type:LOGIN_USER_SUCCESS,payload:data})
        localStorage.setItem("token",data.token)
    } catch (error) {
        dispatch({type:LOGIN_USER_FAIL,payload:{id:"login",msg:error.response.data}})
    }
    //{err:"hhhhhhhhhhh"}
}

export const register = (user) => async(dispatch) => {
    // user = {name,lastName,email,password}
    dispatch({type:REGISTER_USER})
    try {
        const {data} = await axios.post("/auth/register",user)
        dispatch({type:REGISTER_USER_SUCCESS,payload:data})
        localStorage.setItem("token",data.token)
    } catch (error) {
        dispatch({type:REGISTER_USER_FAIL,payload:{id:"register",msg:error.response.data}})
    }
}

export const getProfile = () => async(dispatch) => {
    dispatch({type:GET_PROFILE})
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers:{
                Authorization:token
            }
        }
        const {data} = await axios.get("/auth/current",config)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PROFILE_FAIL,payload:error.response.data})
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({type:LOGOUT})
}





