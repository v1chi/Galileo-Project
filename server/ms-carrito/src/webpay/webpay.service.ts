import { Injectable } from '@nestjs/common';
import { WebpayPlus, Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk';

@Injectable()
export class WebpayService {
  private readonly options: Options;

  constructor() {
    this.options = new Options(
      IntegrationCommerceCodes.WEBPAY_PLUS,
      IntegrationApiKeys.WEBPAY,
      Environment.Integration
    );
  }

  async createTransaction(amount: number, buyOrder: string, sessionId: string, returnUrl: string) {
    const transaction = new WebpayPlus.Transaction(this.options);
    return await transaction.create(buyOrder, sessionId, amount, returnUrl);
  }

  async commitTransaction(token: string) {
    const transaction = new WebpayPlus.Transaction(this.options);
    return await transaction.commit(token);
  }

  async getStatus(token: string) {
    const transaction = new WebpayPlus.Transaction(this.options);
    return await transaction.status(token);
  }
}