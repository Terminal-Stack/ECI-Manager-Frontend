import axios from 'axios';
const API_URL = 'https://eci-manager-backend.herokuapp.com/'

class NewsDataService {

    retrieveAllNews() {
        return axios.get(`${API_URL}/news`);
    }
}

export default new NewsDataService()