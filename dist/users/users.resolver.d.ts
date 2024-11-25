import { MessageService } from '../message/message.service';
export declare class UsersResolver {
    private readonly messageService;
    constructor(messageService: MessageService);
    getChatbotResponse(message: string, sessionId: string): Promise<string>;
}
