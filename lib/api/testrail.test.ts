import {_request, get, queryParser} from './testrail'

import axios from 'axios'

// Mocks
jest.mock('axios');

describe('TestRail API', () => {
  afterEach(() => {
    jest.resetAllMocks();
  })

  describe('Query Parser', () => {
    it('should return a query string', () => {
      const params = {one: 'one', 'two': false, 'three': 1}

      const query = queryParser(params);

      expect(query).toBe('&one=one&two=false&three=1');
    })

    it('should return an empty string if the params object is empty', () => {
      const params = {}

      const query = queryParser(params);

      expect(query).toBe('');
    })
  })
  
  describe('Request wrapper', () => {
    it('should call the request function once', async () => {
      const uri = 'test';

      await _request('get', uri);
      const callArgs = jest.mocked(axios).mock.lastCall[0];
  
      expect(axios).toHaveBeenCalledTimes(1);
      expect(callArgs).toHaveProperty('method', 'get'); 
      expect(callArgs.url).toContain(uri);
    })
  })

  describe('GET request', () => {
    it('should call the request function once', async () => {
      const uri = 'get_projects';

      await get(uri);
      const callArgs = jest.mocked(axios).mock.lastCall[0];
  
      expect(axios).toHaveBeenCalledTimes(1);
      expect(callArgs).toHaveProperty('method', 'get'); 
      expect(callArgs.url).toContain(uri);
    })
  })
})

