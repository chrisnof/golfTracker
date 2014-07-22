// data service for calls to web services
ngApp.service('ngService', ['$http', function($http) {
	//this.getRegData = function(rfid, success, failure) {
    //	if(rfid) 
    //	{
	//        $http.defaults.useXDomain = true;
	//    	var response = $http.get('https://esurancesxsw2014.thesocialtab.net/api/register?rfid=' + rfid, { timeout: 15000 })
	//      	.success(function (data, status, headers, config) {
	//	        if(status == 200) {
	//		        if(success != null) success(data);
	//	        }
	//	        else {
	//		        if(success != null) success({Id: 0});
	//	        }
	//	      })
	//	      .error(function(data, status, headers, config) {
	//    		  if(success != null) success({Id: 0});
	//    	  });
	//	}
    //	else
    //	{
	//        if(success != null) success(null);
    //	}
    //}
	//this.postVIPData = function(id, vipEvent, user, success, failure) {
    //	if(id > 0) 
    //	{
    //		var scn = {"Id": 0, "RegistrationId": id, "EventName": vipEvent, "InsertUser": user};
	//        $http.defaults.useXDomain = true;
    //  		//console.log(JSON.stringify(scn));
	//    	var response = $http.post('https://esurancesxsw2014.thesocialtab.net/api/vipscan', scn, { timeout: 15000 })
	//      	.success(function (data, status, headers, config) {
	//	        if(status == 201) {
	//		        if(success != null) success(data);
	//	        }
	//	        else {
	//	        	if(data.ModelState && data.ModelState.error){
	//		        	if(failure != null) failure(data.ModelState && data.ModelState.error[0]);
	//	        	}
	//	        	else{
	//		        	if(failure != null) failure('unspecified service response');
	//	        	}
	//	        }
	//	      })
	//	      .error(function(data, status, headers, config) {
	//	        	if(data.ModelState && data.ModelState.error){
	//		        	if(failure != null) failure(data.ModelState && data.ModelState.error[0]);
	//	        	}
	//	        	else{
	//		        	if(failure != null) failure('unspecified service error');
	//	        	}
	//    	  });
	//	}
    //	else
    //	{
	//        if(success != null) success(null);
    //	}
    //}
}]);

//Cordova ready service - listens to deviceready
angular.module('ngApp')
    .factory('cordovaReady', function() {
    return function (fn) {
        var queue = [];
        var impl = function () {
        queue.push(Array.prototype.slice.call(arguments));
    };
              
    document.addEventListener('deviceready', function () {
        queue.forEach(function (args) {
            fn.apply(this, args);
        });
        impl = fn;
    }, false);
              
    return function () {
        return impl.apply(this, arguments);
        };
    };
});