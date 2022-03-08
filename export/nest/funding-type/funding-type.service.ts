import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { FundingType } from './funding-type.entity';
import { CreateFundingTypeDto, DeleteFundingTypeDto, SearchFundingTypeDto, UpdateFundingTypeDto } from './funding-type.dto';
import { FundingTypePagenation } from './funding-type.response';

@Injectable()
export class FundingTypeService {

    constructor(
        @InjectRepository(FundingType)
        private readonly fundingTypeRepository: Repository<FundingType>
      ) {
      }
      async insert(dto: CreateFundingTypeDto): Promise<CreateFundingTypeDto> {
        const en: CreateFundingTypeDto = {
          ...dto,
        };
        const fundingType = this.fundingTypeRepository.create(en);
        return await this.fundingTypeRepository.save(fundingType);
      }
    
      async updated(dto: UpdateFundingTypeDto): Promise<UpdateFundingTypeDto> {
        let fundingType = await this.fundingTypeRepository.findOne({where: {id: dto.id}});
        fundingType = {
          ...fundingType,
          ...dto,
          id: fundingType.id,
        };
        return await this.fundingTypeRepository.save(fundingType);
      }
    
      async deleted(dto: DeleteFundingTypeDto) {
        let fundingType = await this.findById(dto.id);
        fundingType = {
          ...fundingType,
          ...dto,
          id: fundingType.id,
          deletedAt: new Date()
        }
        return await this.fundingTypeRepository.softRemove(await this.fundingTypeRepository.save(fundingType));
      }
    
      async findFilter(dto: SearchFundingTypeDto): Promise<FundingTypePagenation> {
        const _order = createOrderForBuilder('fundingType', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.fundingTypeRepository
          .createQueryBuilder('funding_type');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new FundingTypePagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<FundingType[]> {
        return await this.fundingTypeRepository.find();
      }
    
      async findById(id: number): Promise<FundingType> {
        return await this.fundingTypeRepository.findOne({
          where: {id: id},
        });
      }
}
