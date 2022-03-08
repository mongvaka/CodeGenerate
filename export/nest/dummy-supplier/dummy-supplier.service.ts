import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { DummySupplier } from './dummy-supplier.entity';
import { CreateDummySupplierDto, DeleteDummySupplierDto, SearchDummySupplierDto, UpdateDummySupplierDto } from './dummy-supplier.dto';
import { DummySupplierPagenation } from './dummy-supplier.response';

@Injectable()
export class DummySupplierService {

    constructor(
        @InjectRepository(DummySupplier)
        private readonly dummySupplierRepository: Repository<DummySupplier>
      ) {
      }
      async insert(dto: CreateDummySupplierDto): Promise<CreateDummySupplierDto> {
        const en: CreateDummySupplierDto = {
          ...dto,
        };
        const dummySupplier = this.dummySupplierRepository.create(en);
        return await this.dummySupplierRepository.save(dummySupplier);
      }
    
      async updated(dto: UpdateDummySupplierDto): Promise<UpdateDummySupplierDto> {
        let dummySupplier = await this.dummySupplierRepository.findOne({where: {id: dto.id}});
        dummySupplier = {
          ...dummySupplier,
          ...dto,
          id: dummySupplier.id,
        };
        return await this.dummySupplierRepository.save(dummySupplier);
      }
    
      async deleted(dto: DeleteDummySupplierDto) {
        let dummySupplier = await this.findById(dto.id);
        dummySupplier = {
          ...dummySupplier,
          ...dto,
          id: dummySupplier.id,
          deletedAt: new Date()
        }
        return await this.dummySupplierRepository.softRemove(await this.dummySupplierRepository.save(dummySupplier));
      }
    
      async findFilter(dto: SearchDummySupplierDto): Promise<DummySupplierPagenation> {
        const _order = createOrderForBuilder('dummySupplier', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.dummySupplierRepository
          .createQueryBuilder('dummy_supplier');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new DummySupplierPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<DummySupplier[]> {
        return await this.dummySupplierRepository.find();
      }
    
      async findById(id: number): Promise<DummySupplier> {
        return await this.dummySupplierRepository.findOne({
          where: {id: id},
        });
      }
}
