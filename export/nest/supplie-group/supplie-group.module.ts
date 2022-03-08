import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplieGroupController } from './supplie-group.controller';
import { SupplieGroup } from './supplie-group.entity';
import { SupplieGroupService } from './supplie-group.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplieGroup])
  ],
  controllers: [SupplieGroupController],
  providers: [SupplieGroupService],
  exports:[SupplieGroupService]
})
export class SupplieGroupModule {}
