import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080'
// axios.defaults.headers.comment['Authorization'] = 'Token'
// axios.defaults.headers.post['Content-type'] = 'Application/urlencode'
// axios.defaults.headers.get['Accept'] = 'application/json'
})
export default instance
