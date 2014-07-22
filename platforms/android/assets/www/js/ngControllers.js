/*global angular */
/*jshint globalstrict: true*/
angular.module('ngApp')

// create the controllers and inject Angular's $scope, etc
.controller('mainCtrl', ['$scope', '$rootScope',  'ngDialog', '$routeParams', function ($scope, $rootScope, ngDialog, $routeParams) {
	var balls =  JSON.parse(localStorage.getItem("myBalls"));
	if (!balls) {
	    balls = { };
	}
	
	$scope.getLocation = function () {
	    // This method accepts a Position object, which contains the
	    // current GPS coordinates
	    var onSuccess = function (position) {
	        var result = 'Latitude: ' + position.coords.latitude + '\n' +
                  'Longitude: ' + position.coords.longitude + '\n' +
                  'Altitude: ' + position.coords.altitude + '\n' +
                  'Accuracy: ' + position.coords.accuracy + '\n' +
                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
                  'Heading: ' + position.coords.heading + '\n' +
                  'Speed: ' + position.coords.speed + '\n' +
                  'Timestamp: ' + position.timestamp + '\n';
	        $scope.location = result;
	    };

	    // onError Callback receives a PositionError object
	    var onError = function (error) {
	        var result = 'code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
	        $scope.location = result;
	    };

	    navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
	};

	//// raised from onNfcReady event 
	//$scope.saveUser = function (user) {
	//	$scope.user = user;
	//};
	//// raised from onNfc event
	//$scope.saveRfid = function (data) {
	//	$scope.rfid = data;
	//	if($state.is('home') && !$scope.gettingRegData)
	//	{
	//		$scope.gettingRegData = true;
	//		vipService.getRegData(data
	//				, function(dataReg){
	//					if(dataReg.Id == 0){
	//						$scope.gettingRegData = false;
	//						$rootScope.status = 'DENY';
	//						$rootScope.msg = 'registration not found';
	//					}
	//					else{
	//						vipService.postVIPData(dataReg.Id, $rootScope.vip.EventName, $scope.user
	//								, function(){
	//									$scope.gettingRegData = false;
	//									$rootScope.status = 'PASS';
	//									$rootScope.msg = '';
	//									$rootScope.vip.Count = $rootScope.vip.Count + 1;
	//									localStorage.setItem("myVip", JSON.stringify($rootScope.vip));
	//								}, function(modelMsg){
	//									$scope.gettingRegData = false;
	//									$rootScope.status = 'DENY';
	//									$rootScope.msg = modelMsg;
	//								});
	//					}
	//				},  function(){
	//					$scope.gettingRegData = false;
	//					$rootScope.status = 'DENY';
	//					$rootScope.msg = 'registration service error';
	//				});
	//		$scope.resetData();
	//	}
	//};
	

   // $scope.edit = $rootScope.vip;
	
   // $scope.cancel = function(){
   // 	$rootScope.status = '';
   // 	$rootScope.msg = '';
   // 	$state.go('home');
   // };
	
   // $scope.reset = function(){
   // 	$rootScope.status = '';
   // 	$rootScope.msg = '';
   // 	if(confirm('Are you sure that you want to do this? \n(both the event name and count will be reset)')){
   // 		$scope.edit = {"EventName": "", "Count": 0};
   // 		localStorage.setItem("myVip",JSON.stringify($scope.edit));
   // 		$rootScope.vip = angular.copy($scope.edit);
   // 	}
   // };
	
   // $scope.update = function(vip){
   // 	$rootScope.status = '';
   // 	$rootScope.msg = '';
   // 	localStorage.setItem("myVip",JSON.stringify(vip));
   // 	$rootScope.vip = angular.copy(vip);
   // 	$state.go('home');
   // };
	
   //$scope.setColor = function(val){
   //     if(val === 'PASS'){
   //       return {color: "green"}
   //     }
   //     else{
   //       return {color: "red"}
   //     }
   //   };

   //   $scope.resetStatus = function(){
   // 	  $rootScope.status = '';
   // 	  $rootScope.msg = '';
   //   };
	
}]);