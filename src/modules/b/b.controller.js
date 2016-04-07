(function() {
  angular.module('cissharpb').controller('cIsSharpbCtrl', CIsSharpbCtrl);

  CIsSharpbCtrl.$inject = ['cissharpa'];

  function CIsSharpbCtrl($scope, cissharpb){
    $scope.functionB = function(){
      console.log('Controller B');
      cissharpa.functionA();
    }
  }
)();
