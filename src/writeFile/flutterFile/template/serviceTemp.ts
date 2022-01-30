import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ServiceTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getServiceTemplate() {
    this.initialDataService();
    return this.template;
  }
  private initialDataService() {
    this.template.push(`import 'dart:convert';`);
    this.template.push(``);
    this.template.push(`import 'package:http/http.dart';`);
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Base/base_service.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Constants/base_url.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/${this.moduleNameSnakeNonTable}_item_view.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/${this.moduleNameSnakeNonTable}_list_view.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/search_result.dart';`
    );
    this.template.push(``);
    this.template.push(`class ${this.moduleName}Service {`);
    this.template.push(`  final String _moduleName = '/${this.moduleName}';`);
    this.template.push(`  BaseService _baseService = new BaseService();`);
    this.template.push(
      `  Future<SearchResult> get${this.moduleName}List(SearchParameterModel searchParameter) async {`
    );
    this.template.push(
      `    String url = '$_moduleName/get${this.moduleName}TableList';`
    );
    this.template.push(
      `    Response res = await _baseService.getList(url, searchParameter);`
    );
    this.template.push(
      `    Map<dynamic, dynamic> body = jsonDecode(res.body);`
    );
    this.template.push(`    if (res.statusCode == 200) {`);
    this.template.push(`      return SearchResult.formJson(body);`);
    this.template.push(`    } else {`);
    this.template.push(`      return null;`);
    this.template.push(`    }`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(
      `  Future<${this.moduleName}ItemView> get${this.moduleName}ItemById(String id) async {`
    );
    this.template.push(
      `    String url = '$_moduleName/get${this.moduleName}TableById';`
    );
    this.template.push(
      `    Response res = await _baseService.getView(url, id);`
    );
    this.template.push(`    dynamic body = jsonDecode(res.body);`);
    this.template.push(`    return ${this.moduleName}ItemView.fromJson(body);`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(
      `  Future<${this.moduleName}ItemView> create${this.moduleName}(${this.moduleName}ItemView model) async {`
    );
    this.template.push(
      `    String url = '$_moduleName/create${this.moduleName}Table';`
    );
    this.template.push(`    Response res =`);
    this.template.push(
      `        await _baseService.create(url, model.getFromControllerToJson());`
    );
    this.template.push(`    dynamic body = jsonDecode(res.body);`);
    this.template.push(`    return ${this.moduleName}ItemView.fromJson(body);`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(
      `  Future<${this.moduleName}ItemView> edit${this.moduleName}(${this.moduleName}ItemView model) async {`
    );
    this.template.push(
      `    String url = '$_moduleName/edit${this.moduleName}Table';`
    );
    this.template.push(`    Response res =`);
    this.template.push(
      `        await _baseService.edit(url, model.getFromControllerToJson());`
    );
    this.template.push(`    dynamic body = jsonDecode(res.body);`);
    this.template.push(`    return ${this.moduleName}ItemView.fromJson(body);`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(
      `  Future<${this.moduleName}ListView> delete${this.moduleName}(String id) async {`
    );
    this.template.push(
      `    String url = '$_moduleName/delete${this.moduleName}Table';`
    );
    this.template.push(
      `    Response res = await _baseService.delete(url, id);`
    );
    this.template.push(`    dynamic body = jsonDecode(res.body);`);
    this.template.push(`    return ${this.moduleName}ListView.fromJson(body);`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(
      `  Future<${this.moduleName}ItemView> initialCreateData() async {`
    );
    this.template.push(`    return new ${this.moduleName}ItemView();`);
    this.template.push(`  }`);
    this.template.push(`}`);
  }
}
