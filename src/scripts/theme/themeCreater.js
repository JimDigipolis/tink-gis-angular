'use strict';
(function () {
    var module = angular.module('tink.gis');
    var service = function () {
        class ThemeCreater {
            constructor() {
                this.createARCGISThemeFromJson = function (rawdata, themeData) {
                    let theme = new app.ArcGIStheme(rawdata, themeData);
                    return theme;
                };
                this.createWMSThemeFromJSON = function (data, url) {
                    var wms = new app.wmstheme(data, url);
                    return wms;
                };
            }
        }
        ;
        return new ThemeCreater();
    };
    module.factory('ThemeCreater', service);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVDcmVhdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhlbWVDcmVhdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLENBQUM7SUFDRyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLElBQUksT0FBTyxHQUFHO1FBQ1Y7WUFBQTtnQkFDSSw4QkFBeUIsR0FBRyxVQUFVLE9BQU8sRUFBRSxTQUFTO29CQUNwRCxJQUFJLEtBQUssR0FBb0IsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQTtvQkFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsQ0FBQyxDQUFDO2dCQUNGLDJCQUFzQixHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUc7b0JBQ3hDLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDO1lBQ04sQ0FBQztRQUFELENBQUM7UUFBQSxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndGluay5naXMnKTtcclxuICAgIHZhciBzZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsYXNzIFRoZW1lQ3JlYXRlciB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFSQ0dJU1RoZW1lRnJvbUpzb24gPSBmdW5jdGlvbiAocmF3ZGF0YSwgdGhlbWVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhlbWU6IGFwcC5BcmNHSVN0aGVtZSA9IG5ldyBhcHAuQXJjR0lTdGhlbWUocmF3ZGF0YSwgdGhlbWVEYXRhKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjcmVhdGVXTVNUaGVtZUZyb21KU09OID0gZnVuY3Rpb24gKGRhdGEsIHVybCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdtcyA9IG5ldyBhcHAud21zdGhlbWUoZGF0YSwgdXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3bXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBUaGVtZUNyZWF0ZXIoKTtcclxuICAgIH07XHJcbiAgICBtb2R1bGUuZmFjdG9yeSgnVGhlbWVDcmVhdGVyJywgc2VydmljZSk7XHJcbn0pKCk7XHJcbiJdfQ==