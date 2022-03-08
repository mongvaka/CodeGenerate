import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentBusinessUnitController } from './department-business-unit.controller';
import { DepartmentBusinessUnit } from './department-business-unit.entity';
import { DepartmentBusinessUnitService } from './department-business-unit.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DepartmentBusinessUnit])
  ],
  controllers: [DepartmentBusinessUnitController],
  providers: [DepartmentBusinessUnitService],
  exports:[DepartmentBusinessUnitService]
})
export class DepartmentBusinessUnitModule {}
