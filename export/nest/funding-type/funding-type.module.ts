import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundingTypeController } from './funding-type.controller';
import { FundingType } from './funding-type.entity';
import { FundingTypeService } from './funding-type.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FundingType])
  ],
  controllers: [FundingTypeController],
  providers: [FundingTypeService],
  exports:[FundingTypeService]
})
export class FundingTypeModule {}
