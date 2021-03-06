angular.module('starter').controller('googleMapPluginCtrl', function($scope) {

    var div = document.getElementById("map_canvas");


    if(typeof(cordova) !== "undefined") {
        // Initialize the map view
        map = plugin.google.maps.Map.getMap(div);

        // Wait until the map is ready status.
        map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);



        function onMapReady() {
            var button = document.getElementById("button");
            button.addEventListener("click", onBtnClicked, false);
        };

        function onBtnClicked() {
            map.showDialog();
        }
    }


});