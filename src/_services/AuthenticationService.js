import axios from 'axios'
const API_URL = 'https://eci-manager-backend.herokuapp.com'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN_SESSION_ATTRIBUTE_NAME = 'token'

class AuthenticationService {

    executeAuthenticationService(email, password) {
        return axios.post(`${API_URL}/authenticate`, {
            email,
            password
        })
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        sessionStorage.setItem(TOKEN_SESSION_ATTRIBUTE_NAME, this.createJwtToken(token))
        // this.setupAxiosInterceptors(this.createJwtToken(token))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(TOKEN_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()