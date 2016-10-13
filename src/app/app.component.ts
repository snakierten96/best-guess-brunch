import { 
  CLEAN,
  OCCUPIED,
  ORDERING 
} from './constants';

export class AppComponent {

  static componentName: string = 'tbRoot';

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    template: require('./app.component.html')    
  };

  party: any = "";

  views: Object[] = [
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment ind'
    }
  ];

  tables: Object[] = [
    {
      id: 1,
      numberOfSeats: 2,
      status: CLEAN
    },
    {
      id: 2,
      numberOfSeats: 4,
      status: CLEAN
    },
    {
      id: 3,
      numberOfSeats: 2,
      status: CLEAN
    }
  ];

  // Define our injectables
  private $mdSidenav: angular.material.ISidenavService;

  constructor(
    $mdSidenav: angular.material.ISidenavService) { 
  
    // Store our injectables
    this.$mdSidenav = $mdSidenav;
      
  }

  toggleMenu() {
    this.$mdSidenav('left').toggle();
  }

}