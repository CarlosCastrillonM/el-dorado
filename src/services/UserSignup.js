import axios from 'axios';

export class UserSignup {
    baseUrl = "http://localhost:8080/auth/";
    saveUser(user) {
        return axios.post(this.baseUrl + "signup", user, {headers: {"Access-Control-Allow-Origin": true }})
            .then(response => {
                console.log("Usuario registrado exitosamente:", response.data);
                return response.data;
            })
            .catch(error => {
                console.error("Error al registrar el usuario:", error.response?.data || error.message);
                throw error;
            });
    }
}