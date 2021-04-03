import React, { useReducer } from 'react';
import { IContextModel, IState } from '../../types/IPFindContext.types';
import { reducer } from '../reducers/StateReducer';

export const defaultState: IState = {
  location: null,
};

export const IPFindContext = React.createContext({} as IContextModel);

export const IPFindProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <IPFindContext.Provider value={{ state, dispatch }}>
      {children}
    </IPFindContext.Provider>
  );
};
