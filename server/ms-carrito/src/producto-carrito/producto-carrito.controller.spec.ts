import { Test, TestingModule } from '@nestjs/testing';
import { ProductoCarritoController } from './producto-carrito.controller';

describe('ProductoCarritoController', () => {
  let controller: ProductoCarritoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoCarritoController],
    }).compile();

    controller = module.get<ProductoCarritoController>(ProductoCarritoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
