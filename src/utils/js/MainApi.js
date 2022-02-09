const BASE_URL = "https://api.movies-explorer-prod.nomoredomains.rocks";

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res);
  }
  return res;
};

const register = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const login = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const unlogin = async () => {
  try {
    const res = await fetch(`${BASE_URL}/signout`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const auth = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const editProfile = async (name, email) => {
  try {
    const res = await fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const getSavedMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movies`, {
      credentials: "include",
    });
    const movies = await getResponseData(res);

    return movies.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const saveMovie = async ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  id,
}) => {
  try {
    const thumbnail = image?.formats?.thumbnail;
    const res = await fetch(`${BASE_URL}/movies`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer: trailerLink,
        thumbnail,
        nameRU,
        nameEN,
        movieId: id,
      }),
    });
    const data = await getResponseData(res);

    return data.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

const deleteSavedMovie = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const movies = await getResponseData(res);

    return movies.json();
  } catch (err) {
    return Promise.reject(err);
  }
};

export {
  register,
  login,
  unlogin,
  auth,
  editProfile,
  getSavedMovies,
  deleteSavedMovie,
  saveMovie,
  BASE_URL,
};
