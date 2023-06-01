import { _queryParser, _request, get, post } from './testrail';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Mocks
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Test Data
const axiosResolved = {
  status: 200,
  data: [
    {
      announcement: 'test',
      completed_on: 12345,
      default_role: 'test',
      default_role_id: 12345,
      groups: [],
      id: 1,
      is_completed: 0,
      name: 'Test Project',
      show_announcement: 1,
      suite_mode: 1,
      url: 'https://test.testail.com'
    }
  ]
};

describe('TestRail API', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('._queryParser', () => {
    it('should return a query string', () => {
      const params = { one: 'one', two: false, three: 1 };

      const query = _queryParser(params);

      expect(query).toBe('&one=one&two=false&three=1');
    });

    it('should return an empty string if the params object is empty', () => {
      const params = {};

      const query = _queryParser(params);

      expect(query).toBe('');
    });
  });

  describe('._request', () => {
    let result: AxiosResponse;
    let callArgs: AxiosRequestConfig;
    const uri = 'test';

    beforeEach(async () => {
      // Mock the resolved value from the Axios call
      mockedAxios.get.mockResolvedValueOnce(axiosResolved);
      result = await _request('get', uri);
      const { lastCall } = jest.mocked(mockedAxios.get).mock;
      callArgs = (lastCall && lastCall[0]) as AxiosRequestConfig;
    });

    it('should call axios once', async () => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('should call axios with a url which contains the uri', () => {
      expect(callArgs).toContain(uri);
    });

    it('should return the entire response from axios', () => {
      expect(result).toEqual(axiosResolved);
    });
  });

  describe('.get', () => {
    let result: AxiosResponse;
    const uri = 'test';

    beforeEach(async () => {
      mockedAxios.get.mockResolvedValueOnce(axiosResolved);
      result = await get(uri);
    });

    it('should call the axios.get once', async () => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('should return the response', () => {
      expect(result).toEqual(axiosResolved);
    });
  });

  describe('.post', () => {
    let result: AxiosResponse;
    const uri = 'test';

    beforeEach(async () => {
      mockedAxios.post.mockResolvedValueOnce(axiosResolved);
      result = await post(uri);
    });

    it('should call the axios.post once', async () => {
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    it('should return the response', async () => {
      expect(result).toEqual(axiosResolved);
    });
  });
});
