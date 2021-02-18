import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Map from '../../components/googleMap/Map';
import missionaries from '../../data/missionaries';
import './Map.css';

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
            <IonTitle size="large">FFC Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Map
          missionaries = {missionaries}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
