import React, { useContext, useEffect } from 'react';
import { getLocation } from './actions/IPFindActions';
import { IPFindContext } from './context/IPFindContext';
import { getLocationFromAPI } from './services/IPFindService';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const {
    state: { location },
    dispatch,
  } = useContext(IPFindContext);

  useEffect(() => {
    getLocationFromAPI().then(response => dispatch(getLocation(response)));
  }, [dispatch]);

  useEffect(() => {
    console.log({ location });
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <p>teste</p>
    </>
  );
};

export default App;
