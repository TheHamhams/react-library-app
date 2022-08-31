import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
// import userSlice from '../../redux/slices/userSlice'

interface UserState {
  user: {
    email: string
    token: string
  }
}

interface UserProps {
  email: string
  token: string
}

export const Profile = () => {
  const user = useSelector<UserState>((state) => state.user)

  return (
    <Container>
      <p>Email:</p>
      <p>First Name</p>
      <p>Last Name</p>
      <p>Token</p>
    </Container>
  )
}
