import {Injectable} from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {IBasicService} from "../shared/interfaces/basic-service.interface";
import {calculatePaging, createOrderForBuilder} from "../shared/helpers/typeorm-query.helper";
import { Customer } from './customer.entity';
import { CreateCustomerDto, DeleteCustomerDto, SearchCustomerDto, UpdateCustomerDto } from './customer.dto';
import { CustomerPagenation } from './customer.response';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>
      ) {
      }
      async insert(dto: CreateCustomerDto): Promise<CreateCustomerDto> {
        const en: CreateCustomerDto = {
          ...dto,
        };
        const customer = this.customerRepository.create(en);
        return await this.customerRepository.save(customer);
      }
    
      async updated(dto: UpdateCustomerDto): Promise<UpdateCustomerDto> {
        let customer = await this.customerRepository.findOne({where: {id: dto.id}});
        customer = {
          ...customer,
          ...dto,
          id: customer.id,
        };
        return await this.customerRepository.save(customer);
      }
    
      async deleted(dto: DeleteCustomerDto) {
        let customer = await this.findById(dto.id);
        customer = {
          ...customer,
          ...dto,
          id: customer.id,
          deletedAt: new Date()
        }
        return await this.customerRepository.softRemove(await this.customerRepository.save(customer));
      }
    
      async findFilter(dto: SearchCustomerDto): Promise<CustomerPagenation> {
        const _order = createOrderForBuilder('customer', dto.sortBy, dto.orderBy);
        const {skip, limit} = calculatePaging(dto.page, dto.size);
        const builder = this.customerRepository
          .createQueryBuilder('customer');
        const [data, count] = await builder
          .orderBy({..._order})
          .skip(skip)
          .take(limit)
          .getManyAndCount();
    
        const result = new CustomerPagenation();
        result.currentPage = dto.page;
        result.total = count;
        result.perPage = limit;
        result.success = true;
        result.error = [];
        result.totalPage = Math.ceil(count / limit);
        result.data = data;
        return result;
      }
    
      async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find();
      }
    
      async findById(id: number): Promise<Customer> {
        return await this.customerRepository.findOne({
          where: {id: id},
        });
      }
}
