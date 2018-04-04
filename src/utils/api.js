const api = {
  host: '',
  path: '/api/gallery',
};

if (process.env.NODE_ENV === 'development') {
  api.host = 'http://localhost:3000';
} else {
  api.host = 'http://138.68.73.74';
}

api.url = `${api.host}${api.path}`;

export default api;