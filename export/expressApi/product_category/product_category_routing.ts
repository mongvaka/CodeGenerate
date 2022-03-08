import * as express from "express";
const router = express.Router();
import controller from "../../controller/product_category_controller";
router.post("/getProductCategoryTableList", controller.getProductCategoryTableList);
router.post("/getProductCategoryTableById", controller.getProductCategoryTableById);
router.post("/createProductCategoryTable", controller.createProductCategoryTable);
router.post("/editProductCategoryTable", controller.editProductCategoryTable);
router.post("/deleteProductCategoryTable", controller.deleteProductCategoryTable);
router.post("/getProductCategoryDropdown", controller.getProductCategoryDropdown);
export default router;
