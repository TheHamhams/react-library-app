// const TEMP_TOKEN = '271a7ae691a30d23f737a69bd4be5597e116f77338e9e3be'
const baseUrlHome = 'https://hamren-library-api.herokuapp.com/api'
const baseUrlTest = 'http://127.0.0.1:5000/api'
const SECRET_KEY = 'CodingTemple'

export const user_calls = {
    get: async (data: any={}) => {  
        const response = await fetch(`${baseUrlHome}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to login')
        }

    
        return await response.json()
    }
}

export const book_calls = {
    get: async () => {
        const response = await fetch(`${baseUrlTest}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('failed to fetch books from server')
        }

        return await response.json()
    },

    update: async(data: {}) => {
        const response = await fetch(`${baseUrlTest}/books/checkout`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${SECRET_KEY}`
            },
            body: JSON.stringify(data)
        })
        console.log(SECRET_KEY)
        return await response.json()
    } 
}