//Data
var spaces = [
    {
        "name":"WorkHouse NYC",
        "lat":40.75674739999999,
        "lng":-73.97999260000002,
        "address":"21 W 46th St, New York, NY 10036",
        "url":"http://www.workhousenyc.com"
    },
    {
        "name":"The Works",
        "lat":40.678236,
        "lng":-73.9958254,
        "address":"401 Smith St, Brooklyn, NY 11231",
        "url":"http://www.thisistheworks.com"
    },
    {
        "name":"New Work City - now closed",
        "lat":40.7189552,
        "lng":-74.0018388,
        "address":"412 Broadway #2, New York, NY 10013",
        "url":"http://nwc.co"
    },
    {
        "name":"The Yard - Lincoln Square",
        "lat":40.7743146,
        "lng":-73.98079670000001,
        "address":"157 Columbus Ave, New York, NY 10023",
        "url":"http://workattheyard.com/locations/lincoln-square"
    },
    {
        "name":"Brooklyn Creative League",
        "lat":40.6773241,
        "lng":-73.98518779999999,
        "address":"540 President St, Brooklyn, NY 11215",
        "url":"http://brooklyncreativeleague.com"
    },
    {
        "name":"Brooklyn Writers Space - Gowanus",
        "lat":40.6761199,
        "lng":-73.986654,
        "address":"185 1st St, Brooklyn, NY 11215",
        "url":"http://brooklynwriters.com"
    },
    {
        "name":"The Bakery",
        "lat":40.7056452,
        "lng":-73.9517007,
        "address":"325 Rutledge St, Brooklyn, NY 11211",
        "url":"http://www.thebakerybrooklyn.com"
    },
    {
        "name":"The Yard - Lower East Side",
        "lat":40.718728,
        "lng":-73.9896868,
        "address":"85 Delancey St, New York, NY 10002",
        "url":"http://workattheyard.com/locations/lower-east-side"
    },
    {
        "name":"SoTechie Spaces",
        "lat":40.7520741,
        "lng":-73.9837787,
        "address":"28 W 39th St, #401, New York, NY 10018",
        "url":"http://sotechiespaces.com"
    },
    {
        "name":"Fueled Collective",
        "lat":40.7242141,
        "lng":-73.99733479999999,
        "address":"568 Broadway, New York, NY 10012",
        "url":"http://fueled.com/coworking-space-nyc/"
    },
    {
        "name":"Industrious",
        "lat":40.680386,
        "lng":-73.970288,
        "address":"594 Dean St, Brooklyn, NY 11238",
        "url":"http://industriousoffice.com/locations/brooklyn"
    },
    {
        "name":"Projective Space",
        "lat":40.7175099,
        "lng":-73.9909217,
        "address":"72 Allen St, 3rd Floor, New York, NY 10002",
        "url":"http://www.projective.co"
    },
    {
        "name":"Edison Community",
        "lat":40.7374716,
        "lng":-73.9922059,
        "address":"89 Fifth Ave, New York, NY 10003",
        "url":"http://edisoncommunity.com"
    },
    {
        "name":"Mission 50 Workspaces",
        "lat":40.7374546,
        "lng":-74.043185,
        "address":"50 Harrison St, Hoboken, NJ 07030",
        "url":"http://www.mission50.com"
    },
    {
        "name":"Blueprint Health",
        "lat":40.7205559,
        "lng":-74.0014182,
        "address":"447 Broadway, New York, NY 10013",
        "url":"http://www.blueprinthealth.org"
    },
    {
        "name":"DaniPad",
        "lat":40.7658914,
        "lng":-73.77217639999999,
        "address":"3825 Bell Blvd., Bayside, NY 11361",
        "url":"https://www.daniweb.com/danipad"
    },
    {
        "name":"HarlemGarage",
        "lat":40.8060325,
        "lng":-73.9554675,
        "address":"318 W 118th St, New York, NY 10026",
        "url":"http://harlemgarage.com"
    },
    {
        "name":"Sunshine Suites",
        "lat":40.7286474,
        "lng":-73.9921007,
        "address":"419 Lafayette St, #2, New York, NY 10003",
        "url":"http://sunshineny.com"
    },
    {
        "name":"Joynture",
        "lat":40.7064581,
        "lng":-74.0091779,
        "address":"48 Wall St, New York, NY 10005",
        "url":"http://joynture.com"
    },
    {
        "name":"Con Artist Collective",
        "lat":40.7196855,
        "lng":-73.9888023,
        "address":"119 Ludlow St, New York, NY 10002",
        "url":"http://conartistnyc.com"
    },
    {
        "name":"AlleyNYC",
        "lat":40.7531589,
        "lng":-73.9893598,
        "address":"500 7th Ave, New York, NY 10018",
        "url":"http://www.alleynyc.com"
    },
    {
        "name":"TEEM Coworking",
        "lat":40.8020923,
        "lng":-73.9451553,
        "address":"1463 5th Ave, New York, NY 10035",
        "url":"http://www.teemcw.com"
    },
    {
        "name":"Cowork|rs - Gowanus",
        "lat":40.677553,
        "lng":-73.992593,
        "address":"68-93 3rd St, Brooklyn, NY",
        "url":"http://cowork.rs/gowanus"
    },
    {
        "name":"The Yard - Williamsburg",
        "lat":40.7231917,
        "lng":-73.952991,
        "address":"33 Nassau Ave, Brooklyn, NY 11222",
        "url":"http://workattheyard.com/locations/williamsburg"
    },
    {
        "name":"Ditmas Workspace",
        "lat":40.6376003,
        "lng":-73.9618067,
        "address":"535 E 17th St, Brooklyn, NY 11226",
        "url":"http://www.ditmasworkspace.com"
    },
    {
        "name":"Neuehaus",
        "lat":40.7410476,
        "lng":-73.984867,
        "address":"110 E 25th St, New York, NY 10010",
        "url":"http://www.neuehouse.com"
    },
    {
        "name":"Nowhere Studio",
        "lat":40.6775499,
        "lng":-73.93911899999999,
        "address":"1582 Atlantic Ave, Brooklyn, NY 11213",
        "url":"http://www.nwrstudios.com"
    },
    {
        "name":"LaunchPads.co",
        "lat":40.6404854,
        "lng":-74.0760683,
        "address":"60 Bay St, #701, Staten Island, NY 10301",
        "url":"http://www.launchpads.co"
    },
    {
        "name":"St. Lydia's Dinner Church and Co-working",
        "lat":40.680357,
        "lng":-73.98952,
        "address":"304 Bond St, Brooklyn, NY 11231",
        "url":"http://www.stlydias.org"
    },
    {
        "name":"Freecandy Creative Space",
        "lat":40.6811362,
        "lng":-73.9628369,
        "address":"905 Atlantic Ave, 2nd Floor, Brooklyn, NY 11238",
        "url":"http://www.freecandy.tv"
    },
    {
        "name":"DUMBO Startup Lab",
        "lat":40.7027217,
        "lng":-73.98688779999999,
        "address":"68 Jay St, #718, Brooklyn, NY 11201",
        "url":"http://dumbostartuplab.com"
    },
    {
        "name":"Coalition - Chelsea",
        "lat":40.7456592,
        "lng":-73.99235019999999,
        "address":"122 W 27th St, New York, NY 10001",
        "url":"http://coalitionspace.com/chelsea"
    },
    {
        "name":"The Yard - Flatiron",
        "lat":40.7442733,
        "lng":-73.9879057,
        "address":"234 5th Ave, New York, NY 10001",
        "url":"http://workattheyard.com/locations/flatiron"
    },
    {
        "name":"Makeshift Society",
        "lat":40.7133449,
        "lng":-73.955551,
        "address":"55 Hope St, Brooklyn, NY 11211",
        "url":"http://makeshiftsociety.com/brooklyn"
    },
    {
        "name":"Coalition - Flatiron",
        "lat":40.7393083,
        "lng":-73.9894285,
        "address":"902 Broadway, New York, NY 10010",
        "url":"http://coalitionspace.com/flatiron"
    },
    {
        "name":"Dean Machine",
        "lat":40.6778528,
        "lng":-73.9558823,
        "address":"1037 Dean St, Brooklyn, NY 11238",
        "url":"http://www.1037deanmachine.com"
    },
    {
        "name":"The Productive",
        "lat":40.7515996,
        "lng":-73.98460419999999,
        "address":"40 W 38th St, New York, NY 10018",
        "url":"http://theproductivenyc.com"
    },
    {
        "name":"Bat Haus",
        "lat":40.7068363,
        "lng":-73.92173629999999,
        "address":"279 Starr St, Brooklyn, NY 11237",
        "url":"http://www.bathaus.com"
    },
    {
        "name":"SOVVOS",
        "lat":40.7439948,
        "lng":-73.9886922,
        "address":"1140 Broadway, Suite 501, New York, NY 10001",
        "url":"http://www.sovvos.com"
    },
    {
        "name":"Brooklyn Desks",
        "lat":40.70604,
        "lng":-73.921579,
        "address":"49 Wyckoff Ave, Brooklyn, NY 11237",
        "url":"http://www.brooklyndesks.com"
    },
    {
        "name":"Made in NY Media Center",
        "lat":40.7044311,
        "lng":-73.98703979999999,
        "address":"30 John St, Brooklyn, NY 11201",
        "url":"http://nymediacenter.com"
    },
    {
        "name":"Brooklyn Writers Desk - Carroll Gardens",
        "lat":40.684438,
        "lng":-73.99525799999999,
        "address":"286 Court St, Brooklyn, NY 11231",
        "url":"http://brooklynwriters.com"
    },
    {
        "name":"Grind - Broadway",
        "lat":40.7536411,
        "lng":-73.9866522,
        "address":"1412 Broadway, 22nd Floor, New York, NY 10018",
        "url":"http://grindspaces.com"
    },
    {
        "name":"You Office - Glen Cove",
        "lat":40.863561,
        "lng":-73.6298781,
        "address":"50 Glen St, Glen Cove NY 11542",
        "url":"http://youoffice.com/50-glen"
    },
    {
        "name":"Spark Lab",
        "lat":40.733915,
        "lng":-73.9913167,
        "address":"833 Broadway, New York, NY 10003",
        "url":"http://www.spark-labs.co"
    },
    {
        "name":"Ensemble",
        "lat":40.7564804,
        "lng":-73.9828936,
        "address":"1150 6th Ave, New York, NY 10036",
        "url":"http://letsensemble.com"
    },
    {
        "name":"SHARED Brooklyn",
        "lat":40.6775777,
        "lng":-74.018435,
        "address":"185 Van Dyke St, Brooklyn, NY 11231",
        "url":"http://www.sharedbrooklyn.com"
    },
    {
        "name":"QNS Collective",
        "lat":40.753893,
        "lng":-73.926073,
        "address":"36-27 36th St, New York, NY 11106",
        "url":"http://www.qnscollective.com"
    },
    {
        "name":"Coalition - Midtown",
        "lat":40.7526704,
        "lng":-73.9878389,
        "address":"1375 Broadway, 10th Floor, New York, NY 10018",
        "url":"http://coalitionspace.com/midtown"
    },
    {
        "name":"Spaces - Long Island City",
        "lat":40.7427897,
        "lng":-73.9355578,
        "address":"31-00 47th Avenue, 3rd Floor, Long Island City, NY 11101",
        "url":"http://www.spacesworks.com/location/new-york-city/long-island-city"
    },
    {
        "name":"Altspace",
        "lat":40.7175895,
        "lng":-73.9998181,
        "address":"120 Walker St, New York, NY 10013",
        "url":"http://altspaceny.com"
    },
    {
        "name":"Creative Workspace @HBA",
        "lat":40.8069794,
        "lng":-73.946181,
        "address":"275 Lenox Ave, New York, NY 10027",
        "url":"http://www.creativeworkspacehba.com"
    },
    {
        "name":"Grind - Park",
        "lat":40.7436697,
        "lng":-73.98352129999999,
        "address":"419 Park Avenue South, 2nd Floor, New York, NY 10016",
        "url":"http://grindspaces.com"
    },
    {
        "name":"iLoft Space",
        "lat":40.7450773,
        "lng":-73.9810074,
        "address":"192 Lexington Ave, 14th Floor, New York, NY 10016",
        "url":"http://www.iloftspace.com"
    },
    {
        "name":"Cowork|rs - Flatiron",
        "lat":40.7401285,"lng":-73.9855201,
        "address":"115 E 23rd St, 3rd Floor, New York, NY 10010",
        "url":"http://cowork.rs/flatiron"
    },
    {
        "name":"The Farm SoHo",
        "lat":40.7205559,
        "lng":-74.0014182,
        "address":"447 Broadway, 2nd Floor, New York, NY 10013",
        "url":"http://thefarmsoho.com"
    },
    {
        "name":"No-Space",
        "lat":40.7285182,
        "lng":-73.9592832,
        "address":"67 West St, #304, Brooklyn, NY 11222",
        "url":"http://notanalternative.org"
    },
    {
        "name":"LaunchPad Long Island",
        "lat":40.7397662,
        "lng":-73.63990439999999,
        "address":"55 Mineola Blvd, Mineola, NY 11501",
        "url":"http://www.launchpadli.com"
    },
    {
        "name":"Indiegrove",
        "lat":40.7198532,
        "lng":-74.04329779999999,
        "address":"121 Newark Ave, Jersey City, NJ 07302",
        "url":"http://indiegrovejc.com"
    },
    {
        "name":"Compound Cowork",
        "lat":40.661958,
        "lng":-73.961151,
        "address":"507 Flatbush Ave, 2nd Floor, New York, NY 11225",
        "url":"http://www.thecompoundcowork.com"
    },
    {
        "name":"You Office - Cedarhurst",
        "lat":40.619452,"lng":-73.726148,
        "address":"91 Carman Avenue, Suite 500, Cedarhurst, NY 11516",
        "url":"http://youoffice.com"
    },
    {
        "name":"Wix Lounge",
        "lat":40.744869,
        "lng":-73.996736,
        "address":"235 W 23rd St, 8th Floor, New York, NY 10011",
        "url":"http://www.wix.com/lounge/new-york"
    },
    {
        "name":"District Cowork - NoMad",
        "lat":40.746275,
        "lng":-73.988213,
        "address":"1204 Broadway, New York, NY 10001",
        "url":"http://www.districtcowork.com"
    },
    {
        "name":"Q Labs",
        "lat":40.7412079,
        "lng":-73.9913107,
        "address":"16 West 22nd St, New York, NY 10010",
        "url":"http://labs.quotidian.co"
    },
    {
        "name":"SPark Workshop Brooklyn [maker space]",
        "lat":40.6578236,
        "lng":-74.0069737,
        "address":"33 34th St, Brooklyn, NY 11232",
        "url":"http://www.sparkworkshopbrooklyn.com"
    },
    {
        "name":"Civic Hall",
        "lat":40.7399443,
        "lng":-73.9910549,
        "address":"156 5th Ave, 2nd Floor, New York, NY 10010",
        "url":"http://civichall.org"
    },
    {
        "name":"Wendy's Subway",
        "lat":40.704080,
        "lng":-73.938008,
        "address":"379 Bushwick Avenue, Brooklyn, NY 11206",
        "url":"http://www.wendyssubway.com"
    },
    {
        "name":"Work Better - Park Ave South",
        "lat":40.7450919,
        "lng":-73.98312949999999,
        "address":"460 Park Ave S, 12th Floor, New York, NY 10016",
        "url":"https://workbetter.us"
    },
    {
        "name":"Work Better - Bryant Park",
        "lat":40.7544048,
        "lng":-73.9863665,
        "address":"1440 Broadway, 23rd Floor, New York, NY 10018",
        "url":"https://workbetter.us"
    },
    {
        "name":"Work Better - Chelsea",
        "lat":40.7399802,
        "lng":-73.9930291,
        "address":"33 West 19th St. 4th Floor, New York, NY 10011",
        "url":"https://workbetter.us"
    },
    {
        "name":"Work Better - Wall Street",
        "lat":40.70690829999999,
        "lng":-74.0096853,
        "address":"40 Wall St. 28th Floor, New York, NY 10005",
        "url":"https://workbetter.us"
    },
    {
        "name":"Work Better - Grand Central West",
        "lat":40.7561507,
        "lng":-73.9827042,
        "address":"1140 Sixth Avenue, 9th Floor, New York, NY 10036",
        "url":"https://workbetter.us"
    },
    {
        "name":"CoLab-Factory",
        "lat":40.6899519,
        "lng":-73.9820896,
        "address":"14-16 Dekalb Ave, Brooklyn, NY 11201",
        "url":"http://colab-factory.com"
    },
    {
        "name":"WeWork - Times Square",
        "lat":40.7551055,
        "lng":-73.9884033,
        "address":"1460 Broadway, New York, NY 10036",
        "url":"https://www.wework.com/locations/new-york-city/times-square"
    },
    {
        "name":"WeWork - Studio Square",
        "lat":40.7549673,
        "lng":-73.9273272,
        "address":"3537 36th Street, Astoria, NY 11106",
        "url":"https://www.wework.com/locations/new-york-city/studio-square"
    },
    {
        "name":"WeWork - NoMad",
        "lat":40.7440668,
        "lng":-73.9874162,
        "address":"79 Madison Ave, New York, NY 10016",
        "url":"https://www.wework.com/locations/new-york-city/nomad"
    },
    {
        "name":"WeWork - FiDi",
        "lat":40.7040802,
        "lng":-74.0134361,
        "address":"85 Broad St, New York, NY 10004",
        "url":"https://www.wework.com/locations/new-york-city/fidi"
    },
    {
        "name":"WeWork - Wall Street",
        "lat":40.7040798,
        "lng":-74.0200291,
        "address":"110 Wall St, New York, NY 10005",
        "url":"https://www.wework.com/locations/new-york-city/wall-street"
    },
    {
        "name":"WeWork - 42nd Street",
        "lat":40.7055793,
        "lng":-74.0227367,
        "address":"205 E 42nd St, New York, NY 10017",
        "url":"https://www.wework.com/locations/new-york-city/42nd-street"
    },
    {
        "name":"WeWork - Soho West",
        "lat":40.7055787,
        "lng":-74.0227796,
        "address":"175 Varick Street, New York, NY 10014",
        "url":"https://www.wework.com/locations/new-york-city/soho-west"
    },
    {
        "name":"WeWork - Bryant Park",
        "lat":40.7530146,
        "lng":-73.9864596,
        "address":"54 W 40th Street, New York, NY 10018",
        "url":"https://www.wework.com/locations/new-york-city/bryant-park"
    },
    {
        "name":"WeWork - Fulton Center",
        "lat":40.7109906,
        "lng":-74.0106385,
        "address":"222 Broadway, 19th Floor, New York, NY 10038",
        "url":"https://www.wework.com/locations/new-york-city/fulton-center"
    },
    {
        "name":"WeWork - Chelsea",
        "lat":40.7403679,
        "lng":-73.997841,
        "address":"115 W 18th St, New York, NY 10011",
        "url":"https://www.wework.com/locations/new-york-city/chelsea"
    },
    {
        "name":"WeWork - West Broadway",
        "lat":40.7235234,
        "lng":-74.0044022,
        "address":"379 West Broadway, 2nd Floor, New York, NY 10012",
        "url":"https://www.wework.com/locations/new-york-city/west-broadway"
    },
    {
        "name":"WeWork - Park South",
        "lat":40.7403679,
        "lng":-73.9978357,
        "address":"401 Park Avenue South, 10th Floor, New York, NY 10016",
        "url":"https://www.wework.com/locations/new-york-city/park-south"
    },
    {
        "name":"WeWork - Gramercy",
        "lat":40.739496,
        "lng":-73.987914,
        "address":"120 E 23rd St, New York, NY 10010",
        "url":"https://www.wework.com/locations/new-york-city/gramercy"
    },
    {
        "name":"WeWork - Soho",
        "lat":40.7394956,
        "lng":-73.994507,
        "address":"154 Grand St., New York, NY 10013",
        "url":"https://www.wework.com/locations/new-york-city/soho"
    },
    {
        "name":"WeWork - Madison",
        "lat":40.739495,
        "lng":-73.9945499,
        "address":"261 Madison Avenue, New York, NY 10016",
        "url":"https://www.wework.com/locations/new-york-city/madison"
    },
    {
        "name":"WeWork - Empire State",
        "lat":40.7481713,
        "lng":-73.9865472,
        "address":"349 5th Avenue, New York, NY 10016",
        "url":"https://www.wework.com/locations/new-york-city/empire-state"
    },
    {
        "name":"WeWork - Meatpacking",
        "lat":40.7481709,
        "lng":-73.9931402,
        "address":"1 Little West 12th Street, New York, NY 10014",
        "url":"https://www.wework.com/locations/new-york-city/meatpacking"
    },
    {
        "name":"WeWork - Williamsburg",
        "lat":40.7165905,
        "lng":-73.9628195,
        "address":"240 Bedford Ave, Brooklyn, NY 11249",
        "url":"https://www.wework.com/locations/new-york-city/williamsburg"
    },
    {
        "name":"WeWork - John St.",
        "lat":40.7165851,
        "lng":-73.9957418,
        "address":"11 John St, New York, NY 10038",
        "url":"https://www.wework.com/locations/new-york-city/john-st"
    },
    {
        "name":"WeWork - Brooklyn Heights",
        "lat":40.7008392,
        "lng":-73.9896424,
        "address":"195 Montague Street, Brooklyn, NY 11201",
        "url":"https://www.wework.com/locations/new-york-city/brooklyn-heights"
    },
    {
        "name":"WeWork - Irving Place",
        "lat":40.7008179,
        "lng":-74.0576,
        "address":"33 Irving Pl, New York, NY 10003",
        "url":"https://www.wework.com/locations/new-york-city/irving-place"
    },
    {
        "name":"WeWork - Soho South",
        "lat":40.7007756,
        "lng":-74.0580153,
        "address":"428 Broadway, New York, NY 10013",
        "url":"https://www.wework.com/locations/new-york-city/soho-south"
    }
]

//Angular App Module and Controller
angular.module('mapsApp', [])
.controller('MapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(40.7399443, -73.9910549),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
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

        // for printing info in the scrolling box of info div, not in the map
        marker.address = info.address;

        marker.url = info.url; 

        marker.content = '<div class="infoWindowContent">' + info.address + '<br>' + '<a href="' + info.url + '" target="_blank">' + info.url + '</a>' + '</div>';

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
