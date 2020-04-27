import axios from 'axios';
const API_URL = 'http://localhost'

class NewsDataService {

    retrieveAllNews() {
        return axios.get(`${API_URL}/news`);
    }
}

export default new NewsDataService()