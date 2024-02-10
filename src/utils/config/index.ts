import {Colors} from '../colors';

function AppConfig() {
  return {
    environment: 'Test',
    appName: 'TestingApp',
    api_key: '74f64866bdd99256d5bfc8f2a4ce7462',
    apiURL: 'https://api.themoviedb.org/3/movie',
    baseURL: 'https://api.themoviedb.org',
    primaryColor: Colors.primaryColors,
    secondaryColor: Colors.secondaryColors,
    monochromeColors: Colors.monochromeColors,
  };
}
export default AppConfig;
