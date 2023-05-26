import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios';

import { queryParser } from '@/lib/api/testrail';

const ENDPOINT = process.env.TESTRAIL_ENDPOINT,
  USERNAME = process.env.TESTRAIL_USER, 
  API_KEY= process.env.TESTRAIL_API_KEY;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TestRail.Project[]>
) => {
  try {
    // Parse query string from params
    const params = req.query as Api.Params;
    let query = queryParser(params); 

    // Define default options
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: USERNAME,
        password: API_KEY
      }
    }   

    // Make GET request to get_projects endpoint
    const r = await axios.get(`${ENDPOINT}/get_projects${query}`, options ) 

    res.status(r.status).send(r.data);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error(`${err.response?.status} - ${err.response?.statusText}`);
    }
    console.error(err)
    res.end();
  }  
};

export default handler;
