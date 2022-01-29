const BASE_URL = "https://api.nomoreparties.co";

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res;
};

const getMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/beatfilm-movies`);
    const movies = await getResponseData(res);

    return movies.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

export { BASE_URL, getMovies };
