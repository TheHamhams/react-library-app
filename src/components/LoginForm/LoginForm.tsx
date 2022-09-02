// import React, {useState, forwardRef} from 'react'
import React from 'react'
import {user_calls} from '../../api'
import {useForm} from 'react-hook-form'
// import { useAuth, AuthCheck } from 'reactfire'
import { useDispatch, useStore } from 'react-redux'
import Container from 'react-bootstrap/Container'
import {login, logout} from '../../redux/slices/userSlice'
import { Input, Password } from '../SharedComponents'
import { Button } from 'react-bootstrap'
// import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'

// interface historyProps {
//   history: RouteComponentProps['history']
//   location: RouteComponentProps['location']
//   match: RouteComponentProps['match']
// } 

interface LoginProps {
    email?: string
    data?: {}
}

// interface LoginState {
//     id: string
//     email: string
//     token: string
//     first_name: string
//     last_name: string
// }


export const LoginForm = (props: LoginProps) => {

  const dispatch = useDispatch()
  const store = useStore()
  const {register, handleSubmit} = useForm({})

  const handleLogout = () => {
    dispatch(logout())
  }

  const onSubmit = (data:any, event:any) => {
    event.preventDefault()

    
    // let post = user_calls.get({"email": data.email, "password": data.password}) 

    // dispatch(login(post))
    console.log(store.getState())
    event.target.reset()

  }

  return (
    <Container className='border'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} name="email" placeholder='Email'/>
          <Password {...register('password')} name="password" placeholder="Password"/>
          <Button type="submit" className='border'>Submit</Button>
        </form>
        <Button onClick={handleLogout}>Logout</Button>
    </Container>
  )
}
