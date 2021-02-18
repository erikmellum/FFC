import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Map from '../../components/googleMap/Map';
import { Marker } from '../../types/types';
import './Map.css';

const markers: Marker[] = [
  {
    id: 1,
    lat: '28.3949',
    lng: '84.1240',
    description: 'Bob & Debbie Adhikary serving in Nepal',
    title: 'New Leaf',
  },
  {
    id: 2,
    lat: '39.7285',
    lng: '-121.8375',
    position: 'top',
    description: 'Josh & Kelley Otto serving the Latino population on Chico State campus.',
    title: 'Destino Chico',
  },
  {
    id: 3,
    lat: '39.7285',
    lng: '-121.8375',
    position: 'right',
    description: 'Andrew & Bonnie Burger serving the college student population on the Chico State campus.',
    title: 'CRU - Chico State',
  },
  {
    id: 4,
    lat: '39.7285',
    lng: '-121.8375',
    position: 'left',
    description: 'Summer is with Pioneers Missions and is preparing to serve as a missionary in Central Asia.',
    title: 'Summer Root',
  },
  {
    id: 5,
    lat: '43.2712',
    lng: '26.9361',
    position: 'right',
    description: 'Brenton & Debbie Driscoll are serving as missionaries with International Missions in Bulgaria.',
    title: 'Brenton & Debbie Driscoll',
  },
  {
    id: 6,
    lat: '0.7893',
    lng: '113.9213',
    position: 'right',
    description: 'Joel & Kylie Driscoll are raising support to serve as missionaries with Mission Aviation Fellowship in Indonesia.',
    title: 'Joel & Kylie Driscoll',
  },
  {
    id: 7,
    lat: '32.5149',
    lng: '121.8375',
    position: 'right',
    description: 'Chad Driscoll is finishing a missionary training school located in Tijuana, Mexico.',
    title: 'Chad Driscoll',
  },
  {
    id: 8,
    lat: '35.6762',
    lng: '117.0382',
    position: 'left',
    description: 'Tim & Susan Driscoll are missionaries to Japan serving with OMF International.',
    title: 'Tim & Susan Driscoll',
  },
  {
    id: 9,
    lat: '37.7749',
    lng: '-122.4194',
    position: 'left',
    description: 'Caleb & Alexius Alldrin are on staff with Campus Crusade for Christ, serving the college student population in San Francisco.',
    title: 'CRU - San Francisco',
  },
  {
    id: 10,
    lat: '37.3382',
    lng: '-121.8863',
    position: 'right',
    description: 'Luke and Megan Bryant are on staff with Campus Crusade for Christ, serving the college student population in San Jose.',
    title: 'CRU - San Jose',
  },
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
            <IonTitle size="large">FFC Map</IonTitle>
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
