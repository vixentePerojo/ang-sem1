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
            if(sinVacios>0){

              for(var i=0;i<eltos.length;i++)
              {
                if(eltos[i].trim().length<=0){
                    sinVacios--;
                }
              }
              if(sinVacios<=0)
              {
                $scope.idMensaje="redone";
                $scope.finalMessage="Please insert data first";
              }
              else if(sinVacios<=3){
                  $scope.finalMessage="Enjoy!";
              }
              else {
                $scope.finalMessage="Too much!";
              }
          }
          else {

          }
        }
        else {
          $scope.idMensaje="redone";
          $scope.finalMessage="Please insert data first";
        }

      };
  }

})();
