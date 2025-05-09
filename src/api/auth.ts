import api from './axios'

 const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

 const refreshToken = () => {
  return api.post('/auth/refresh-token');
};

 const getProfile = () => {
  return api.get('/auth/profile'); 
};

export {login, refreshToken, getProfile}