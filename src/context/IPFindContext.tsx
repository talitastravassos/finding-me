import React, { useReducer } from 'react';
import { reducer } from '../reducers/StateReducer';
import { IContextModel, IState } from '../types/IPFindContext.types';

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
