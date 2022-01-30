import { Request } from "express";
import { CustomerViewModel } from "../view_model/customerViewModel";
import { CustomerRepository } from "../model/customerRepository";
import { SearchParameter, SelectItems } from "../system_model";
import mTools from "../shared/tools/tools";
import { thowThisError } from "../shared/tools/error_handler";
export default class CustomerService {
  createCustomerTable = async (req: Request) => {
    try {
      const model: CustomerViewModel = new CustomerViewModel(req.body);
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.create(model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getCustomerTableList = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.getCustomerList(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  editCustomerTable = async (req: Request) => {
    try {
      const model: CustomerViewModel = new CustomerViewModel(req.body);
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.edit(model.customer_uuid, model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  deleteCustomerTable = async (req: Request) => {
    try {
      const id: string = req.body.primaryKey;
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.delete(id);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getCustomerTableById = async (req: Request) => {
    try {
      const primaryKey: string = req.body.primaryKey;
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.getById(primaryKey);
    } catch (error: any) {
      thowThisError(error);
    }
  };

  getCustomerDropdown = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const customerRepository: CustomerRepository = new CustomerRepository(req);
      return await customerRepository.getDropdown(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
}
