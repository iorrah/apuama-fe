const api = {
  host: '',
  path: '/api/gallery',
};

if (process.env.NODE_ENV === 'development') {
  api.host = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'production') {
  api.host = 'http://iorrah.com/apuma-be';
}

api.url = `${api.host}${api.path}`;

export default api;