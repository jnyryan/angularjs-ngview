var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider.when('/',
              {
                templateUrl: "views/home.html",
                controller: "HomeCtrl"
              })
})

app.controller("HomeCtrl", function($scope) {
      $scope.model = {
                message: "This is my app!!!"
      }
})

app.controller("Page2Ctrl", function($scope) {
      $scope.model = {
                message: "Page2!!!"
      }
})
