import { useState, useEffect } from "react"
import React from 'react'
import { user_calls } from "../api"

export const useUserGet = () => {
    const [userData, setData] = useState<[]>([])

    async function handleDataFetch() {
        const result = await user_calls.get()
        setData(result)
    } 

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {userData, getData:handleDataFetch}
}

