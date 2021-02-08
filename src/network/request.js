import axios from 'axios';

const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
    axios.defaults.baseURL = "http://119.23.53.78:8888/api/private/v1/login?username=admin&password=123456"
    Vue.prototype.$http = axios
}

export default MyHttpServer