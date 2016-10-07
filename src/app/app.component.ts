
export class AppComponent {

  static componentName: string = 'tbRoot';

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    template: require('./app.component.html')
  };

  // Define our injectables
  private $mdSidenav: angular.material.ISidenavService;

  constructor(
    $mdSidenav: angular.material.ISidenavService) { 
  
    // Store our injectables
    this.$mdSidenav = $mdSidenav;
      
  }

}