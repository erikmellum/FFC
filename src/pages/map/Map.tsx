import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Map from '../../components/googleMap/Map';
import { Marker } from '../../types/types';
import './Map.css';

const marker: Marker = {
  id: 1,
  get: (id: any) => {
    console.log('get not implemented');
  },
  showHint: false,
  lat: '28.3949',
  lng: '84.1240',
  title: 'New Leaf',
}

function onMarkerHover(index: number, childProps: any) {
  console.log('hover');
}

function onChildClick(index: number, childProps: any) {
  alert(`mouse click ${index}`);
  markers[index].showHint = true;
}
function onChildMouseEnter(index: number, childProps: any) {
  console.log('mouse enter');
  if (onMarkerHover) {  
    onMarkerHover(index, childProps);
  }
}
function onChildMouseLeave() {
  console.log('mouse leave');
}

const markers: Marker[] = [
  marker,
];
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FFC Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map
          markers = {markers}
          onChildClick = {onChildClick}
          onChildMouseEnter = {onChildMouseEnter}
          onChildMouseLeave = {onChildMouseLeave}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
