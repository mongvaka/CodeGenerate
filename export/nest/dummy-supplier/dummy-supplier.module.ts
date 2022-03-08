import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DummySupplierController } from './dummy-supplier.controller';
import { DummySupplier } from './dummy-supplier.entity';
import { DummySupplierService } from './dummy-supplier.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DummySupplier])
  ],
  controllers: [DummySupplierController],
  providers: [DummySupplierService],
  exports:[DummySupplierService]
})
export class DummySupplierModule {}
