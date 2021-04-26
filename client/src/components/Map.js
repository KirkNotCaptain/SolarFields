import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
import css from '../../public/styles.css';
import SFContext from '../context.js';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = ACCESS_TOKEN;

const Map = () => {
  const context = useContext(SFContext);

  const mapContainer = useRef();

  let [lng, setLng] = useState(-115.60639190059982);
  let [lat, setLat] = useState(32.67369394339296);
  const [zoom, setZoom] = useState(9);

  if (context.solarFieldData.features !== undefined) {
    lng = context.solarFieldData.features[0].geometry.coordinates[0];
    lat = context.solarFieldData.features[0].geometry.coordinates[1];
  }

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    var marker = new mapboxgl.Marker().setLngLat([-70.9, 42.35]).addTo(map);
    return () => map.remove();
  }, [context.solarFieldData]);

  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
