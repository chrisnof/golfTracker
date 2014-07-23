/*global angular */
/*jshint globalstrict: true*/
// create the controllers and inject Angular's $scope, etc
ngApp.controller('mainCtrl', ['$scope', '$rootScope', '$routeParams', 
	function ($scope, $rootScope, $routeParams) {
		$scope.gettingData = false;
	    $scope.locationInfo = '';
	    $scope.locationObj = {};
	    $scope.balls = JSON.parse(localStorage.getItem('myBalls'));
	    if (!$scope.balls) {
	        $scope.balls = [];
	    }
		$scope.ball = { ballName: "", location: {}};

        // This method accepts a Position object, which contains the
        // current GPS coordinates
        var onSuccess = function (position) {
    	    var result = 'empty';
    	    if(position){
    	        result = 'Latitude: ' + position.coords.latitude + '<br />' +
	                  'Longitude: ' + position.coords.longitude + '<br />' +
	                  'Altitude: ' + position.coords.altitude + '<br />' +
	                  'Accuracy: ' + position.coords.accuracy + '<br />' +
	                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
	                  'Heading: ' + position.coords.heading + '<br />' +
	                  'Speed: ' + position.coords.speed + '<br />' +
	                  'Timestamp: ' + position.timestamp ;
    	    }
    	    $scope.locationInfo = result;
    	    $scope.locationObj = { lat: position.coords.latitude, log: position.coords.longitude, id: position.timestamp}
        };
    
        // onError Callback receives a PositionError object
        var onError = function (error) {
			$scope.gettingData = false;
            var result = 'code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
            $scope.locationInfo = result;
        };
	    
	    $scope.getLocation = function () {
			$scope.gettingData = true;
		    navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
			$scope.gettingData = false;
	    };
	    
		$scope.reset = function () {
			$scope.locationInfo = "";
			$scope.locationObj = {};
			$scope.ball = { ballName: "", location: {}};
		};

		$scope.save = function () {
			$scope.gettingData = true;
		    navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 5000 });
			$scope.ball.location = $scope.locationObj;
			$scope.balls.push($scope.ball);
			localStorage.setItem('myBalls',JSON.stringify($scope.balls));
			$scope.gettingData = false;
			
		};

}]);