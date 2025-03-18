export interface AIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}
const aiMessage = `Hello, this is an AI-generated response`;  
console.log(aiMessage); // Hello, this is an AI-generated response  

export interface AIResponse {
  text: string;
  confidence: number;
  sources?: string[];
}

export interface AIAnalysis {
  sentiment: 'positive' | 'negative' | 'neutral';
  topics: string[];
  entities: string[];
  confidence: number;
}

export interface AIFeature {
  id: string;
  name: string;
  description: string;
  prompt: string;
}

export type AIContext = 'general' | 'tax' | 'financial' | 'service' | 'visitor';

export interface AIFeedback {
  messageId: string;
  rating: number;
  comment?: string;
  context: string;
}