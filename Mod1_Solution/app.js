(function () {
  'user strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
$scope.items='';
$scope.message='';
$scope.style={};
$scope.box={};


$scope.SayMessage = function(){
  console.log("itendd",$scope.items)
  if ($scope.items !==''){
    $scope.NumberItesm=0;
		var arr = $scope.items.split(',');

      var TotalItem=0;
			for(var i =0; i<arr.length; i++){
				if(arr[i].trim() !=='')
					TotalItem++;
			}
      $scope.NumberItesm=TotalItem;
      console.log("number",$scope.NumberItesm);

       if($scope.NumberItesm>0)
         {
          if ($scope.NumberItesm<=3){
             $scope.message="Enjoy!"
             }
          if ($scope.NumberItesm>3){
             $scope.message="Too much!"
             }
             $scope.style={
               "color":"green"
             };
             $scope.box={
               "border-color":"green"
             };
           }

         else{
           ItemEnter();
             }
  }
  else{
      ItemEnter();
       }
  }


function ItemEnter(){
  $scope.message="Please enter data first"
  $scope.style={
    "color":"red"
  };
  $scope.box={
    "border-color": "red"
  };
}
};
})();

///      var message = document.getElementById("lunch-menu").value;
//const words = message.split(',');
//console.log(words);
//console.log(words.lenght);
//document.getElementById("menu").innerHTML = words.length;
//ng-if words.length >3{
//}
