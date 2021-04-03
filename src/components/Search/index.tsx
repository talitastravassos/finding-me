import React, { useState } from 'react';
import iconArrow from '../../images/icon-arrow.svg';
import { Button, Input } from './styles';

export const Search: React.FC = () => {
  const [state, setState] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const onClick = () => {
    console.log(state);
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
