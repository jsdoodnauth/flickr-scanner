'use strict';

angular.module('flickrScannerApp.auth', [
  'flickrScannerApp.constants',
  'flickrScannerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
