import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://agenciawebsorocaba.com.br/equipe_sa/api/v1/'
});

export default instance;