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

export { register, login };
