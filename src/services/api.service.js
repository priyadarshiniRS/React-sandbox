const getUserList = () => {
  return fetch(
    "https://run.mocky.io/v3/37dc7947-7922-424a-b0c1-ddee41a71b25"
  ).then((res) => res.json());
};
export { getUserList };
