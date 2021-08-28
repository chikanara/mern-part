import axios from 'axios'
import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS } from '../const'

export const getUsers = () => async (dispatch) => {
      dispatch({type:GET_USERS})
      try {
          const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
          dispatch({type:GET_USERS_SUCCESS,payload:data})
      } catch (error) {
          dispatch({type:GET_USERS_FAIL,payload:error.response.data})
      }
}


// export const actionName = (payload) => ({
//     type: type,
//     payload
// })
