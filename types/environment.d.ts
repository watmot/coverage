declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      TESTRAIL_ENDPOINT: string;
      TESTRAIL_USER: string;
      TESTRAIL_API_KEY: string;
    }
  }
}

export {};
