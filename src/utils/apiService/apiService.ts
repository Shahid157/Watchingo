import axios from 'axios';
import AppConfig from '../config';

export const imageBase = 'https://image.tmdb.org/t/p/w500/';

export const APIHANDLER = async (
  method: string,
  route: string,
  baseURL?: string,
) => {
  const config = AppConfig();
  return await axios({
    method,
    url: baseURL
      ? baseURL + `${route}` + '&api_key=' + config?.api_key
      : config?.apiURL + `${route}` + '?api_key=' + config?.api_key,
  }).catch(error => {
    return error;
  });
};
