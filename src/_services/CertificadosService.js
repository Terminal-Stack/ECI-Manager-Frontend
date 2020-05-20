import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'

class CertificadosService{
    retrieveAllProducts() {
        return axios.get(`${API_URL}/products`, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
    retrieveCertificado() {
        return axios.get(`${API_URL}/products/certEstudiantil`, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}
export default new CertificadosService()
