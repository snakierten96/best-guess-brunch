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
import { rootReducer } from './store';

module TrendyBrunch {
  "use strict";

  angular.module('TrendyBrunch', [ 'ngMaterial', 'ngSanitize', 'ngRedux' ])
    .config(( $ngReduxProvider: INgReduxProvider ) => {
      $ngReduxProvider(rootReducer, []);
    })
  ;
}