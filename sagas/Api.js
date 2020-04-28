const urlGetMovies = 'https://randomuser.me/api';

function* getMoviesFormApi() {
  try {
    const response = yield fetch(urlGetMovies, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: '',
    });
    const movies = yield response.json();
    return movies;
  } catch (e) {
    console.log(e);
  }
}

export const Api = {
  getMoviesFormApi,
};
