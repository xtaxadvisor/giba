import type { AIResponse } from '../../types/ai.js';
import { analyzeText } from './analysis.js';
export const aiCoreConfig = {
  model: "gpt-4-turbo",
  temperature: 0.7,
  maxTokens: 500,
};
import { formatResponse } from '../../utils/ai/responseFormatting.js';
import { aiCore } from './core/AICore.js';

export async function generateStructuredResponse(
  content: string,
  context: string
): Promise<AIResponse> {
  // Analyze the content for better response structuring
  const analysis = await analyzeText(content);
  
  // Format the response based on context and analysis
  const response = await generateContextualResponse(content, context, {
    intent: analysis.intent, // Ensure intent is mapped correctly
    confidence: analysis.confidence,
    sources: analysis.sources || []
  });

  return {
    text: formatResponse(response),
    confidence: analysis.confidence,
    sources: analysis.sources || []
  };
}

async function generateContextualResponse(
  content: string,
  context: string,
  analysis: { intent: string; confidence: number; sources?: string[] }
): Promise<string> {
  switch (analysis.intent) {
    case 'question':
      return generateAnswerResponse(content, context);
    case 'task':
      return generateActionResponse(content, context);
    default:
      return generateInformationalResponse(content, context);
  }
}

async function generateAnswerResponse(
  content: string,
  context: string
): Promise<string> {
  const response = await aiCore.getCompletion([
    { role: 'system', content: `You are answering a question in the context of ${context}` },
    { role: 'user', content }
  ]);
  
  return response;
}

async function generateActionResponse(
  content: string,
  context: string
): Promise<string> {
  const response = await aiCore.getCompletion([
    { role: 'system', content: `You are helping with a task in the context of ${context}` },
    { role: 'user', content }
  ]);
  
  return response;
}

async function generateInformationalResponse(
content: string, context: string): Promise<string> {
  const response = await aiCore.getCompletion([
    { role: 'system', content: `You are providing information in the context of ${context}` },
    { role: 'user', content }
  ]);
  
  return response;
}