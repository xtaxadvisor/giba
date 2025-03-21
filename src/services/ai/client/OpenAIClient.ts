// Mock implementation of OpenAIClient to prevent build failures
export default class OpenAIClient {
    chat = {
      completions: {
        create: async ({ messages }: { messages: { role: "system" | "user" | "assistant"; content: string; }[]; }) => {
          console.log(messages); // Log messages to use the parameter
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