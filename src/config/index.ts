export interface AppConfig {
  API_URL: string;
  TOKEN: string;
}

let AppConfig: () => AppConfig;

if (process.env.REACT_APP_ENV === 'local') {
  AppConfig = require('./config.local').default;
} else if (process.env.REACT_APP_ENV === 'prod') {
  AppConfig = require('./config.prod').default;
} else {
  AppConfig = require('./config.stg').default;
}

export default AppConfig();
