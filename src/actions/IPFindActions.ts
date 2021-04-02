import { IAction, ILocation } from '../types/IPFindContext.types';

export const getLocation = (location: ILocation): IAction => ({
  type: 'GET',
  payload: location,
});
