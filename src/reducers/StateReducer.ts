import { IAction, IState } from '../types/IPFindContext.types';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET':
      return {
        ...state,
        location: action.payload,
      };

    default:
      return state;
  }
};
