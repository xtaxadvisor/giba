import axios, { AxiosAdapter } from 'axios';
const retryConfig = {
  retries: 3,
  retryCondition: () => {
    // Retry condition logic
    return true;
  },
  retryDelay: (retryCount: number) => {
    // Retry delay logic
    return retryCount * 1000;
  },
};

axios.defaults.adapter = retryAdapter(
  axios.defaults.adapter as AxiosAdapter,
  retryConfig
);
function retryAdapter(
  adapter: AxiosAdapter,
  retryConfig: {
    retries: number;
    retryCondition: (error: unknown) => boolean;
    retryDelay: (retryCount: number) => number;
  }
): AxiosAdapter {
  return async (config) => {
    let retries = 0;

    while (retries <= retryConfig.retries) {
      try {
        // Attempt the request
        return await adapter(config);
      } catch (error) {
        // Check if the retry condition is met
        if (retries >= retryConfig.retries || !retryConfig.retryCondition(error)) {
          throw error;
        }

        // Wait for the specified delay before retrying
        const delay = retryConfig.retryDelay(retries + 1);
        await new Promise((resolve) => setTimeout(resolve, delay));

        retries++;
      }
    }

    // If all retries fail, throw the last error
    throw new Error('Max retries reached');
  };
}
