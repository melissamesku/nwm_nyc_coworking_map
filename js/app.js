//Angular App Module and Controller
angular.module('mapsApp', [])
.controller('MapCtrl', function ($scope) {

    var styleArray = [ // everything enclosed in this var is just map styling thanks to snazzymaps

        {
            featureType: "administrative.locality",
            elementType: "all",
            stylers: [
                {
                    visibility: "simplified"
                },
                {
                    color: "#000000"
                }
            ]
        },
        {
            featureType: "landscape",
            elementType: "all",
            stylers: [
                {
                    visibility: "simplified"
                },
                {
                    color: "#ededed"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "all",
            stylers: [
                {
                    hue: "#ff0000"
                },
                {
                    saturation: -100
                },
                {
                    lightness: 100
                },
                {
                    visibility: "off"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "simplified"
                },
                {
                    color: "#a9a4a4"
                },
                {
                    weight: "1"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {
                    hue: "#008eff"
                },
                {
                    saturation: -93
                },
                {
                    lightness: 31
                },
                {
                    visibility: "on"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels.text",
            stylers: [
                {
                    color: "#000000"
                },
                {
                    visibility: "simplified"
                }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [
                {
                    hue: "#008eff"
                },
                {
                    saturation: -93
                },
                {
                    lightness: -2
                },
                {
                    visibility: "simplified"
                }
            ]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
                {
                    hue: "#007fff"
                },
                {
                    saturation: -90
                },
                {
                    lightness: -8
                },
                {
                    visibility: "simplified"
                }
            ]
        },
        {
            featureType: "transit",
            elementType: "all",
            stylers: [
                {
                    hue: "#e9ebed"
                },
                {
                    saturation: 10
                },
                {
                    lightness: 69
                },
                {
                    visibility: "on"
                }
            ]
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                    visibility: "simplified"
                },
                {
                    color: "#ffffff"
                }
            ]
        }
    ]

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(40.7285182, -73.9592832),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        styles: styleArray
    }

    var mapElement = document.getElementById('map');

    $scope.map = new google.maps.Map(mapElement, mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lng),
            title: info.name
        });
        //I made this, trying to print info on screen NOT in the map
        marker.address = info.address;

        marker.url = info.url; 

        marker.content = '<div class="infoWindowContent"><p>' + info.address + '<br/>' +'<a href="' + info.url + '" target="_blank">' + info.url + '</a>' + '</p></div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h3>' + marker.title + '</h3>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < spaces.length; i++){
        createMarker(spaces[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});