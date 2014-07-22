/*global angular */
/*jshint globalstrict: true*/
// create the controllers and inject Angular's $scope, etc
ngApp.controller('mainCtrl', ['$scope', '$rootScope', '$routeParams', 
	function ($scope, $rootScope, $routeParams) {
	
	    $scope.locationInfo = '';
	    var balls = JSON.parse(localStorage.getItem('myBalls'));
	    if (!balls) {
	        balls = {};
	    }

        // This method accepts a Position object, which contains the
        // current GPS coordinates
        var onSuccess = function (position) {
    	    var result = 'empty';
    	    if(position){
	            result = 'Latitude: ' + position.coords.latitude + '\n' +
	                  'Longitude: ' + position.coords.longitude + '\n' +
	                  'Altitude: ' + position.coords.altitude + '\n' +
	                  'Accuracy: ' + position.coords.accuracy + '\n' +
	                  'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
	                  'Heading: ' + position.coords.heading + '\n' +
	                  'Speed: ' + position.coords.speed + '\n' +
	                  'Timestamp: ' + position.timestamp + '\n';
    	    }
    	    $scope.locationInfo = result;
        };
    
        // onError Callback receives a PositionError object
        var onError = function (error) {
            var result = 'code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
            $scope.locationInfo = result;
        };
	    
	    $scope.getLocation = function () {
	        $scope.locationInfo = 'testing';
		    //navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
	    };

}]);