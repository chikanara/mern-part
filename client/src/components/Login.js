import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../js/action/authAction'
import { Alert } from 'react-bootstrap'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isAuth,isLoading,error}= useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login({email,password}))
    }
    return (
        <div>
            {   isLoading ? <h1>Loading ...</h1> : isAuth ? <Redirect to="/profile"/> : 
                <form action="" className='col-md-7 mx-auto' onSubmit={handleLogin}>
             {error && error.id ==="login"  &&   <Alert variant="danger">{error.msg.err}</Alert>}
                <h1>Login</h1>
                <label htmlFor="">Email</label>
                <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                <button className="btn btn-sm btn-primary" type="submit">Login</button>
                <Link to="/register">register here</Link>
            </form>
            }
        </div>
    )
}

export default Login
