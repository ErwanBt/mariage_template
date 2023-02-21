var attribution = new ol.control.Attribution({
    collapsible: false
});

var map1 = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                maxZoom: 18
            })
        })
    ],
    target: 'map1',
    view: new ol.View({
        center: ol.proj.fromLonLat([44.3389, 1.2088]),
        maxZoom: 18,
        zoom: 16
    })
});

var map2 = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                maxZoom: 18
            })
        })
    ],
    target: 'map2',
    view: new ol.View({
        center: ol.proj.fromLonLat([13.4063,-4.7187]),
        maxZoom: 18,
        zoom: 16
    })
});

var map3 = new ol.Map({
    controls: ol.control.defaults({attribution: false}).extend([attribution]),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                url: 'https://tile.openstreetmap.be/osmbe/{z}/{x}/{y}.png',
                attributions: [ ol.source.OSM.ATTRIBUTION, 'Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>' ],
                maxZoom: 18
            })
        })
    ],
    target: 'map3',
    view: new ol.View({
        center: ol.proj.fromLonLat([45.38963,3.85122]),
        maxZoom: 18,
        zoom: 17
    })
});

