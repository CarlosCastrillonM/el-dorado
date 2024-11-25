import axios from 'axios';

export class AirlineService {
    baseUrl = "http://localhost:8080/api/v1/airline/";
    getAll() {
        return axios.get(this.baseUrl + "airlines").then(res => res.data);
    }
}