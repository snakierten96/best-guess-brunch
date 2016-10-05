
export class AppComponent {

  static componentName: string = 'tbRoot';

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: './app.component.html'
  };
  
  private $inject = ['$scope', '$log', '$ngRedux'];
  
  constructor(private $scope, private $log, private $ngRedux) {
    let unsubscribe = $ngRedux.connect()
  }

  mapStateToThis(state) {
    return {};
  }

}