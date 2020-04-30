import axios from 'axios';
const API_URL = 'https://eci-manager-backend.herokuapp.com/'

class GradesDataService {

    retrieveAllGrades(e) {
        return axios.get(`${API_URL}grades/` +
            e);
    }
    retrieveStudent(e){
        return axios.get(`${API_URL}students/`+e);
    }
}

export default new GradesDataService()