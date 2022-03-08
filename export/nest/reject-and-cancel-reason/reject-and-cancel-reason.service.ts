import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { RejectAndCancelReason } from './reject-and-cancel-reason.entity';
import { CreateRejectAndCancelReasonDto, DeleteRejectAndCancelReasonDto, SearchRejectAndCancelReasonDto, UpdateRejectAndCancelReasonDto } from './reject-and-cancel-reason.dto';
import { RejectAndCancelReasonPagenation } from './reject-and-cancel-reason.response';

@Injectable()
export class RejectAndCancelReasonService {

    constructor(
        @InjectRepository(RejectAndCancelReason)
        private readonly rejectAndCancelReasonRepository: Repository<RejectAndCancelReason>
      ) {
      }
      async insert(dto: CreateRejectAndCancelReasonDto): Promise<CreateRejectAndCancelReasonDto> {
        const en: CreateRejectAndCancelReasonDto = {
          ...dto,
        };
        const rejectAndCancelReason = this.rejectAndCancelReasonRepository.create(en);
        return await this.rejectAndCancelReasonRepository.save(rejectAndCancelReason);
      }
    
      async updated(dto: UpdateRejectAndCancelReasonDto): Promise<UpdateRejectAndCancelReasonDto> {
        let rejectAndCancelReason = await this.rejectAndCancelReasonRepository.findOne({where: {id: dto.id}});
        rejectAndCancelReason = {
          ...rejectAndCancelReason,
          ...dto,
          id: rejectAndCancelReason.id,
        };
        return await this.rejectAndCancelReasonRepository.save(rejectAndCancelReason);
      }
    
      async deleted(dto: DeleteRejectAndCancelReasonDto) {
        let rejectAndCancelReason = await this.findById(dto.id);
        rejectAndCancelReason = {
          ...rejectAndCancelReason,
          ...dto,
          id: rejectAndCancelReason.id,
          deletedAt: new Date()
        }
        return await this.rejectAndCancelReasonRepository.softRemove(await this.rejectAndCancelReasonRepository.save(rejectAndCancelReason));
      }
    
      async findFilter(dto: SearchRejectAndCancelReasonDto): Promise<RejectAndCancelReasonPagenation> {
        const _order = createOrderForBuilder('rejectAndCancelReason', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.rejectAndCancelReasonRepository
          .createQueryBuilder('reject_and_cancel_reason');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new RejectAndCancelReasonPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<RejectAndCancelReason[]> {
        return await this.rejectAndCancelReasonRepository.find();
      }
    
      async findById(id: number): Promise<RejectAndCancelReason> {
        return await this.rejectAndCancelReasonRepository.findOne({
          where: {id: id},
        });
      }
}
