import axios, { AxiosAdapter } from 'axios';
import { retryAdapterEnhancer, Options } from 'axios-extensions';


const retryConfig: Options = {
  retries: 3,
  retryCondition: (error: any) => {
    // Retry on network errors and 5xx responses
    return !error.response || (error.response.status >= 500 && error.response.status <= 599);
  },
  retryDelay: (retryCount: number) => {
    // Exponential backoff
    return Math.min(1000 * Math.pow(2, retryCount - 1), 10000);
  }
};

const enhancedAdapter = retryAdapterEnhancer(axios.defaults.adapter as AxiosAdapter, retryConfig);
axios.defaults.adapter = enhancedAdapter;