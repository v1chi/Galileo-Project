export declare class MessageService {
    private openaiApiKey;
    constructor();
    processMessage(message: string, sessionId: string): Promise<string>;
}
