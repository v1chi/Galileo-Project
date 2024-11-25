import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MessageService {
  private witToken: string;

  constructor() {
    this.witToken = 'CUJAAQTOM3WKIRBL3M5H4F4J5LSNI34I'; // Reemplaza con tu token de acceso de Wit.ai
  }

  async processMessage(message: string, sessionId: string): Promise<string> {
    console.log('Mensaje recibido:', message);
    console.log('ID de sesión:', sessionId);

    try {
      // Realiza la llamada a la API de Wit.ai
      console.log('Realizando solicitud a Wit.ai...');
      const response = await axios.get(
        'https://api.wit.ai/message',
        {
          params: { q: message },
          headers: {
            Authorization: `Bearer ${this.witToken}`,
          },
        }
      );

      console.log('Respuesta de Wit.ai:', response.data);

      // Procesa el resultado
      const result = response.data.text;
      console.log('Texto procesado:', result);

      return result || 'No entiendo tu pregunta. Llama al 569 1111 2222.';
    } catch (error) {
      console.error('Error al procesar el mensaje con Wit.ai:', error.response?.data || error.message);
      return 'Hubo un problema al procesar tu mensaje. Intenta más tarde.';
    }
  }
}
