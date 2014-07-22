
var app = {
    initialize: function () {
        this.bind();
    },
    bind: function () {
        document.addEventListener('deviceready', this.onInternetReady, false);
        document.addEventListener('online', this.onInternetReady, false);
        document.addEventListener('offline', this.onInternetReady, false);
        document.addEventListener('backbutton', this.onBackKeyDown, false);
    },

    onInternetReady: function () {

        var networkState = navigator.connection.type;
        //console.log('networkState: ' + networkState);

        // Connection.NONE
        if (networkState == 'none') {
            app.receivedEvent('onInternetReady bad');
        }
        else
            app.receivedEvent('onInternetReady good');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var idList = id.split(' ');
        if (idList.length > 1) {
            var parentElement = document.getElementById(idList[0]);
            var badElement = parentElement.querySelector('.bad');
            var goodElement = parentElement.querySelector('.good');

            if (idList[1] == 'good') {
                badElement.setAttribute('style', 'display:none;');
                goodElement.setAttribute('style', 'display:block;');
            }
            else {
                badElement.setAttribute('style', 'display:block;');
                goodElement.setAttribute('style', 'display:none;');
            }
        }
    },

    onBackKeyDown: function () {
        // don't do anything, we don't like back
    }
};