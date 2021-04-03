import React from 'react';
import { Search } from '../Search';
import { Wrapper } from './styles';

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <Search />
    </Wrapper>
  );
};
