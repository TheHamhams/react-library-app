import React, {useState} from 'react'
import {user_calls} from '../../api'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector, useStore } from 'react-redux'
import Container from 'react-bootstrap/Container'
import {login, tryEmail, tryPassword} from '../../redux/slices/userSlice'
import { Input, Password } from '../SharedComponents'
import { Button } from 'react-bootstrap'
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'

interface historyProps {
  history: RouteComponentProps['history']
  location: RouteComponentProps['location']
  match: RouteComponentProps['match']
} 

interface LoginProps {
    email?: string
    data?: {}
}

interface LoginState {
    id: string
    email: string
    token: string
    first_name: string
    last_name: string
}

export const LoginForm = (props: LoginProps, histProps: historyProps) => {

  const dispatch = useDispatch()
  const store = useStore()
  const {history} = histProps
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const name = useSelector<LoginState>(state => state.id)
  const {register, handleSubmit} = useForm({})

  const onSubmit = (data:any, event:any) => {
    event.preventDefault()


    dispatch(tryEmail(data.email))
    dispatch(tryPassword(data.password))
    user_calls.get(store.getState())
    setTimeout( () => {<Redirect push to='/' />}, 2000)

  }

  return (
    <Container className='border'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')} name="email" placeholder='email'/>
            <Password {...register('password')} name="password" placeholder="Password"/>
            <Button type="submit" className='border'>Submit</Button>
        </form>
    </Container>
  )
}
