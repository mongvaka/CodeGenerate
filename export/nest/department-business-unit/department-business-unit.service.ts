import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { DepartmentBusinessUnit } from './department-business-unit.entity';
import { CreateDepartmentBusinessUnitDto, DeleteDepartmentBusinessUnitDto, SearchDepartmentBusinessUnitDto, UpdateDepartmentBusinessUnitDto } from './department-business-unit.dto';
import { DepartmentBusinessUnitPagenation } from './department-business-unit.response';

@Injectable()
export class DepartmentBusinessUnitService {

    constructor(
        @InjectRepository(DepartmentBusinessUnit)
        private readonly departmentBusinessUnitRepository: Repository<DepartmentBusinessUnit>
      ) {
      }
      async insert(dto: CreateDepartmentBusinessUnitDto): Promise<CreateDepartmentBusinessUnitDto> {
        const en: CreateDepartmentBusinessUnitDto = {
          ...dto,
        };
        const departmentBusinessUnit = this.departmentBusinessUnitRepository.create(en);
        return await this.departmentBusinessUnitRepository.save(departmentBusinessUnit);
      }
    
      async updated(dto: UpdateDepartmentBusinessUnitDto): Promise<UpdateDepartmentBusinessUnitDto> {
        let departmentBusinessUnit = await this.departmentBusinessUnitRepository.findOne({where: {id: dto.id}});
        departmentBusinessUnit = {
          ...departmentBusinessUnit,
          ...dto,
          id: departmentBusinessUnit.id,
        };
        return await this.departmentBusinessUnitRepository.save(departmentBusinessUnit);
      }
    
      async deleted(dto: DeleteDepartmentBusinessUnitDto) {
        let departmentBusinessUnit = await this.findById(dto.id);
        departmentBusinessUnit = {
          ...departmentBusinessUnit,
          ...dto,
          id: departmentBusinessUnit.id,
          deletedAt: new Date()
        }
        return await this.departmentBusinessUnitRepository.softRemove(await this.departmentBusinessUnitRepository.save(departmentBusinessUnit));
      }
    
      async findFilter(dto: SearchDepartmentBusinessUnitDto): Promise<DepartmentBusinessUnitPagenation> {
        const _order = createOrderForBuilder('department_business_unit', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.departmentBusinessUnitRepository
          .createQueryBuilder('department_business_unit');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new DepartmentBusinessUnitPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<DepartmentBusinessUnit[]> {
        return await this.departmentBusinessUnitRepository.find();
      }
    
      async findById(id: number): Promise<DepartmentBusinessUnit> {
        return await this.departmentBusinessUnitRepository.findOne({
          where: {id: id},
        });
      }
}
