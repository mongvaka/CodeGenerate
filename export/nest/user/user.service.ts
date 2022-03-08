import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { User } from './user.entity';
import { CreateUserDto, DeleteUserDto, SearchUserDto, UpdateUserDto } from './user.dto';
import { UserPagenation } from './user.response';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
      ) {
      }
      async insert(dto: CreateUserDto): Promise<CreateUserDto> {
        const en: CreateUserDto = {
          ...dto,
        };
        const user = this.userRepository.create(en);
        return await this.userRepository.save(user);
      }
    
      async updated(dto: UpdateUserDto): Promise<UpdateUserDto> {
        let user = await this.userRepository.findOne({where: {id: dto.id}});
        user = {
          ...user,
          ...dto,
          id: user.id,
        };
        return await this.userRepository.save(user);
      }
    
      async deleted(dto: DeleteUserDto) {
        let user = await this.findById(dto.id);
        user = {
          ...user,
          ...dto,
          id: user.id,
          deletedAt: new Date()
        }
        return await this.userRepository.softRemove(await this.userRepository.save(user));
      }
    
      async findFilter(dto: SearchUserDto): Promise<UserPagenation> {
        const _order = createOrderForBuilder('user', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.userRepository
          .createQueryBuilder('user');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new UserPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<User[]> {
        return await this.userRepository.find();
      }
    
      async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
          where: {id: id},
        });
      }
}
