import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'


class TuitionsDataService {

    retrieveTuition(e){
        return axios.get(`${API_URL}/tuitions/`+ e, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}

export default new TuitionsDataService()