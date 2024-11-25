import axios from 'axios';

export async function login(email, password) {
    try {

        const response = await axios.post('auth/login', { email, password })

        const responseBody = response.data
        console.log(responseBody)
        
        saveToken(responseBody.token)
        saveUserId(responseBody.userId)

        alert(JSON.stringify(responseBody))

    } catch (err) {
        if (err.response && err.response.status === 404) {
            if (err.response.data && err.response.data.description) {
                throw err.response.data.description
            }
        }
    }
}

function saveToken(token) {
    window.localStorage.setItem('auth-token', token)
}

function saveUserId(userId) {
    window.localStorage.setItem('user-id', userId)
}