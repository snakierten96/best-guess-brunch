export class TableComponent {
  static componentName: string = "tbTable";

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: TableComponent,
    template: require('./table.component.html')
  };
  
}