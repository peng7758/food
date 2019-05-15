import axios from 'axios'


const http = axios.create()



http.defaults.baseURL = '';
http.defaults.timeout = 10000;


http.interceptors.response.use(response =>{
    return response.data;
})



export default http