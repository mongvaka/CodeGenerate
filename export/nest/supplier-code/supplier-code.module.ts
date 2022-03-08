import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierCodeController } from './supplier-code.controller';
import { SupplierCode } from './supplier-code.entity';
import { SupplierCodeService } from './supplier-code.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierCode])
  ],
  controllers: [SupplierCodeController],
  providers: [SupplierCodeService],
  exports:[SupplierCodeService]
})
export class SupplierCodeModule {}
