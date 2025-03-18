import axios from 'axios';
import { retryAdapterEnhancer } from 'axios-extensions';
const retryConfig = {
    retries: 3,
    retryCondition: (error) => {
        // Retry on network errors and 5xx responses
        return !error.response || (error.response.status >= 500 && error.response.status <= 599);
    },
    retryDelay: (retryCount) => {
        // Exponential backoff
        return Math.min(1000 * Math.pow(2, retryCount - 1), 10000);
    }
};
const enhancedAdapter = retryAdapterEnhancer(axios.defaults.adapter, retryConfig);
axios.defaults.adapter = enhancedAdapter;
