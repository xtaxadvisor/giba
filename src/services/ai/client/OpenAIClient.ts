// Mock implementation of OpenAIClient to prevent build failures
export default class OpenAIClient {
    chat = {
      completions: {
        create: async (params: any) => {
          return {
            choices: [
              {
                message: {
                  content: "This is a mock response from OpenAIClient."
                }
              }
            ]
          };
        }
      }
    };
  
    models = {
      list: async () => {
        return ["gpt-4o-mini", "gpt-3.5-turbo"];
      }
    };
  }