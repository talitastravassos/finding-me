/* eslint-disable camelcase */
import React from 'react';

export interface ILocation {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    postalCode: string;
    timezone: string;
    geonameId: number;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
  proxy: {
    proxy: boolean;
    vpn: boolean;
    tor: boolean;
  };
}

export interface IState {
  location: ILocation | null;
}

export interface IContextModel {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export type IAction = { type: 'GET'; payload: ILocation };
