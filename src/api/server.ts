const TEMP_TOKEN = '271a7ae691a30d23f737a69bd4be5597e116f77338e9e3be'
const baseUrlHome = 'http://127.0.0.1:5000/api'

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

        console.log(response.json())
        return await response.json()
    }
}
