import axios from 'axios';
import { ILocation } from '../types/IPFindContext.types';

const URL_API = 'https://geo.ipify.org/api/v1?';

export const getLocationFromAPI = async (
  ipAddress?: string,
): Promise<ILocation> => {
  const url = ipAddress
    ? `${URL_API}apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`
    : `${URL_API}apiKey=${process.env.REACT_APP_API_KEY}`;

  const response = await axios.get(url);

  return response.data;
};
