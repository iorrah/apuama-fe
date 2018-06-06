const api = {
  host: '',
  path: '/api/gallery',
};

if (process.env.NODE_ENV === 'development') {
  api.host = 'http://localhost:3000';
} else {
  api.host = 'http://iorrah.com/apuama-be/api';
}

api.url = `${api.host}${api.path}`;

export default api;