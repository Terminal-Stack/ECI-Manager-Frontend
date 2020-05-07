import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'

class PenaltyDataService {

    retrievePenaltyValue(e) {
        return axios.get(`${API_URL}/students/`+e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
    addPenalty(e){
        return axios.put(`${API_URL}/students/addPenalty/`+e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
    payPenalty(e){
        return axios.put(`${API_URL}/students/payPenalty/`+e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}

export default new PenaltyDataService()