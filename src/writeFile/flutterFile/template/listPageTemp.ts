import { CellItemModel } from "../../../model/cellModel";
import { BaseClass } from "../../../shared/sharedClass/baseClass";
export class ListPageTemp extends BaseClass {
  private masterList: CellItemModel[];
  private template: string[];
  constructor(masterList: CellItemModel[]) {
    super(masterList);
    this.masterList = masterList;
    this.template = [];
  }
  getListPageTemplate() {
    this.initialDataListPage();
    return this.template;
  }
  private initialDataListPage() {
    this.template.push(`import 'package:flutter/material.dart';`);
    this.template.push(
      `import 'package:ice_fac_mobile/Page/Bank/bank_item_page.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Page/Bank/bank_service.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Base/base_dropdown_service.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Base/keywords_model.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Constants/enum_constans.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Function/initial_search_parameter.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/paginator.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/search_condition.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/search_parameter_model.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/SystemModel/sorting_model.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/appbar_list_widget.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Shared/Widget/cs_card.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/Utils/app_setting.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/bank_list_view.dart';`
    );
    this.template.push(
      `import 'package:ice_fac_mobile/ViewModel/search_result.dart';`
    );
    this.template.push(`import 'package:provider/src/provider.dart';`);
    this.template.push(
      `import 'package:pull_to_refresh/pull_to_refresh.dart';`
    );
    this.template.push(``);
    this.template.push(`class BankListPage extends StatefulWidget {`);
    this.template.push(`  const BankListPage({Key key}) : super(key: key);`);
    this.template.push(``);
    this.template.push(`  @override`);
    this.template.push(
      `  _BankListPageState createState() => _BankListPageState();`
    );
    this.template.push(`}`);
    this.template.push(``);
    this.template.push(
      `class _BankListPageState extends State<BankListPage> {`
    );
    this.template.push(`  List<SearchCondition> searchConditionList;`);
    this.template.push(`  List<SortingModel> sortingModelList;`);
    this.template.push(`  int currentPage = 0;`);
    this.template.push(`  int totalPage;`);
    this.template.push(`  String baseModule = 'Bank';`);
    this.template.push(`  BankService bankService;`);
    this.template.push(
      `  BaseDropdownService baseDropdownService = new BaseDropdownService();`
    );
    this.template.push(`  List<BankListView> dataList = [];`);
    this.template.push(`  @override`);
    this.template.push(`  BuildContext get context => super.context;`);
    this.template.push(`  final RefreshController refreshController =`);
    this.template.push(`      RefreshController(initialRefresh: true);`);
    this.template.push(
      `  Future<bool> getDataList({bool isRefresh = false}) async {`
    );
    this.template.push(`    bankService = new BankService();`);
    this.template.push(`    if (isRefresh) {`);
    this.template.push(`      currentPage = 0;`);
    this.template.push(`    }`);
    this.template.push(`    setPaginator(currentPage);`);
    this.template.push(`    SearchResult searchResult = await bankService`);
    this.template.push(
      `        .getBankList(context.read<Appsetting>().searchParameterModel);`
    );
    this.template.push(`    currentPage++;`);
    this.template.push(`    if (searchResult != null) {`);
    this.template.push(`      if (isRefresh) {`);
    this.template.push(
      `        dataList = BankListView.fromArray(searchResult.results);`
    );
    this.template.push(`      } else {`);
    this.template.push(
      `        dataList.addAll(BankListView.fromArray(searchResult.results));`
    );
    this.template.push(`      }`);
    this.template.push(`      totalPage = searchResult.paginator.pageCount;`);
    this.template.push(`      setState(() {});`);
    this.template.push(`      return true;`);
    this.template.push(`    } else {`);
    this.template.push(`      return false;`);
    this.template.push(`    }`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  @override`);
    this.template.push(`  void initState() {`);
    this.template.push(`    super.initState();`);
    this.template.push(`    sortingModelList = getSortingList();`);
    this.template.push(`    searchConditionList = getSearchConditions();`);
    this.template.push(`    initialSearchParameter();`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  @override`);
    this.template.push(`  Widget build(BuildContext context) {`);
    this.template.push(`    return Scaffold(`);
    this.template.push(`      appBar: AppbarList(`);
    this.template.push(`        title: 'BankList',`);
    this.template.push(`        showBackButton: false,`);
    this.template.push(`        onSearch: () {`);
    this.template.push(`          getDataList(isRefresh: true);`);
    this.template.push(`        },`);
    this.template.push(`        onCreate: () {`);
    this.template.push(`          Navigator.push(`);
    this.template.push(`              context,`);
    this.template.push(`              MaterialPageRoute(`);
    this.template.push(`                builder: (context) =>`);
    this.template.push(
      `                    BankItemPage(onCreated: (BankListView item) {`
    );
    this.template.push(`                  setState(() {`);
    this.template.push(`                    dataList.add(item);`);
    this.template.push(`                  });`);
    this.template.push(`                }),`);
    this.template.push(`              ));`);
    this.template.push(`        },`);
    this.template.push(`        searchConditions: searchConditionList,`);
    this.template.push(`        sortingList: sortingModelList,`);
    this.template.push(`      ),`);
    this.template.push(`      body: SmartRefresher(`);
    this.template.push(`        controller: refreshController,`);
    this.template.push(`        enablePullUp: true,`);
    this.template.push(`        onRefresh: () async {`);
    this.template.push(
      `          final result = await getDataList(isRefresh: true);`
    );
    this.template.push(`          if (result) {`);
    this.template.push(`            refreshController.refreshCompleted();`);
    this.template.push(`          } else {`);
    this.template.push(`            refreshController.refreshFailed();`);
    this.template.push(`          }`);
    this.template.push(`        },`);
    this.template.push(`        onLoading: () async {`);
    this.template.push(
      `          final result = await getDataList(isRefresh: false);`
    );
    this.template.push(`          if (result) {`);
    this.template.push(`            refreshController.loadComplete();`);
    this.template.push(`          } else {`);
    this.template.push(`            refreshController.loadFailed();`);
    this.template.push(`          }`);
    this.template.push(`        },`);
    this.template.push(`        child: ListView.separated(`);
    this.template.push(`            itemBuilder: (context, index) {`);
    this.template.push(`              BankListView model = dataList[index];`);
    this.template.push(`              return CsCard(`);
    this.template.push(`                model: model,`);
    this.template.push(`                headerText: model.bank_name,`);
    this.template.push(`                imageLeader: model.bank_code,`);
    this.template.push(`                service: bankService,`);
    this.template.push(
      `                titleText: dataList[index].bank_branch,`
    );
    this.template.push(`                keywords: [`);
    this.template.push(
      `                  new CsKeywordsModel(text: model.bank_code),`
    );
    this.template.push(
      `                  new CsKeywordsModel(text: model.bank_uuid)`
    );
    this.template.push(`                ],`);
    this.template.push(`                collectionList: [],`);
    this.template.push(`              );`);
    this.template.push(`            },`);
    this.template.push(
      `            separatorBuilder: (context, index) => Divider(`
    );
    this.template.push(`                  thickness: 10,`);
    this.template.push(`                ),`);
    this.template.push(`            itemCount: dataList.length),`);
    this.template.push(`      ),`);
    this.template.push(`    );`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  List<SearchCondition> getSearchConditions() {`);
    this.template.push(`    return [`);
    this.template.push(`      new SearchCondition(`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          fieldName: 'company_uuid',`);
    this.template.push(`          columnName: 'company_name',`);
    this.template.push(`          value: 'TEST_DATA',`);
    this.template.push(`          isActive: false,`);
    this.template.push(`          conditionType: ConditionType.TEXT),`);
    this.template.push(`      new SearchCondition(`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          fieldName: 'person',`);
    this.template.push(`          columnName: 'PERSON_NAME',`);
    this.template.push(`          isActive: false,`);
    this.template.push(`          values: ['a', 'b', 'c'],`);
    this.template.push(`          conditionType: ConditionType.LIST,`);
    this.template.push(`          searchParameter: new SearchParameterModel(`);
    this.template.push(
      `              searchCondition: [new SearchCondition()],`
    );
    this.template.push(`              tableKey: '',`);
    this.template.push(`              urlPath: '',`);
    this.template.push(`              paginator: new Paginator(),`);
    this.template.push(`              refTable: '',`);
    this.template.push(`              branchFilterMode: '',`);
    this.template.push(`              isAscs: [],`);
    this.template.push(`              sortColumns: []),`);
    this.template.push(`          dropdownUrl: '/Bank/getBankDropdown'),`);
    this.template.push(`      new SearchCondition(`);
    this.template.push(`          fieldName: 'remark',`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          columnName: 'REMARK',`);
    this.template.push(`          isActive: false,`);
    this.template.push(`          conditionType: ConditionType.DATE_RANGE),`);
    this.template.push(`      new SearchCondition(`);
    this.template.push(`          fieldName: 'provider',`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          columnName: 'PROVIDER',`);
    this.template.push(`          isActive: false,`);
    this.template.push(`          values: ['a', 'b', 'c'],`);
    this.template.push(`          searchParameter: new SearchParameterModel(`);
    this.template.push(
      `              searchCondition: [new SearchCondition()],`
    );
    this.template.push(`              isAscs: [],`);
    this.template.push(`              sortColumns: []),`);
    this.template.push(`          conditionType: ConditionType.TIME_RANGE,`);
    this.template.push(`          dropdownUrl: '/Bank/GetCarDropdown'),`);
    this.template.push(`      new SearchCondition(`);
    this.template.push(`          fieldName: 'inter',`);
    this.template.push(`          columnName: 'INTER_GRADE',`);
    this.template.push(`          isActive: false,`);
    this.template.push(`          conditionType: ConditionType.NUMBER)`);
    this.template.push(`    ];`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  List<SortingModel> getSortingList() {`);
    this.template.push(`    return [`);
    this.template.push(`      new SortingModel(`);
    this.template.push(`          isAsc: false,`);
    this.template.push(`          value: 'employeeName',`);
    this.template.push(`          label: 'EMPLOYEE_NAME',`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          columnName: 'bank_name',`);
    this.template.push(`          isActive: true),`);
    this.template.push(`      new SortingModel(`);
    this.template.push(`          isAsc: false,`);
    this.template.push(`          value: 'companyName',`);
    this.template.push(`          tableName: 'bank_table',`);
    this.template.push(`          label: 'COMPANY_NAME',`);
    this.template.push(`          columnName: 'company_name',`);
    this.template.push(`          isActive: false)`);
    this.template.push(`    ];`);
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  void setPaginator(int pageNumber) {`);
    this.template.push(
      `    context.read<Appsetting>().setPaginator(pageNumber);`
    );
    this.template.push(`  }`);
    this.template.push(``);
    this.template.push(`  void initialSearchParameter() {`);
    this.template.push(`    context.read<Appsetting>().updateSearchParameter(`);
    this.template.push(
      `        InitialSearchParameter.getInitialSearchParameter(`
    );
    this.template.push(`            searchConditionList, sortingModelList));`);
    this.template.push(`  }`);
    this.template.push(`}`);
  }
}
