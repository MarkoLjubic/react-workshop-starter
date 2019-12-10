import Axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

class Http {
    async get(path) {
        const requestUrl = baseUrl + path
        const { data } = await Axios.get(requestUrl)
        return data
    }
}

const http = new Http()

export default http
