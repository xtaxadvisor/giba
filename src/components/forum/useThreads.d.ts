export declare function useThreads(): {
    threads: any;
    isLoading: any;
    createThread: (title: string, content: string, userId: string) => Promise<any>;
};
