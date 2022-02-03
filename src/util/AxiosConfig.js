import axios from 'axios';

axios.defaults.baseURL = 'https://localhost:44320/'
axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}`}

export default axios;