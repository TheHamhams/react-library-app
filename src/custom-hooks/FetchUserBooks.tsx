import React, {useState, useEffect} from 'react'
import { book_calls, user_calls } from '../api'
import { useAuth0 } from '@auth0/auth0-react'

export const useGetUserBooksData = () => {
    const [userBooksData, setData] = useState<[]>([])
    let {user} = useAuth0()
  
    async function handleDataFetch() {
      if (!user) {
        return null
      }
      const result = await user_calls.get(`${user.sub}`)
      setData(result)
    }

    useEffect( () => {
      handleDataFetch()
    }, [])

    return {userBooksData, getUserBookData:handleDataFetch}
}
