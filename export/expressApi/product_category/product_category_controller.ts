import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
import ProductCategoryService from "../services/product_categoryService";
let createProductCategoryTable = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.createProductCategoryTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getProductCategoryTableList = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.getProductCategoryTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editProductCategoryTable = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.editProductCategoryTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteProductCategoryTable = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.deleteProductCategoryTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getProductCategoryTableById = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.getProductCategoryTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getProductCategoryDropdown = async (req: Request, res: Response) => {
  try {
    const product_categoryService: ProductCategoryService = new ProductCategoryService();
    res.status(200).json(await product_categoryService.getProductCategoryDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

export default {
  getProductCategoryTableList,
  getProductCategoryTableById,
  createProductCategoryTable,
  editProductCategoryTable,
  deleteProductCategoryTable,
  getProductCategoryDropdown,
};
