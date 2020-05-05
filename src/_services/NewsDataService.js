import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'

class NewsDataService {

    retrieveAllNews() {
        return axios.get(`${API_URL}/news`, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}

export default new NewsDataService()