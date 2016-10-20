(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.inject = ['$scope'];
  function LunchCheckController($scope){
      $scope.countElements = function(){
        if($scope.elements!=undefined){
          $scope.idMensaje="greenone";
          var eltos = $scope.elements.split(',');
          var sinVacios=eltos.length;
          for(var i=0;i<eltos.length;i++)
          {
            if(eltos[i].length<=0){
                sinVacios--;
            }

          }
          console.log(sinVacios);
          if(sinVacios<=3){
              $scope.finalMessage="Enjoy!";
          }
          else {
            $scope.finalMessage="Too much!";
          }
        }
        else {
          $scope.idMensaje="redone";
          $scope.finalMessage="Please insert data first";
        }

      };
  }

})();
