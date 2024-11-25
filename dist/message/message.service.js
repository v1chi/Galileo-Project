"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const axios_1 = require("axios");
class MessageService {
    constructor() {
        this.openaiApiKey = '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';
    }
    async processMessage(message, sessionId) {
        console.log('Mensaje recibido:', message);
        console.log('ID de sesión:', sessionId);
        try {
            console.log('Realizando solicitud a OpenAI...');
            const response = await axios_1.default.post('https://api.openai.com/v1/chat/completions', {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
            }, {
                headers: {
                    'Authorization': `Bearer ${this.openaiApiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Respuesta de OpenAI:', response.data);
            const result = response.data.choices[0].message.content;
            console.log('Texto procesado:', result);
            return result || 'No entiendo tu pregunta. Intenta otra vez.';
        }
        catch (error) {
            console.error('Error al procesar el mensaje con OpenAI:', error.response?.data || error.message);
            return 'Hubo un problema al procesar tu mensaje. Intenta más tarde.';
        }
    }
}
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map