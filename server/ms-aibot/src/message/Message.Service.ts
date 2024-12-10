import { Injectable } from '@nestjs/common';
import axios from 'axios';
import getPredefinedResponse from './Manager/ResponderManager'


@Injectable()
export class MessageService {
  private groqToken: string;

  constructor() {
    this.groqToken = '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'; // Reemplaza con tu token de GroqCloud
  }

  // Método para procesar el mensaje
  async processMessage(message: string, sessionId: string): Promise<string> {
    console.log('Mensaje recibido:', message);
    console.log('ID de sesión:', sessionId);

    try {
      // Verificamos si el mensaje comienza con "ADMIN"
      let messageToSend = message;
      if (message.startsWith("ADMIN")) {
        // Si es un mensaje ADMIN, eliminamos la palabra "ADMIN" y lo procesamos normalmente
        messageToSend = message.slice(5).trim();  // Elimina "ADMIN" y espacios extras
      } else {
        // Si no es ADMIN, obtenemos una respuesta predefinida
        ////const predefinedResponse = getPredefinedResponse(message);
        messageToSend = getPredefinedResponse(message);
      }

      console.log('Realizando solicitud a GroqCloud con el mensaje ajustado:', messageToSend);

      // Realiza la llamada a la API de GroqCloud con el mensaje ajustado
      const response = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: 'llama3-8b-8192',
          messages: [
            {
              role: 'system',
              content: messageToSend, // Aquí le indicamos a la API cómo generar variantes
            },
            {
              role: 'user',
              content: message, // El mensaje original del usuario
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

      // Procesa el resultado y ajusta la respuesta al formato deseado
      const result = response.data.choices[0]?.message?.content;

      if (!result) {
        return this.adjustResponseToPersonality('Lo siento, no entiendo tu pregunta. Por favor, intenta formularla de otra manera o contáctanos al soporte.');
      }

      const adjustedResult = this.adjustResponseToPersonality(result);
      return adjustedResult;
    } catch (error) {
      console.error('Error al procesar el mensaje con GroqCloud:', error.response?.data || error.message);
      return this.adjustResponseToPersonality('Hubo un problema al procesar tu mensaje. Por favor, inténtalo más tarde.');
    }
  }

  // Método para ajustar la respuesta al formato de asistente web
  private adjustResponseToPersonality(content: string): string {
    return `Asistente Web: ${content}`;
  }
}

