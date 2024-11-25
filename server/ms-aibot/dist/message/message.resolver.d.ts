import { MessageService } from './message.service';
export declare class MessageResolver {
    private readonly messageService;
    constructor(messageService: MessageService);
    getChatbotResponse(message: string, sessionId: string): Promise<string>;
}
export default MessageResolver;
