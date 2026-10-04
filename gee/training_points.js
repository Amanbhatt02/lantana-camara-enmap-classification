// Training point preparation and export
// Internship project: Mapping Invasive Lantana camara with EnMAP Hyperspectral Imagery
// FRI Dehradun

// Define study region
// First polygon
var geometry1 = ee.Geometry.Polygon([
  [ [77.81, 30.42],
    [78.13, 30.37],
    [78.06, 30.10],
    [77.74, 30.15] ]
]);

Map.addLayer(geometry1, {color: 'red'}, 'Polygon 1');

// Second polygon (Example coordinates)
var geometry2 = ee.Geometry.Polygon([
  [ [77.81, 30.42],
    [78.13, 30.37],
    [78.06, 30.10],
    [77.74, 30.15] ]
]);

Map.addLayer(geometry2, {color: 'black'}, 'Polygon 2');

// Center the map
Map.centerObject(geometry1, 10);
// Merge training points 
var training = water.merge(forest).merge(urban).merge(agriculture).merge(grassland)
// Export training points to process in QGIS
Export.table.toDrive({
  collection: training,
  description: 'training',
  folder: 'GEE_Exports' ,
  fileFormat: 'KML'
});
