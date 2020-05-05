import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'

class GradesDataService {

    retrieveAllGrades(e) {
        return axios.get(`${API_URL}/grades/` + e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
    retrieveStudent(e){
        return axios.get(`${API_URL}/students/`+ e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}

export default new GradesDataService()