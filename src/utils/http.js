import axios from 'axios';

const config = {
  baseURL: '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
};

const instance = axios.create(config);

instance.interceptors.request.use((req) => {
  return req;
});
instance.interceptors.response.use((res) => {
  return res.data.data;
});

export default instance;
