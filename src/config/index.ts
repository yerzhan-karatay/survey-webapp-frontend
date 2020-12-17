export interface AppConfig {
  API_URL: string;
  TOKEN: string;
}

let AppConfig: () => AppConfig;

if (process.env.REACT_APP_ENV === 'stg') {
  AppConfig = require('./config.stg').default;
} else if (process.env.REACT_APP_ENV === 'prod') {
  AppConfig = require('./config.prod').default;
} else {
  AppConfig = require('./config.local').default;
}

export default AppConfig();
