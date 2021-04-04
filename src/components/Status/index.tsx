import React from 'react';
import { ILocation } from '../../types/IPFindContext.types';
import { Wrapper } from './styles';

interface Props {
  status: ILocation;
}

export const Status: React.FC<Props> = ({ status }) => {
  const { ip, location, isp } = status;

  return (
    <Wrapper>
      <div className="item">
        <span>IP Address</span>
        <p>{ip}</p>
      </div>
      <div className="item">
        <span>Location</span>
        <p>{`${location.city}, ${location.region}`}</p>
      </div>
      <div className="item">
        <span>Timezone</span>
        <p>{location.timezone}</p>
      </div>
      <div className="item">
        <span>ISP</span>
        <p>{isp}</p>
      </div>
    </Wrapper>
  );
};
