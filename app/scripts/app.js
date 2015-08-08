"use strict";

var app = angular.module('angularDemoApp', []);
app.controller("MainCtrl", function ($scope)
{
  $scope.data = {
    label: "My Button"
  };
});
