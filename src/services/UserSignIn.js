// UserSignIn.js
import axios from 'axios';

export class UserSignIn {
    baseUrl = "http://localhost:8080/auth/";

    async login(email, password) {
        try {
            const response = await axios.post(this.baseUrl + 'login', { email, password });
            const responseBody = response.data;
            console.log(responseBody);

            this.saveToken(responseBody.token);
            this.saveUserId(responseBody.userId);

            alert(JSON.stringify(responseBody));
        } catch (err) {
            console.log(err);
            if (err.response && err.response.status === 404) {
                if (err.response.data && err.response.data.description) {
                    throw err.response.data.description;
                }
            }
        }
    }

    isAuthenticated() {
        userId = window.localStorage.getItem("user-id");
        return userId != null;
    }

    saveToken(token) {
        window.localStorage.setItem('auth-token', token);
    }

    saveUserId(userId) {
        window.localStorage.setItem('user-id', userId);
    }
}
