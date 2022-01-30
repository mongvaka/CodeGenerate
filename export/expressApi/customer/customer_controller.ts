import respons from "../shared/tools/respons_handler";
import { Request, Response } from "express";
import CustomerService from "../services/customerService";
let createCustomerTable = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.createCustomerTable(req));
  } catch (e: any) {
    respons.getErrorCreate(e.message, req, res);
  }
};
let getCustomerTableList = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.getCustomerTableList(req));
  } catch (e: any) {
    respons.getErrorList(e.message, req, res);
  }
};
let editCustomerTable = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.editCustomerTable(req));
  } catch (e: any) {
    respons.getErrorEdit(e.message, req, res);
  }
};
let deleteCustomerTable = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.deleteCustomerTable(req));
  } catch (e: any) {
    respons.getErrorDelete(e.message, req, res);
  }
};
let getCustomerTableById = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.getCustomerTableById(req));
  } catch (e: any) {
    respons.getErrorView(e.message, req, res);
  }
};
let getCustomerDropdown = async (req: Request, res: Response) => {
  try {
    const customerService: CustomerService = new CustomerService();
    res.status(200).json(await customerService.getCustomerDropdown(req));
  } catch (e: any) {
    respons.getErrorDropdown(e.message, req, res);
  }
};

export default {
  getCustomerTableList,
  getCustomerTableById,
  createCustomerTable,
  editCustomerTable,
  deleteCustomerTable,
  getCustomerDropdown,
};
