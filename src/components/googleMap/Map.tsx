import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../mapMarker/marker';
import { GoogleApiKey } from '../../config';
import { MapProps } from '../../types/interfaces';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 0,
  lng: 0,
};

const zoom = 3;
 
function Map(props: MapProps) {
  return (
    // Important! Always set the container height explicitly
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {props.markers ? props.markers.map((marker, index) => (
          <Marker
            key = {index}
            marker = {marker}
            lat = {marker.lat}
            lng = {marker.lng}
            // onRightClick={() => props.onMarkerRightClick(marker)}
          />
        )) : ''}
      </GoogleMapReact>
    </div>
  );
}

export default React.memo(Map)