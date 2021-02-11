import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Map from '../../components/googleMap/Map';
import { Marker } from '../../types/types';
import './Map.css';

const marker: Marker = {
  id: 1,
  lat: '28.3949',
  lng: '84.1240',
  title: 'New Leaf',
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
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
