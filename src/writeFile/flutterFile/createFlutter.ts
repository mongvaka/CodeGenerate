import { ServiceTemp } from "./template/serviceTemp";
import { ListPageTemp } from "./template/listPageTemp";
import { ItemPageTemp } from "./template/itemPageTemp";
import { CellItemModel } from "./../../model/cellModel";
import { ViewModelTemp } from "./template/modelTemp";
import { CreateFileService } from "../../shared/createFileService";
import { BaseClass } from "../../shared/sharedClass/baseClass";
import { FormatType } from "../../shared/constans";
export class CreateFlutter extends BaseClass {
  masterList: CellItemModel[];
  itemPageTemp: ItemPageTemp;
  listPageTemp: ListPageTemp;
  viewModelTemp: ViewModelTemp;
  serviceTemp: ServiceTemp;
  private createFileService: CreateFileService;

  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.createFileService = new CreateFileService();
    this.itemPageTemp = new ItemPageTemp(masterList);
    this.listPageTemp = new ListPageTemp(masterList);
    this.viewModelTemp = new ViewModelTemp(masterList);
    this.serviceTemp = new ServiceTemp(masterList);
  }
  createFlutterApp() {
    this.createListPage();
    this.createItemPage();
    this.createService();
    this.createItemView();
    this.createListView();
  }
  private createListPage() {
    const directory: string = `export/flutter/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_list_page`;
    this.createFileService.saveFile(
      this.listPageTemp.getListPageTemplate(),
      FormatType.DART,
      fileName,
      directory
    );
  }
  private createItemPage() {
    const directory: string = `export/flutter/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_item_page`;
    this.createFileService.saveFile(
      this.itemPageTemp.getItemPageTemplate(),
      FormatType.DART,
      fileName,
      directory
    );
  }
  private createService() {
    const directory: string = `export/flutter/${this.moduleNameSnakeNonTable}`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_service`;
    this.createFileService.saveFile(
      this.serviceTemp.getServiceTemplate(),
      FormatType.DART,
      fileName,
      directory
    );
  }
  private createItemView() {
    const directory: string = `export/flutter/${this.moduleNameSnakeNonTable}/models`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_item_view`;
    this.createFileService.saveFile(
      this.viewModelTemp.getItemModelTemplate(),
      FormatType.DART,
      fileName,
      directory
    );
  }
  private createListView() {
    const directory: string = `export/flutter/${this.moduleNameSnakeNonTable}/models`;
    const fileName: string = `${this.moduleNameSnakeNonTable}_list_view`;
    this.createFileService.saveFile(
      this.viewModelTemp.getItemListModelTemplate(),
      FormatType.DART,
      fileName,
      directory
    );
  }
}
