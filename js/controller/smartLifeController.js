'use strict';

var appTIM = angular.module('appTIM');

appTIM.controller('allSLServicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAllSLServices.php'
  }).success(function(response) {
    $scope.services = response;
  });
});

appTIM.controller('personalServicesCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServicesByCategory.php',
    data: {
      category: 'PE'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.services = response;
  });
});

appTIM.controller('viewPersonalServicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServiceByID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.service = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewPersonalServicesDevicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhonesBySLServiceID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phones = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLivingBySLServiceID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.slivings = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServiceByID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.service = angular.fromJson(response[0]);
  });
});

appTIM.controller('healthAndWellnessCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServicesByCategory.php',
    data: {
      category: 'HE'
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.services = response;
  });
});

appTIM.controller('viewHealthAndWellnessCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServiceByID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.service = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewHealthAndWellnessDevicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhonesBySLServiceID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phones = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLivingBySLServiceID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.slivings = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServiceByID.php',
    data: {
      id: $routeParams.serviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.service = angular.fromJson(response[0]);
  });
});

appTIM.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/smartlife/all', {
        templateUrl: 'template/smartLifeServices/all.html',
        controller: 'allSLServicesCtrl'
      })
      .when('/smartlife/categories', {
        templateUrl: 'template/smartLifeServices/categories.html'
      })
      .when('/smartlife/healthandwellness', {
        templateUrl: 'template/smartLifeServices/healthAndWellness.html',
        controller: 'healthAndWellnessCtrl'
      })
      .when('/smartlife/healthandwellness/:serviceid/description', {
        templateUrl: 'template/smartLifeServices/healthAndWellnessDescription.html',
        controller: 'viewHealthAndWellnessCtrl'
      })
      .when('/smartlife/healthandwellness/:serviceid/activation', {
        templateUrl: 'template/smartLifeServices/healthAndWellnessActivation.html',
        controller: 'viewHealthAndWellnessCtrl'
      })
      .when('/smartlife/healthandwellness/:serviceid/fordevice', {
        templateUrl: 'template/smartLifeServices/healthAndWellnessDevices.html',
        controller: 'viewHealthAndWellnessDevicesCtrl'
      })
      .when('/smartlife/healthandwellness/:serviceid/subscribe', {
        templateUrl: 'template/smartLifeServices/healthAndWellnessSubscribe.html',
        controller: 'viewHealthAndWellnessCtrl'
      })
      .when('/smartlife/personalservices', {
        templateUrl: 'template/smartLifeServices/personalServices.html',
        controller: 'personalServicesCtrl'
      })
      .when('/smartlife/personalservices/:serviceid/description', {
        templateUrl: 'template/smartLifeServices/personalServiceDescription.html',
        controller: 'viewPersonalServicesCtrl'
      })
      .when('/smartlife/personalservices/:serviceid/activation', {
        templateUrl: 'template/smartLifeServices/personalServiceActivation.html',
        controller: 'viewPersonalServicesCtrl'
      })
      .when('/smartlife/personalservices/:serviceid/subscribe', {
        templateUrl: 'template/smartLifeServices/personalServiceSubscribe.html',
        controller: 'viewPersonalServicesCtrl'
      })
      .when('/smartlife/personalservices/:serviceid/fordevice', {
        templateUrl: 'template/smartLifeServices/personalServiceDevices.html',
        controller: 'viewPersonalServicesDevicesCtrl'
      });
  }
]);
