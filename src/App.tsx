import React, { useContext, useEffect } from 'react';
import { getLocation } from './actions/IPFindActions';
import Map from './components/Map';
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

  // useEffect(() => {
  //   console.log({ location });
  // }, [location]);

  return (
    <>
      <GlobalStyle />
      {location && (
        <Map location={[location.location.lat, location.location.lng]} />
      )}
    </>
  );
};

export default App;
