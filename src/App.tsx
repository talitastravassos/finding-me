import React, { useContext, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Header } from './components/Header';
import Map from './components/Map';
import { Status } from './components/Status';
import { getLocationFromAPI } from './services/IPFindService';
import { getLocation } from './state/actions/IPFindActions';
import { IPFindContext } from './state/context/IPFindContext';
import GlobalStyle, { Container } from './styles/global';
import { ILocation } from './types/IPFindContext.types';

const App: React.FC = () => {
  const {
    state: { location },
    dispatch,
  } = useContext(IPFindContext);

  useEffect(() => {
    getLocationFromAPI().then(response => dispatch(getLocation(response)));
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {!location && (
        <Container>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </Container>
      )}
      {location && <Status status={location as ILocation} />}
      {location && (
        <Map location={[location.location.lat, location.location.lng]} />
      )}
    </>
  );
};

export default App;
