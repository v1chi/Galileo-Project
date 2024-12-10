import { Controller, Post, Body, Get, Query, Res } from '@nestjs/common';
import { WebpayService } from './webpay.service';
import { Response } from 'express';

@Controller('webpay')
export class WebpayController {
  constructor(private readonly webpayService: WebpayService) {}

  @Post('create')
  async create(@Body() body, @Res() res: Response) {
    const { amount, cliente_id } = body;
    if (!amount || !cliente_id) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: `${!amount ? 'amount' : 'cliente_id'} is required`,
      });
    }

    const buyOrder = cliente_id.toString();
    const sessionId = cliente_id.toString();
    const returnUrl = 'http://localhost:3003/webpay/commit';

    const createResponse = await this.webpayService.createTransaction(amount, buyOrder, sessionId, returnUrl);
    const token = createResponse.token;
    const url = createResponse.url;
    const paymentUrl = `${url}?token_ws=${token}`;

    return res.status(200).json({
      code: 200,
      status: 'OK',
      data: {
        returnUrl: returnUrl,
        urlWebpay: paymentUrl,
        token: token,
      },
    });
  }

  @Get('commit')
async commit(@Query() query, @Res() res: Response) {
  const { token_ws, TBK_TOKEN, TBK_ORDEN_COMPRA, TBK_ID_SESION } = query;

  console.log('Commit query parameters:', query);

  if (token_ws && !TBK_TOKEN) {
    const commitResponse = await this.webpayService.commitTransaction(token_ws);
    console.log('Commit response:', commitResponse);
    if (commitResponse.response_code === 0) {
      // Redirige a tu frontend con el token
      return res.redirect(`http://localhost:3000/dashboard/payment/succes/resume?token=${token_ws}`);
    } else {
      // Redirige a tu frontend con el token, indicando que hubo un error
      return res.redirect(`http://localhost:3000/dashboard/payment/error/resume?token=${token_ws}`);
    }
  } else if (!TBK_TOKEN && TBK_ID_SESION && TBK_ORDEN_COMPRA) {
    console.log('Payment cancelled due to timeout');
    return res.redirect(`http://localhost:3000/dashboard/payment/error/resume?token=${token_ws}`);
  } else if (TBK_TOKEN && TBK_ORDEN_COMPRA && TBK_ID_SESION) {
    console.log('Payment cancelled by user');
    return res.redirect(`http://localhost:3000/dashboard/payment/error/resume?token=${token_ws}`);
  } else {
    console.log('Unexpected error');
    return res.redirect(`http://localhost:3000/dashboard/payment/error/resume?token=${token_ws}`);
  }
}

  @Get('status')
  async checkToken(@Query() query, @Res() res: Response) {
    const { token } = query;

    try {
      const tx = await this.webpayService.getStatus(token);
      return res.status(200).json({
        data: tx,
        code: 200,
        status: 'OK',
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        message: error?.message ?? 'TOKEN NOT VALID',
      });
    }
  }
}