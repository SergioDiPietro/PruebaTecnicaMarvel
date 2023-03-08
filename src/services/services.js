import axios from "axios";
const { REACT_APP_API_KEY, REACT_APP_API_HASH } = process.env;

export const getMarvelData = async (cat) => {
  const res = await axios.get(
    `https://gateway.marvel.com:443/v1/public/${cat}?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`
  );
  return res.data.data.results;
};

export const getItem = async (cat, id) => {
  console.log(`https://gateway.marvel.com:443/v1/public/${cat}/${id}?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`)
  const res = await axios.get(
    `https://gateway.marvel.com:443/v1/public/${cat}/${id}?ts=1&apikey=${REACT_APP_API_KEY}&hash=${REACT_APP_API_HASH}`
  );
  
  return res.data.data;
};
