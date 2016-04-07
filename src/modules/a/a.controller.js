(function() {
  angular.module('cissharpa').controller('cissharpaCtrl', cissharpaCtrl);
  cissharpaCtrl.$inject = ['cIsSharpService'];

  function cissharpaCtrl($scope, cIsSharpService){
    $scope.functionA() = function(){
      console.log('controller a');
      console.log(cIsSharpService.users);
    }
  }
)();
