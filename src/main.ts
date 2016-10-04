import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';

// load material basic css
import 'angular-material/angular-material.min.css';

import { AppComponent } from './app/app.component';

module TrendyBrunch {
  "use strict";

  angular.module('TrendyBrunch', [ 'ngMaterial', 'ngSanitize' ])
    .config(function() {})
  ;
}