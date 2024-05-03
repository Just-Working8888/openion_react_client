import axios from 'axios';
import auth from './auth';
import quetions from './quetions'
import news from './news'

const instance = axios.create({
  // @ts-ignore
  baseURL: window.REACT_APP_SERVER_API !== 'REPLACE_REACT_APP_SERVER_API' ? window.REACT_APP_SERVER_API : process.env.REACT_APP_SERVER_API || 'http://localhost:7002',
  // headers: {
  //   Authorization: `Bearer ${getCookie('access_token')}`
  // }


})
//@ts-ignore
console.log(process.env.REACT_APP_SERVER_API, window.REACT_APP_SERVER_API);


// instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const kc_access = getCookie('kc-access') || 'test_token';
//   if (kc_access) config.headers!['kc-access'] = kc_access;
//   return config
// });





const api = {
  ...auth,
  ...quetions,
  ...news
}

export { instance, api };

