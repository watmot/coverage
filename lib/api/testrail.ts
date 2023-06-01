import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const HOST = process.env.TESTRAIL_HOST,
  USERNAME = process.env.TESTRAIL_USER,
  API_KEY = process.env.TESTRAIL_API_KEY;

class TestRailError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TestRailError';
  }
}

export const _queryParser = (params: Api.Params) => {
  let query = '';

  // Loop through param keys to generate query string
  Object.keys(params).forEach((item, index) => {
    query += `&${item}=${params[item]}`;
  });

  return query;
};

export const _request = async (
  method: 'get' | 'post',
  uri: string,
  config?: AxiosRequestConfig,
  query?: string
) => {
  const url = `${HOST}/${uri}${query}`;
  const res = await axios[method](url, {
    auth: {
      username: USERNAME,
      password: API_KEY
    },
    headers: {
      'Content-Type': 'application/json'
    },
    ...config
  });

  return res;
};

export const get = async (uri: string, config?: AxiosRequestConfig, query?: string) => {
  const res = await _request('get', uri, config, query);
  return res;
};

export const post = async (uri: string, config?: AxiosRequestConfig, query?: string) => {
  const res = await _request('post', uri, config, query);
  return res;
};
