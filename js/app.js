'use strict';

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

// Declare app level module which depends on views, and components
var appTIM = angular.module('appTIM', [
  'ngRoute', 'ngTouch', 'ngAnimate', 'ui.bootstrap', 'ngSanitize'
]);

appTIM.controller('costsAndPaymentsCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/http://dupaspolimi.altervista.org/php/getAssistanceByCategory.php',
    data: {
      category: 'CP'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.assistances = response;
  });
});

appTIM.controller('allAssistanceCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAllAssistance.php',
  }).success(function(response) {
    $scope.assistances = response;
  });
});

appTIM.controller('hightlightsAssistanceCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getHightlightsAssistance.php',
  }).success(function(response) {
    $scope.assistances = response;
  });
});

appTIM.controller('viewCostsAndPaymentsCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAssistanceByID.php',
    data: {
      id: $routeParams.assistanceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.assistance = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewCostsAndPaymentsDevicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getDevicesByAssistanceID.php',
    data: {
      id: $routeParams.assistanceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.devices = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAssistanceByID.php',
    data: {
      id: $routeParams.assistanceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.assistance = angular.fromJson(response[0]);
  });
});

appTIM.controller('NavBarCtrl', ['$scope', function($scope) {
  $scope.isCollapsed = true;
}]);

appTIM.controller('promotionsCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhonePromotions.php',
  }).success(function(response) {
    $scope.phonePromotion = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLivingPromotions.php',
  }).success(function(response) {
    $scope.slivingPromotion = response;
  });
});

appTIM.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
        title: 'Index',
        templateUrl: 'template/home.html'
      })
      .when('/contact', {
        templateUrl: 'template/contact.html'
      })
      .when('/promotions', {
        templateUrl: 'template/promotions.html',
        controller: "promotionsCtrl"
      })
      .when('/assistance/all', {
        templateUrl: 'template/assistance/all.html',
        controller: 'allAssistanceCtrl'
      })
      .when('/assistance/hightlights', {
        templateUrl: 'template/assistance/hightlights.html',
        controller: 'hightlightsAssistanceCtrl'
      })
      .when('/assistance/categories', {
        templateUrl: 'template/assistance/categories.html'
      })
      .when('/assistance/costsandpayments', {
        templateUrl: 'template/assistance/costsandpayments.html',
        controller: 'costsAndPaymentsCtrl'
      })
      .when('/assistance/costsandpayments/:assistanceid/description', {
        templateUrl: 'template/assistance/costsAndPaymentsDescription.html',
        controller: 'viewCostsAndPaymentsCtrl'
      })
      .when('/assistance/costsandpayments/:assistanceid/fordevice', {
        templateUrl: 'template/assistance/costsAndPaymentsDevices.html',
        controller: 'viewCostsAndPaymentsDevicesCtrl'
      })
      .when('/whoweare/innovation', {
        templateUrl: 'template/whoweare/innovation.html'
      })
      .when('/whoweare/projects', {
        templateUrl: 'template/whoweare/projects.html'
      })
      .when('/whoweare/testimonials', {
        templateUrl: 'template/whoweare/testimonials.html'
      })
      .when('/whoweare/', {
        templateUrl: 'template/whoweare/innovation.html'
      })
      .when('/thegroup/description', {
        templateUrl: 'template/thegroup/description.html'
      })
      .when('/thegroup/news', {
        templateUrl: 'template/thegroup/news.html'
      })
      .when('/thegroup/governance', {
        templateUrl: 'template/thegroup/governance.html'
      })
      .when('/thegroup/businessandmarket', {
        templateUrl: 'template/thegroup/businessandmarket.html'
      })
      .when('/thegroup/investors', {
        templateUrl: 'template/thegroup/investors.html'
      })
      .when('/thegroup/', {
        templateUrl: 'template/thegroup/description.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
