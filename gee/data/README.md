# Data

This folder documents the datasets used in the project.

## Satellite Imagery

The study used EnMAP Level-2A hyperspectral imagery.

- **Mission:** EnMAP
- **Product:** Level-2A
- **Acquisition date:** 11 November 2023
- **Data access:** EOWEB GeoPortal
- **Study region:** Dehradun, Uttarakhand, India

## Training Data

Training samples were prepared for six classes:

- Water
- Forest
- Urban
- Agriculture
- Grassland
- *Lantana camara*

The initial candidate points for the five non-Lantana classes were generated in Google Earth Engine. These points were subsequently reviewed and filtered in QGIS.

The final training dataset contained **327 samples**.

## Field Data

Field observations for *Lantana camara* were obtained from a larger dataset provided through the Centre of Excellence for Sustainable Land Management (CoE-SLM).

The original field dataset is **not included in this repository** because the field-coordinate data should not be redistributed.

## Data Availability

Large satellite imagery files are not included in this repository. The repository documents the data source and processing workflow instead.

<!-- duplicate copy - to be removed -->
