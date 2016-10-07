import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

import { ngRedux, INgReduxProvider} from 'ng-redux';

// load material basic css
import 'angular-material/angular-material.min.css';

import { AppComponent } from './app/app.component';
//import { rootReducer } from './app/store';

module TrendyBrunch {
  "use strict";

  angular.module('TrendyBrunch', [ 'ngMaterial', 'ngSanitize' ])
    .config((
      $mdThemingProvider: angular.material.IThemingProvider) => {

      // Set theme
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('purple');

      // Configure store
      //$ngReduxProvider.createStoreWith(rootReducer, []);
    })
    
    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
  ;
}