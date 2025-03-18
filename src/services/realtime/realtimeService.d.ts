export declare const realtimeService: {
    sendMessage(message: string, data?: any): Promise<any>;
    updatePresence(presenceData: any): Promise<any>;
    getPresence(): any;
    unsubscribe(): Promise<any>;
};
