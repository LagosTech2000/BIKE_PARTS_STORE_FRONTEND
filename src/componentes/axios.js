import axios from "axios"; //Importar axios

const Axios = axios.create({
    baseURL: 'http://192.168.43.23:4005/api',
    timeout: 7000,
    headers: {'Content-Type': 'application/json'}
});

export default Axios;
