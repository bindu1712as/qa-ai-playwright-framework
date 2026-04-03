const ENV = process.env.ENV || 'qa';

const baseURLs: Record<string, string> = {
  dev: 'https://dev.crm.com',
  qa: 'https://qa.crm.com',
  prod: 'https://prod.crm.com'
};

export const config = {
  env: ENV,
  baseURL: baseURLs[ENV]
};