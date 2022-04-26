import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {useState, useEffect} from 'react';
import Map from '../../components/googleMap/Map';
/*import missionaries from '../../data/missionaries';*/
import './Map.css';
import MissionaryDataService from "../../services/MissionaryService";
import IMissionaryData from '../../types/Missionary';

const Home: React.FC = () => {
    const [missionaries, setMissionaries] = useState<Array<IMissionaryData>>([]);
    useEffect(() => {
        retrieveMissionaries();
    }, []);
    const retrieveMissionaries = () => {
        MissionaryDataService.getAll()
            .then((response: any) => {
                setMissionaries(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };
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
                    missionaries={missionaries}
                />
            </IonContent>
        </IonPage>
    );
};

export default Home;
