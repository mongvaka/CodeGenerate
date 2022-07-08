import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { SupplierCode } from './supplier-code.entity';
import { CreateSupplierCodeDto, DeleteSupplierCodeDto, SearchSupplierCodeDto, UpdateSupplierCodeDto } from './supplier-code.dto';
import { SupplierCodePagenation } from './supplier-code.response';

@Injectable()
export class SupplierCodeService {

    constructor(
        @InjectRepository(SupplierCode)
        private readonly supplierCodeRepository: Repository<SupplierCode>
      ) {
      }
      async insert(dto: CreateSupplierCodeDto): Promise<CreateSupplierCodeDto> {
        const en: CreateSupplierCodeDto = {
          ...dto,
        };
        const supplierCode = this.supplierCodeRepository.create(en);
        return await this.supplierCodeRepository.save(supplierCode);
      }
    
      async updated(dto: UpdateSupplierCodeDto): Promise<UpdateSupplierCodeDto> {
        let supplierCode = await this.supplierCodeRepository.findOne({where: {id: dto.id}});
        supplierCode = {
          ...supplierCode,
          ...dto,
          id: supplierCode.id,
        };
        return await this.supplierCodeRepository.save(supplierCode);
      }
    
      async deleted(dto: DeleteSupplierCodeDto) {
        let supplierCode = await this.findById(dto.id);
        supplierCode = {
          ...supplierCode,
          ...dto,
          id: supplierCode.id,
          deletedAt: new Date()
        }
        return await this.supplierCodeRepository.softRemove(await this.supplierCodeRepository.save(supplierCode));
      }
    
      async findFilter(dto: SearchSupplierCodeDto): Promise<SupplierCodePagenation> {
        const _order = createOrderForBuilder('supplier_code', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.supplierCodeRepository
          .createQueryBuilder('supplier_code');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new SupplierCodePagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<SupplierCode[]> {
        return await this.supplierCodeRepository.find();
      }
    
      async findById(id: number): Promise<SupplierCode> {
        return await this.supplierCodeRepository.findOne({
          where: {id: id},
        });
      }
}
