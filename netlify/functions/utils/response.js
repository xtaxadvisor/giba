import React from "react";
export function createErrorResponse(statusCode, message, details) {
    return {
        statusCode,
        body: JSON.stringify({
            error: message,
            ...(details && { details })
        })
    };
}
export function createSuccessResponse(data) {
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}
