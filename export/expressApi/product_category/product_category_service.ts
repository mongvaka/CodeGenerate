import { Request } from "express";
import { ProductCategoryViewModel } from "../view_model/product_categoryViewModel";
import { ProductCategoryRepository } from "../model/product_categoryRepository";
import { SearchParameter, SelectItems } from "../system_model";
import mTools from "../shared/tools/tools";
import { thowThisError } from "../shared/tools/error_handler";
export default class ProductCategoryService {
  createProductCategoryTable = async (req: Request) => {
    try {
      const model: ProductCategoryViewModel = new ProductCategoryViewModel(req.body);
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.create(model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getProductCategoryTableList = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.getProductCategoryList(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  editProductCategoryTable = async (req: Request) => {
    try {
      const model: ProductCategoryViewModel = new ProductCategoryViewModel(req.body);
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.edit(model.product_category_uuid, model);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  deleteProductCategoryTable = async (req: Request) => {
    try {
      const id: string = req.body.primaryKey;
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.delete(id);
    } catch (error: any) {
      thowThisError(error);
    }
  };
  getProductCategoryTableById = async (req: Request) => {
    try {
      const primaryKey: string = req.body.primaryKey;
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.getById(primaryKey);
    } catch (error: any) {
      thowThisError(error);
    }
  };

  getProductCategoryDropdown = async (req: Request) => {
    try {
      const searchParameter: SearchParameter = mTools.getSearchParameter(
        req.body
      );
      const product_categoryRepository: ProductCategoryRepository = new ProductCategoryRepository(req);
      return await product_categoryRepository.getDropdown(searchParameter);
    } catch (error: any) {
      thowThisError(error);
    }
  };
}
