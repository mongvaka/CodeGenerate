export abstract class ScProductCategoryTable {
  static readonly tb_name: string = `product_category`;
  static readonly tb = {
    product_category_uuid: `${ScProductCategoryTable.tb_name}.product_category_uuid`,
    product_category_name: `${ScProductCategoryTable.tb_name}.product_category_name`,
    product_category_description: `${ScProductCategoryTable.tb_name}.product_category_description`,
    company_uuid: `${ScProductCategoryTable.tb_name}.company_uuid`,
    branch_uuid: `${ScProductCategoryTable.tb_name}.branch_uuid`,
    ref_uuid: `${ScProductCategoryTable.tb_name}.ref_uuid`,
    ref_type: `${ScProductCategoryTable.tb_name}.ref_type`,
    is_active: `${ScProductCategoryTable.tb_name}.is_active`,
    create_by: `${ScProductCategoryTable.tb_name}.create_by`,
    create_date: `${ScProductCategoryTable.tb_name}.create_date`,
    update_by: `${ScProductCategoryTable.tb_name}.update_by`,
    update_date: `${ScProductCategoryTable.tb_name}.update_date`,
  };
  static readonly jn = {
    product_category_uuid: `${ScProductCategoryTable.tb_name}_product_category_uuid`,
    product_category_name: `${ScProductCategoryTable.tb_name}_product_category_name`,
    product_category_description: `${ScProductCategoryTable.tb_name}_product_category_description`,
    ref_uuid: `${ScProductCategoryTable.tb_name}_ref_uuid`,
    ref_type: `${ScProductCategoryTable.tb_name}_ref_type`,
    is_active: `${ScProductCategoryTable.tb_name}_is_active`,
    create_by: `${ScProductCategoryTable.tb_name}_create_by`,
    create_date: `${ScProductCategoryTable.tb_name}_create_date`,
    update_by: `${ScProductCategoryTable.tb_name}_update_by`,
    update_date: `${ScProductCategoryTable.tb_name}_update_date`,
  };
  static readonly product_category_uuid: string = `product_category_uuid`;
  static readonly product_category_name: string = `product_category_name`;
  static readonly product_category_description: string = `product_category_description`;
  static readonly company_uuid: string = `company_uuid`;
  static readonly branch_uuid: string = `branch_uuid`;
  static readonly ref_uuid: string = `ref_uuid`;
  static readonly ref_type: string = `ref_type`;
  static readonly is_active: string = `is_active`;
  static readonly create_by: string = `create_by`;
  static readonly create_date: string = `create_date`;
  static readonly update_by: string = `update_by`;
  static readonly update_date: string = `update_date`;
}
