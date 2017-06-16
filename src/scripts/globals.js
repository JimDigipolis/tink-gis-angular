var ThemeStatus = {
    UNMODIFIED: 0,
    NEW: 1,
    UPDATED: 2,
    DELETED: 3
};
var LayerType = {
    LAYER: 0,
    GROUP: 1
};
var ActiveInteractieButton = {
    GEEN: 'geen',
    IDENTIFY: 'identify',
    SELECT: 'select',
    METEN: 'meten',
    WATISHIER: 'watishier'
};
var Gis = {
    Arcgissql: '',
    BaseUrl: 'https://geoint.antwerpen.be/',
    LocatieUrl: 'https://geoint-a.antwerpen.be/arcgissql/rest/services/A_DA/Locaties/MapServer',
    GeometryUrl: 'https://geoint.antwerpen.be/arcgissql/rest/services/Utilities/Geometry/GeometryServer/buffer'
};
Gis.Arcgissql = Gis.BaseUrl + 'arcgissql/rest/';
var Solr = {
    BaseUrl: 'https://esb-app1-o.antwerpen.be/v1/'
};
const DrawingOption = {
    GEEN: 'geen',
    NIETS: '',
    AFSTAND: 'afstand',
    OPPERVLAKTE: 'oppervlakte',
    LIJN: 'lijn',
    VIERKANT: 'vierkant',
    POLYGON: 'polygon'
};
var Global = { Mobile: false };
var ThemeType = {
    ESRI: 'esri',
    WMS: 'wms'
};
var Style = {
    DEFAULT: {
        fillOpacity: 0,
        color: 'blue',
        weight: 4
    },
    ADD: {
        fillOpacity: 0,
        color: 'green',
        weight: 5
    },
    REMOVE: {
        fillOpacity: 0,
        color: 'red',
        weight: 5
    },
    HIGHLIGHT: {
        weight: 7,
        color: 'red',
        fillOpacity: 0.5
    },
    COREBUFFER: {
        weight: 7,
        color: 'lightgreen',
        fillOpacity: 0.5
    },
    BUFFER: {
        fillColor: '#00cc00',
        color: '#00cc00',
        weight: 1,
        opacity: 0.9,
        fillOpacity: 0.3
    }
};
var Scales = [
    250000,
    200000,
    150000,
    100000,
    50000,
    25000,
    20000,
    15000,
    12500,
    10000,
    7500,
    5000,
    2500,
    2000,
    1500,
    1250,
    1000,
    750,
    500,
    250,
    100
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdsb2JhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBSSxXQUFXLEdBQUc7SUFDZCxVQUFVLEVBQUUsQ0FBQztJQUNiLEdBQUcsRUFBRSxDQUFDO0lBQ04sT0FBTyxFQUFFLENBQUM7SUFDVixPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUM7QUFDRixJQUFJLFNBQVMsR0FBRztJQUNaLEtBQUssRUFBRSxDQUFDO0lBQ1IsS0FBSyxFQUFFLENBQUM7Q0FDWCxDQUFDO0FBQ0YsSUFBSSxzQkFBc0IsR0FBRztJQUN6QixJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsU0FBUyxFQUFFLFdBQVc7Q0FDekIsQ0FBQztBQUNGLElBQUksR0FBRyxHQUFHO0lBQ04sU0FBUyxFQUFFLEVBQUU7SUFDYixPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDLFVBQVUsRUFBRSwrRUFBK0U7SUFDM0YsV0FBVyxFQUFFLDhGQUE4RjtDQUM5RyxDQUFBO0FBQ0QsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hELElBQUksSUFBSSxHQUFHO0lBQ1AsT0FBTyxFQUFFLHFDQUFxQztDQUNqRCxDQUFBO0FBQ0QsTUFBTSxhQUFhLEdBQUc7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsRUFBRTtJQUNULE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLElBQUksRUFBRSxNQUFNO0lBQ1osUUFBUSxFQUFFLFVBQVU7SUFDcEIsT0FBTyxFQUFFLFNBQVM7Q0FDckIsQ0FBQztBQUNGLElBQUksTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFBO0FBQy9CLElBQUksU0FBUyxHQUFHO0lBQ1osSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsS0FBSztDQUNiLENBQUM7QUFDRixJQUFJLEtBQUssR0FBRztJQUNSLE9BQU8sRUFBRTtRQUNMLFdBQVcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNaO0lBQ0QsR0FBRyxFQUFFO1FBQ0QsV0FBVyxFQUFFLENBQUM7UUFDZCxLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxDQUFDO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDSixXQUFXLEVBQUUsQ0FBQztRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNELFNBQVMsRUFBRTtRQUNQLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLEtBQUs7UUFDWixXQUFXLEVBQUUsR0FBRztLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLFlBQVk7UUFDbkIsV0FBVyxFQUFFLEdBQUc7S0FDbkI7SUFDRCxNQUFNLEVBQUU7UUFDSixTQUFTLEVBQUUsU0FBUztRQUNwQixLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLEVBQUUsQ0FBQztRQUNULE9BQU8sRUFBRSxHQUFHO1FBQ1osV0FBVyxFQUFFLEdBQUc7S0FDbkI7Q0FDSixDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUc7SUFDVCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7Q0FDTixDQUFDIn0=