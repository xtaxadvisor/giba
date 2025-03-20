import { handleCors, getCorsHeaders } from './utils/cors';
import { createErrorResponse, createSuccessResponse } from './utils/response';
import { OpenAI } from 'openai';

/**
 * @typedef {Object} Event
 * @property {string} httpMethod - The HTTP method of the request.
 * @property {Object} headers - The headers of the request.
 * @property {string} body - The body of the request.
 */

/**
 * @typedef {Object} Response
 * @property {number} statusCode - The HTTP status code of the response.
 * @property {Object} headers - The headers of the response.
 * @property {string} body - The body of the response.
 */

/**
 * @param {Event} event - The event object representing the request.
 * @returns {Promise<Response>} - The response object.
 */
export const handler = async (event) => {
  try {
    // Handle CORS
    const corsHeaders = handleCors(event);
    if ('statusCode' in corsHeaders) {
      return {
        statusCode: corsHeaders.statusCode,
        headers: { ...corsHeaders.headers },
        body: JSON.stringify(corsHeaders.body || {})
      };
    }

    // Validate request method
    if (event.httpMethod !== 'POST') {
      return {
        ...createErrorResponse(405, 'Method not allowed'),
        headers: { ...corsHeaders }
      };
    }

    // Test OpenAI configuration
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // Test OpenAI API connection (example request)
    try {
      const response = await openai.models.list();
      return {
        ...createSuccessResponse({ 
          success: true,
          message: 'OpenAI service connection successful',
          models: response.data // Include models data if needed
        }),
        headers: corsHeaders
      };
    } catch (error) {
      console.error('Failed to connect to OpenAI API:', error);
      return {
        ...createErrorResponse(500, 'Failed to connect to OpenAI API'),
        headers: { ...corsHeaders }
      };
    }

  } catch (error) {
    console.error('OpenAI test error:', error);
    return {
      ...createErrorResponse(
        500,
        'OpenAI service test failed',
        process.env.NODE_ENV === 'development' ? error : undefined
      ),
      headers: getCorsHeaders(event)
    };
  }
};