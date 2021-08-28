import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../js/action/authAction'
import { Alert } from 'react-bootstrap'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()
    const {isAuth,isLoading,error}= useSelector(state => state.authReducer)
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register({name,lastName,password,email}))

    }
    return (
        <div>
           {
               isLoading ? <h1>loading ....</h1> : isAuth ? <Redirect to="/profile"/> :
               <form action="" className='col-md-7 mx-auto' onSubmit={handleRegister}>
                 {error && error.id ==="register"  &&   <Alert variant="danger">{error.msg.err}</Alert>}
                 <h1>Register</h1>
               <label htmlFor="">Name</label>
               <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
               <label htmlFor="">Last Name</label>
               <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} value={lastName} />
               <label htmlFor="">Email</label>
               <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
               <label htmlFor="">Password</label>
               <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
               
            
               <button className="btn btn-sm btn-primary" type="submit">Register</button>
           </form>
           }
        </div>
    )
}

export default Register
