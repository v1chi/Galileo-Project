import { Test, TestingModule } from '@nestjs/testing';
import { ProductoCarritoService } from './producto-carrito.service';

describe('ProductoCarritoService', () => {
  let service: ProductoCarritoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoCarritoService],
    }).compile();

    service = module.get<ProductoCarritoService>(ProductoCarritoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
