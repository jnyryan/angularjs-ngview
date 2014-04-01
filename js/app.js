var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider.when('/',
              {
                templateUrl: "views/dashboard.html",
                controller: "DashboardCtrl"
              })
              .when('/report',{
                templateUrl: "views/report.html",
                controller: "ReportCtrl"
              })
})

app.controller("DashboardCtrl", function($scope) {
      $scope.model = {
                message: "Dashboard!!!"
      }
})

app.controller("ReportCtrl", function($scope) {
      $scope.model = {
                message: "Report!!!"
      }
})
