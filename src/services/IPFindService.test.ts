import axios from 'axios';
import { mockLocation } from '../__test__/mock';
import { getLocationFromAPI, URL_API } from './IPFindService';

jest.mock('axios');

describe('getLocationFromAPI', () => {
  it('fetches successfully data from an API', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: mockLocation }),
    );

    await expect(getLocationFromAPI('domain=github.com')).resolves.toEqual(
      mockLocation,
    );

    expect(axios.get).toHaveBeenCalledWith(
      `${URL_API}apiKey=${process.env.REACT_APP_API_KEY}&domain=github.com`,
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(getLocationFromAPI('domain=github.com')).rejects.toThrow(
      errorMessage,
    );
  });
});
