'use strict';

var appTIM = angular.module('appTIM');

appTIM.controller('phoneCtrl', function($scope, $http) {
  $http.post("http://dupaspolimi.altervista.org/php/getAllPhones.php").success(function(response) {
    $scope.phones = response;
  });
});

appTIM.controller('allDevicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAllPhones.php'
  }).success(function(response) {
    $scope.phones = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAllSLivingAndTV.php'
  }).success(function(response) {
    $scope.SLiving = response;
  });
});

appTIM.controller('viewPhoneCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhone.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phone = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewPhoneBuyCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhone.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phone = angular.fromJson(response[0]);
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhonePromotionById.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phonePromotion = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewPhoneSLServicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServicesByDeviceID.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.services = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhone.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phone = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewPhoneAssistanceCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAssistanceByDeviceID.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.assistances = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getPhone.php',
    data: {
      id: $routeParams.phoneid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.phone = angular.fromJson(response[0]);
  });
});

appTIM.controller('tvAndSmartLivingCtrl', function($scope, $http) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAllSLivingAndTV.php',
  }).success(function(response) {
    $scope.devices = response;
  });
});

appTIM.controller('viewTvAndSmartLivingCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getTvAndSmartLivingByID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.device = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewTvAndSmartLivingSLServicesCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLServicesByDeviceID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.services = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getTvAndSmartLivingByID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.device = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewTvAndSmartLivingAssistanceCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getAssistanceByDeviceID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.assistances = response;
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getTvAndSmartLivingByID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.device = angular.fromJson(response[0]);
  });
});

appTIM.controller('viewTvAndSmartLivingBuyCtrl', function($scope, $http, $routeParams) {
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getTvAndSmartLivingByID.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.device = angular.fromJson(response[0]);
  });
  $http({
    method: 'POST',
    url: 'http://dupaspolimi.altervista.org/php/getSLivingPromotionById.php',
    data: {
      id: $routeParams.deviceid
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).success(function(response) {
    $scope.devicePromotion = angular.fromJson(response[0]);
  });
});

appTIM.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/devices/categories', {
      templateUrl: 'template/devices/categories.html'
    })
    .when('/devices/all', {
      templateUrl: 'template/devices/all.html',
      controller: 'allDevicesCtrl'
    })
    .when('/devices/phones', {
      templateUrl: 'template/devices/phones.html',
      controller: 'phoneCtrl'
    })
    .when('/devices/phones/:phoneid/presentation', {
      templateUrl: 'template/devices/phonePresentation.html',
      controller: 'viewPhoneCtrl'
    })
    .when('/devices/phones/:phoneid/characteristics', {
      templateUrl: 'template/devices/phoneCharacteristics.html',
      controller: 'viewPhoneCtrl'
    })
    .when('/devices/phones/:phoneid/smartlife', {
      templateUrl: 'template/devices/phoneSLServices.html',
      controller: 'viewPhoneSLServicesCtrl'
    })
    .when('/devices/phones/:phoneid/assistance', {
      templateUrl: 'template/devices/phoneAssistance.html',
      controller: 'viewPhoneAssistanceCtrl'
    })
    .when('/devices/phones/:phoneid/buy', {
      templateUrl: 'template/devices/phoneBuy.html',
      controller: 'viewPhoneBuyCtrl'
    })
    .when('/devices/tvandsmartliving', {
      templateUrl: 'template/devices/TvAndSmartLiving.html',
      controller: 'tvAndSmartLivingCtrl'
    })
    .when('/devices/tvandsmartliving/:deviceid/presentation', {
      templateUrl: 'template/devices/TvAndSmartLivingPresentation.html',
      controller: 'viewTvAndSmartLivingCtrl'
    })
    .when('/devices/tvandsmartliving/:deviceid/characteristics', {
      templateUrl: 'template/devices/TvAndSmartLivingCharacteristics.html',
      controller: 'viewTvAndSmartLivingCtrl'
    })
    .when('/devices/tvandsmartliving/:deviceid/buy', {
      templateUrl: 'template/devices/TvAndSmartLivingBuy.html',
      controller: 'viewTvAndSmartLivingBuyCtrl'
    })
    .when('/devices/tvandsmartliving/:deviceid/smartlife', {
      templateUrl: 'template/devices/TvAndSmartLivingSLServices.html',
      controller: 'viewTvAndSmartLivingSLServicesCtrl'
    })
    .when('/devices/tvandsmartliving/:deviceid/assistance', {
      templateUrl: 'template/devices/TvAndSmartLivingAssistance.html',
      controller: 'viewTvAndSmartLivingAssistanceCtrl'
    });
  }
]);
