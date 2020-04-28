const urlGetMovies = 'https://randomuser.me/api';

function* getMoviesFormApi() {
  console.log('getMoviesFormApi');
  const response = yield fetch(urlGetMovies, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '',
  });
  console.log('AAAA');
  console.log('JSON' + JSON.stringify(response));
  const movies = yield response.status === 200
    ? JSON.parse(response._bodyInit)
    : [];
  console.log('JSON' + JSON.stringify(movies));
  return movies;
}

export const Api = {
  getMoviesFormApi,
};
