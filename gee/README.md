# Google Earth Engine

This folder contains the Google Earth Engine (GEE) JavaScript used during the internship for training-data preparation.

## Training Data Preparation

The workflow was used to:

- Define the study region.
- Create candidate training points for five land-cover classes.
- Assign class labels to the training points.
- Merge the class-specific point collections.
- Export the training points for further review and processing in QGIS.

The five classes prepared using GEE were:

- Water
- Forest
- Urban
- Agriculture
- Grassland

The candidate training points were subsequently reviewed and filtered in QGIS. The final training dataset contained **327 labelled samples** across six classes, including *Lantana camara*.

## Script

`training_points.js` contains the Google Earth Engine JavaScript used for generating and exporting the candidate training points.

## Note

The *Lantana camara* ground observations were derived from field data provided through the Centre of Excellence for Sustainable Land Management (CoE-SLM) at FRI, Dehradun.
