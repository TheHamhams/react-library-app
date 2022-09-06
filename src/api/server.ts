const baseUrlHome = 'https://hamren-library-api.herokuapp.com/api'
// const baseUrlTest = 'http://127.0.0.1:5000/api'
const SECRET_KEY = 'CodingTemple'

export const user_calls = {

    get: async (id: string) => {
        const response = await fetch(`${baseUrlHome}/books/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error('failed to fetch user books from server')
        }

        return await response.json()
    },

    update: async(data: {}) => {
        const response = await fetch(`${baseUrlHome}/books/checkin`, {
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

export const book_calls = {
    get: async () => {
        const response = await fetch(`${baseUrlHome}/books`, {
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
        const response = await fetch(`${baseUrlHome}/books/checkout`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${SECRET_KEY}`
            },
            body: JSON.stringify(data)
        })

        return await response.json()
    } 
}