const fetchFans = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`);

  if (res.ok) {
    return res.json();
  }

  if (res.status === 404) {
    return [];
  }

  throw new Error(`Fetching fans failed with code: ${res.status}`);
};

export { fetchFans };
