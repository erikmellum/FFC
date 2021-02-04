import React from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../mapMarker/marker';
import { GoogleApiKey } from '../../config';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 0,
  lng: 0,
};

const zoom = 3;

const markers = [
  {
    id: '1',
    get: (id: any) => {
      console.log('get not implemented');
    },
    lat: '59.955413',
    lng: '30.337844',
    title: 'New Leaf',
  }
]
function onMarkerHover(index: any) {
}

function onChildClick() {
  alert('mouse click');
}
function onChildMouseEnter(key: any, childProps: any) {
  console.log('mouse enter');
  const markerId = childProps.marker.get('id');
  const index = markers.findIndex(m => m.get('id') === markerId);
  if (onMarkerHover) {
    onMarkerHover(index);
  }
}
function onChildMouseLeave() {
  console.log('mouse leave');
}
 
function Map() {
  return (
    // Important! Always set the container height explicitly
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChildClick={onChildClick}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
      >
        {markers.map(marker => (
          <Marker
            {...marker}
            // onRightClick={() => props.onMarkerRightClick(marker)}
          />
        ))}
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          
        /> */}
      </GoogleMapReact>
    </div>
  );
}

// function Map() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: GoogleApiKey,
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={3}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

export default React.memo(Map)