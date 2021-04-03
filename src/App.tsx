import React, { useContext, useEffect } from 'react';
import { Header } from './components/Header';
import Map from './components/Map';
import { getLocationFromAPI } from './services/IPFindService';
import { getLocation } from './state/actions/IPFindActions';
import { IPFindContext } from './state/context/IPFindContext';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const {
    state: { location },
    dispatch,
  } = useContext(IPFindContext);

  useEffect(() => {
    getLocationFromAPI().then(response => dispatch(getLocation(response)));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log({ location });
  // }, [location]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {location && (
        <Map location={[location.location.lat, location.location.lng]} />
      )}
    </>
  );
};

export default App;
