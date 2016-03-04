'use strict';
(function () {
    var module = angular.module('tink.gis.angular');
    var mapEvents = function (map, MapService, MapData) {
        var _mapEvents = {};
        map.on('draw:drawstart', function (event) {
            console.log('draw started');
            MapData.IsDrawing = true;
            MapData.CleanMap();
        });
        var berkenOmtrek = function (layer) {
            // Calculating the distance of the polyline
            var tempLatLng = null;
            var totalDistance = 0.00000;
            _.each(layer._latlngs, function (latlng) {
                if (tempLatLng == null) {
                    tempLatLng = latlng;
                    return;
                }
                console.log(tempLatLng.distanceTo(latlng) + " m");
                totalDistance += tempLatLng.distanceTo(latlng);
                tempLatLng = latlng;
            });
            return totalDistance.toFixed(2);
        };
        map.on('click', function (event) {
            console.log('click op map! Is drawing: ' + MapData.IsDrawing);
            if (!MapData.IsDrawing) {
                MapData.CleanMap();
                switch (MapData.ActiveInteractieKnop) {
                    case ActiveInteractieButton.IDENTIFY:
                        MapService.Identify(event, 2);
                        break;
                    case ActiveInteractieButton.SELECT:
                        if (MapData.SelectedLayer.id === '') {
                            console.log('Geen layer selected! kan dus niet opvragen');
                        }
                        else {
                            MapService.Select(event);
                        }
                        break;
                    case ActiveInteractieButton.WATISHIER:
                        MapService.WatIsHier(event);
                        break;
                    case ActiveInteractieButton.METEN:

                        break;
                    default:
                        console.log('MAG NIET!!!!!!!!');
                        break;
                }
            }
            else {
                // MapData.DrawingObject = event;
                console.log("DrawingObject: ");
                console.log(MapData.DrawingObject);
                switch (MapData.DrawingType) {
                    case DrawingOption.AFSTAND:
                        break;
                    case DrawingOption.OPPERVLAKTE:
                        break;
                    default:
                        console.log("Aant drawen zonder een gekent type!!!!!!");
                        break;
                }
            }
        });


        map.on('draw:created', function (e) {
            console.log('draw created');
            console.log(e)
            switch (MapData.ActiveInteractieKnop) {
                case ActiveInteractieButton.SELECT:
                    if (MapData.SelectedLayer.id == '') {
                        console.log('Geen layer selected! kan dus niet opvragen');
                    }
                    else {
                        MapService.Query(event);
                    }
                    break;
                case ActiveInteractieButton.METEN:
                    switch (MapData.DrawingType) {
                        case DrawingOption.AFSTAND:
                            var omtrek = berkenOmtrek(e.layer);
                            e.layer.bindPopup('Afstand: ' + omtrek + ' meters');
                            e.layer.openPopup();
                            break;
                        case DrawingOption.OPPERVLAKTE:
                            var omtrek = berkenOmtrek(e.layer);
                            var popuptekst = '<p>Opp: ' + (LGeo.area(e.layer) / 1000000).toFixed(2) + ' km<sup>2</sup></p>'
                                + '<p>Omtrek: ' + omtrek + ' m</p>';
                            e.layer.bindPopup(popuptekst);
                            e.layer.openPopup();
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    console.log('MAG NIET!!!!!!!!');
                    break;
            }
            MapData.IsDrawing = false;
        });


        return _mapEvents;
    };
    module.factory('MapEvents', mapEvents);
})();

