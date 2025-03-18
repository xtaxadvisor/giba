import { analyzeText } from './analysis';
import { formatResponse } from '../../utils/ai/responseFormatting';
export async function generateStructuredResponse(content, context) {
    // Analyze the content for better response structuring
    const analysis = await analyzeText(content);
    // Format the response based on context and analysis
    const response = await generateContextualResponse(content, context, analysis);
    return {
        text: formatResponse(response, context),
        confidence: analysis.confidence,
        sources: analysis.sources || []
    };
}
async function generateContextualResponse(content, context, analysis) {
    switch (analysis.intent) {
        case 'question':
            return generateAnswerResponse(content, context, analysis);
        case 'task':
            return generateActionResponse(content, context, analysis);
        default:
            return generateInformationalResponse(content, context, analysis);
    }
}
async function generateAnswerResponse(content, context, analysis) {
    const response = await aiCore.getCompletion([
        { role: 'system', content: `You are answering a question in the context of ${context}` },
        { role: 'user', content }
    ]);
    return response;
}
async function generateActionResponse(content, context, analysis) {
    const response = await aiCore.getCompletion([
        { role: 'system', content: `You are helping with a task in the context of ${context}` },
        { role: 'user', content }
    ]);
    return response;
}
async function generateInformationalResponse(content, context, analysis) {
    const response = await aiCore.getCompletion([
        { role: 'system', content: `You are providing information in the context of ${context}` },
        { role: 'user', content }
    ]);
    return response;
}
