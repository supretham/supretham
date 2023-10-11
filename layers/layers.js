var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_srm_ap_1 = new ol.format.GeoJSON();
var features_srm_ap_1 = format_srm_ap_1.readFeatures(json_srm_ap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap_1.addFeatures(features_srm_ap_1);
var lyr_srm_ap_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap_1, 
                style: style_srm_ap_1,
                interactive: true,
                title: 'srm_ap'
            });
var format_srm_ap2_2 = new ol.format.GeoJSON();
var features_srm_ap2_2 = format_srm_ap2_2.readFeatures(json_srm_ap2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap2_2.addFeatures(features_srm_ap2_2);
var lyr_srm_ap2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap2_2, 
                style: style_srm_ap2_2,
                interactive: true,
                title: '<img src="styles/legend/srm_ap2_2.png" /> srm_ap2'
            });
var format_srm_ap_3 = new ol.format.GeoJSON();
var features_srm_ap_3 = format_srm_ap_3.readFeatures(json_srm_ap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap_3.addFeatures(features_srm_ap_3);
var lyr_srm_ap_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap_3, 
                style: style_srm_ap_3,
                interactive: true,
                title: 'srm_ap'
            });
var format_srm_ap_4 = new ol.format.GeoJSON();
var features_srm_ap_4 = format_srm_ap_4.readFeatures(json_srm_ap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap_4.addFeatures(features_srm_ap_4);
var lyr_srm_ap_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap_4, 
                style: style_srm_ap_4,
                interactive: true,
                title: 'srm_ap'
            });
var format_srm_ap1_5 = new ol.format.GeoJSON();
var features_srm_ap1_5 = format_srm_ap1_5.readFeatures(json_srm_ap1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap1_5.addFeatures(features_srm_ap1_5);
var lyr_srm_ap1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap1_5, 
                style: style_srm_ap1_5,
                interactive: true,
                title: '<img src="styles/legend/srm_ap1_5.png" /> srm_ap1'
            });
var format_srm_ap_6 = new ol.format.GeoJSON();
var features_srm_ap_6 = format_srm_ap_6.readFeatures(json_srm_ap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srm_ap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srm_ap_6.addFeatures(features_srm_ap_6);
var lyr_srm_ap_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srm_ap_6, 
                style: style_srm_ap_6,
                interactive: true,
                title: '<img src="styles/legend/srm_ap_6.png" /> srm_ap'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_srm_ap_1.setVisible(true);lyr_srm_ap2_2.setVisible(true);lyr_srm_ap_3.setVisible(true);lyr_srm_ap_4.setVisible(true);lyr_srm_ap1_5.setVisible(true);lyr_srm_ap_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_srm_ap_1,lyr_srm_ap2_2,lyr_srm_ap_3,lyr_srm_ap_4,lyr_srm_ap1_5,lyr_srm_ap_6];
lyr_srm_ap_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap2_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap1_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srm_ap_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap2_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap1_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srm_ap_1.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap2_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap_3.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap_4.set('fieldLabels', {'Name': 'header label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap1_5.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srm_ap_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});