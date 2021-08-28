import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile } from '../js/action/authAction'
const Profile = () => {
    const {isAuth,isLoading,user}= useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getProfile())
    }, [])
    return (
        <div>
           {
               isLoading ? <h1>Loading ...</h1> : !isAuth ? <Redirect to="/login"/> :
               <div>
                   <h1>Profile</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
               </div>
           }
        </div>
    )
}

export default Profile
