import React, {useState, useEffect} from 'react'
import { book_calls } from '../api'

export const useGetBooksData = () => {
    const [booksData, setData] = useState<[]>([])
  
    async function handleDataFetch() {
      const result = await book_calls.get()
      setData(result)
    }

    useEffect( () => {
      handleDataFetch()
    }, [])

    return {booksData, getData:handleDataFetch}
}
