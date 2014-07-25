/*global angular */
/*jshint globalstrict: true*/
// create the controllers and inject Angular's $scope, etc
ngApp.controller('mainCtrl', ['$scope', '$rootScope', '$routeParams',
	function ($scope, $rootScope, $routeParams) {
		$scope.gettingData = false;
	    $scope.locationInfo = '';
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
    	    $scope.gettingData = false;
    	    $scope.$apply();
        };
        var onSuccessAdd = function (position) {
            if (position) {
                $scope.ball.location = { lat: position.coords.latitude, log: position.coords.longitude, id: position.timestamp };
                $scope.balls.push($scope.ball);
                localStorage.setItem('myBalls', JSON.stringify($scope.balls));
            }
            $scope.gettingData = false;
            $scope.$apply();
        };
    
        // onError Callback receives a PositionError object
        var onError = function (error) {
			$scope.gettingData = false;
            var result = 'code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
            $scope.locationInfo = result;
            $scope.$apply();
        };
	    
	    $scope.getLocation = function () {
			$scope.gettingData = true;
		    navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
	    };
	    
		$scope.reset = function () {
			$scope.locationInfo = "";
			$scope.locationObj = {};
			$scope.ball = { ballName: "", location: {}};
		};

		$scope.resetAll = function () {
		    if (confirm('Are you sure that you want to do this?')) {
		        $scope.locationInfo = "";
		        $scope.locationObj = {};
		        $scope.ball = { ballName: "", location: {} };
		        $scope.balls = [];
		        localStorage.setItem('myBalls', JSON.stringify($scope.balls));
		    }
		};

		$scope.save = function () {
		    if ($scope.ball.ballName) {
		        $scope.gettingData = true;
		        navigator.geolocation.getCurrentPosition(onSuccessAdd, onError, { timeout: 5000 });
		    }
		};

		$scope.showMap = function (ball) {
		    if (ball) {
		        $scope.ball = ball;
		        showBingMap($scope.ball.location.lat, $scope.ball.location.log)
		        $scope.showModal = true;
		        //ngDialog.open({
		        //    template: 'partials/dlgMap.htm',
		        //    className: 'ngdialog-theme-default',
		        //    scope: $scope
		        //});
		    }
		};
		$scope.cancel = function () {
		    $scope.showModal = false;
		};
		//$rootScope.$on('ngDialog.opened', function (e, $dialog) {
		//    showBingMap($scope.ball.location.lat, $scope.ball.location.log);
		//});

}]);