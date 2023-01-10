import axios from 'axios';

export const getSearchItems = (query: string) => {
  const path = query ? `/name/${query}` : '/all';
  return axios.get(`${process.env.REACT_APP_API}${path}`);
};

export const getSearchItem = (id: string) => {
  return axios.get(`${process.env.REACT_APP_API}/alpha/${id}`);
};

export const getSearchItemBorders = (ids: string[]) => {
  return axios.get(`${process.env.REACT_APP_API}/alpha?codes=${ids.join(',')}`);
};
