import React from "react";
export const handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'Hello from Netlify Functions!',
                timestamp: new Date().toISOString(),
            }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
