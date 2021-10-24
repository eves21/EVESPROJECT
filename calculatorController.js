var convertidorApp = angular.module('convertidorApp',[]);
convertidorApp.controller('calculatorController', ['$scope', function($scope) {
  console.log("Convertidor");

  
  // Función para calcular el pago total
  $scope.calcular = function(){
    console.log('click')
    const moneda = $scope.moneyInput;
    const dollar = 3836.71;
   
    
    if(!moneda){
      swal("Atención!","No ha ingresado ningun valor","warning");
    }
else{
  dollarcop= moneda*dollar;
  $scope.dollarcop=dollarcop;
}
  }
     
  


  

}]);