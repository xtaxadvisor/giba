import React from "react";
import { Configuration, OpenAIApi } from 'openai';
import { handleCors, getCorsHeaders } from './utils/cors';
import { createErrorResponse, createSuccessResponse } from './utils/response';
// Initialize OpenAI with error handling
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.VITE_OPENAI_API_KEY
}));
export const handler = async (event) => {
    try {
        // Handle CORS
        const corsHeaders = handleCors(event);
        if ('statusCode' in corsHeaders) {
            return corsHeaders;
        }
        // Validate request method
        if (event.httpMethod !== 'POST') {
            return {
                ...createErrorResponse(405, 'Method not allowed'),
                headers: corsHeaders
            };
        }
        // Parse and validate request body
        if (!event.body) {
            return {
                ...createErrorResponse(400, 'Request body is required'),
                headers: corsHeaders
            };
        }
        const { content, context = 'visitor', messages = [] } = JSON.parse(event.body);
        if (!content) {
            return {
                ...createErrorResponse(400, 'Content is required'),
                headers: corsHeaders
            };
        }
        // Call OpenAI API
        const completion = await openai.createChatCompletion({
            model: "gpt-4-turbo-preview",
            messages: [
                {
                    role: "system",
                    content: `You are a helpful AI assistant for ProTaXAdvisors, focusing on tax and financial advisory services. Context: ${context}`
                },
                ...messages.map((msg) => ({
                    role: msg.role,
                    content: msg.content
                })),
                { role: "user", content }
            ],
            max_tokens: 500,
            temperature: 0.7,
            presence_penalty: 0.6,
            frequency_penalty: 0.5
        });
        // Return success response
        return {
            ...createSuccessResponse({
                response: completion.data.choices[0]?.message?.content || 'No response generated'
            }),
            headers: corsHeaders
        };
    }
    catch (error) {
        console.error('OpenAI error:', error);
        // Return appropriate error response
        return {
            ...createErrorResponse(error.response?.status || 500, error.response?.data?.error?.message || 'Failed to get AI response', process.env.NODE_ENV === 'development' ? error : undefined),
            headers: getCorsHeaders(event)
        };
    }
};
