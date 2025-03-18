export declare const OPENAI_CONFIG: {
    apiKey: any;
    dangerouslyAllowBrowser: boolean;
    defaultHeaders: {
        'OpenAI-Beta': string;
    };
} | null;
export declare const OPENAI_MODELS: {
    readonly DEFAULT: "gpt-4o-mini";
    readonly FAST: "gpt-3.5-turbo";
    readonly ANALYSIS: "gpt-4";
};
export declare const MAX_TOKENS: {
    readonly DEFAULT: 500;
    readonly ANALYSIS: 1000;
    readonly SUMMARY: 250;
};
export declare const RETRY_CONFIG: {
    attempts: number;
    backoff: {
        min: number;
        max: number;
        factor: number;
    };
};
