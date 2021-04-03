import React, { useContext, useState } from 'react';
import iconArrow from '../../images/icon-arrow.svg';
import { getLocationFromAPI } from '../../services/IPFindService';
import { getLocation } from '../../state/actions/IPFindActions';
import { IPFindContext } from '../../state/context/IPFindContext';
import { validateSearch } from '../../utils/validateSearch';
import { Button, Input } from './styles';

export const Search: React.FC = () => {
  const { dispatch } = useContext(IPFindContext);

  const [state, setState] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const onClick = () => {
    getLocationFromAPI(validateSearch(state)).then(response =>
      dispatch(getLocation(response)),
    );
  };

  return (
    <div>
      <Input
        placeholder="Search for any IP address or domain"
        value={state}
        onChange={handleChange}
      />
      <Button onClick={onClick}>
        <img src={iconArrow} alt="" />
      </Button>
    </div>
  );
};
