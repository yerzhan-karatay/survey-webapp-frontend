import conf from '../config';

export const Logout = () => {
  localStorage.removeItem(conf.TOKEN);
  // @ts-ignore
  window.location = '/login';
};
