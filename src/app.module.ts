import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { NatsModule } from './transport/nats.module';


@Module({
  imports: [ProductsModule, NatsModule],
})
export class AppModule {}
