import axios from 'axios';
import { ILocation } from '../types/IPFindContext.types';

export const URL_API = 'https://geo.ipify.org/api/v1?';

export const getLocationFromAPI = async (
  search?: string,
): Promise<ILocation> => {
  const url = search
    ? `${URL_API}apiKey=${process.env.REACT_APP_API_KEY}&${search}`
    : `${URL_API}apiKey=${process.env.REACT_APP_API_KEY}`;

  const response = await axios.get(url);

  return response.data;
};
