import { ILocation } from '../../types/IPFindContext.types';
import { mockLocation } from '../../__test__/mock';
import { getLocation } from '../actions/IPFindActions';
import { defaultState } from '../context/IPFindContext';
import { reducer } from './StateReducer';

describe('reducer', () => {
  it('should dispatch getLocation action and update state', () => {
    const state = reducer(defaultState, getLocation(mockLocation as ILocation));

    expect(state.location).not.toBeNull();
    expect(state.location?.ip).toBe('140.82.112.4');
  });
});
