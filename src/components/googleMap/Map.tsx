import React, {useEffect, useState} from 'react'
import GoogleMapReact, {Maps} from 'google-map-react';
import Marker from '../mapMarker/marker';
import { GoogleApiKey } from '../../config';
import { MapProps } from '../../types/interfaces';
import SettingsService from "../../services/SettingsService";

const containerStyle = {
  width: '100%', height: '100vh',
};

const center = {
  lat: 0, lng: 0,
};

const zoom = 3;

function createMapOptions(maps: Maps) {
    return {
        panControl: true,
        disableDoubleClickZoom: true
    };
}
 
function Map(props: MapProps) {
    const [showContactForm, setShowContactForm] = useState<Boolean>(false);
    useEffect(() => {
        retrieveAppSettings();
    }, []);
    const retrieveAppSettings = () => {
        SettingsService.getByName('enable_contact_form')
            .then((response: any) => {
                setShowContactForm(response.data.value);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
  return (
    // Important! Always set the container height explicitly
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={createMapOptions}
      >
        {props.missionaries ? props.missionaries.map((missionary, index) => (
          <Marker
            key = {index}
            missionary = {missionary}
            lat = {missionary.lat}
            lng = {missionary.lng}
            showContactForm = {showContactForm}
          />
        )) : ''}
      </GoogleMapReact>
    </div>
  );
}

export default React.memo(Map)