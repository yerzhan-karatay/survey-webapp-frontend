import axios from 'axios';
import conf from '../config';

axios.interceptors.request.use(config => {
  const token = localStorage.getItem(conf.TOKEN);
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem(conf.TOKEN);
      if (window.location.pathname.includes('login')) {
        // @ts-ignore
        window.location = '/';
      }
      window.location.reload();
    }
    if (error.response.status === 403) {
      if (window.location.pathname.includes('login')) {
        // @ts-ignore
        window.location = '/';
      }
      window.location.reload();
    }

    return Promise.reject(error);
  },
);

export default axios;
