# mapping-earthquakes

### resources

Data: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json,         
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

Software: visual studio code, javascript, D3, Leaflet, Mapbox API


### overview
the goal of this project was to create an interactive global map that shows up to date earthquake information from the previous 7 days. A popup marker is generated for each earthquake. The size and color of the marker correspond to the magnitude of the earthquake. There is also a tectonic plate overlay. Mapbox API and Leaflet javascript library combined to allow the creation of this map. It is able to be viewed locally using a python http.server. 
