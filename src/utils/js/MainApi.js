const BASE_URL = "https://api.movies-explorer-prod.nomoredomains.rocks";

const register = async (name, email, password) => {
  try {
    const res = fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    return res;
  } catch (err) {
    return Promise.reject(err);
  }
};

export { register };
