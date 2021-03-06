import axios from 'axios';
import { TOKEN_SESSION_ATTRIBUTE_NAME } from "./AuthenticationService";
const API_URL = 'https://eci-manager-backend.herokuapp.com'

class InvoiceDataService{

    retrieveAllInvoices() {
        return axios.get(`${API_URL}/invoices`, {
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
    postInvoice(e) {
        console.log(e);
        return axios.post(`${API_URL}/invoices`, e,{
            headers: {
                authorization: sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
            }
        });
    }
}

export default new InvoiceDataService()