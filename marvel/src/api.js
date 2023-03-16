import axios from 'axios';

const api = axios.create({
    baseURL:'https://marvel-requests.onrender.com'
});

export default api;