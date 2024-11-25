import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MessageService {
  private groqToken: string;

  constructor() {
    this.groqToken = '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'; // Reemplaza con tu token de GroqCloud
  }

  async processMessage(message: string, sessionId: string): Promise<string> {
    console.log('Mensaje recibido:', message);
    console.log('ID de sesión:', sessionId);

    try {
      // Realiza la llamada a la API de GroqCloud
      console.log('Realizando solicitud a GroqCloud...');
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'user',
              content: message,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${this.groqToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Respuesta de GroqCloud:', response.data);

      // Procesa el resultado
      const result = response.data.choices[0].message.content; // Ajusta según la estructura de la respuesta
      console.log('Texto procesado:', result);

      return result || 'No entiendo tu pregunta. Llama al 569 1111 2222.';
    } catch (error) {
      console.error('Error al procesar el mensaje con GroqCloud:', error.response?.data || error.message);
      return 'Hubo un problema al procesar tu mensaje. Intenta más tarde.';
    }
  }
}
