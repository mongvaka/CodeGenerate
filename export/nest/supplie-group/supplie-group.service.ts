import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { SupplieGroup } from './supplie-group.entity';
import { CreateSupplieGroupDto, DeleteSupplieGroupDto, SearchSupplieGroupDto, UpdateSupplieGroupDto } from './supplie-group.dto';
import { SupplieGroupPagenation } from './supplie-group.response';

@Injectable()
export class SupplieGroupService {

    constructor(
        @InjectRepository(SupplieGroup)
        private readonly supplieGroupRepository: Repository<SupplieGroup>
      ) {
      }
      async insert(dto: CreateSupplieGroupDto): Promise<CreateSupplieGroupDto> {
        const en: CreateSupplieGroupDto = {
          ...dto,
        };
        const supplieGroup = this.supplieGroupRepository.create(en);
        return await this.supplieGroupRepository.save(supplieGroup);
      }
    
      async updated(dto: UpdateSupplieGroupDto): Promise<UpdateSupplieGroupDto> {
        let supplieGroup = await this.supplieGroupRepository.findOne({where: {id: dto.id}});
        supplieGroup = {
          ...supplieGroup,
          ...dto,
          id: supplieGroup.id,
        };
        return await this.supplieGroupRepository.save(supplieGroup);
      }
    
      async deleted(dto: DeleteSupplieGroupDto) {
        let supplieGroup = await this.findById(dto.id);
        supplieGroup = {
          ...supplieGroup,
          ...dto,
          id: supplieGroup.id,
          deletedAt: new Date()
        }
        return await this.supplieGroupRepository.softRemove(await this.supplieGroupRepository.save(supplieGroup));
      }
    
      async findFilter(dto: SearchSupplieGroupDto): Promise<SupplieGroupPagenation> {
        const _order = createOrderForBuilder('supplie_group', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.supplieGroupRepository
          .createQueryBuilder('supplie_group');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new SupplieGroupPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<SupplieGroup[]> {
        return await this.supplieGroupRepository.find();
      }
    
      async findById(id: number): Promise<SupplieGroup> {
        return await this.supplieGroupRepository.findOne({
          where: {id: id},
        });
      }
}
