import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol} from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Missionaries.scss';
/*import missionaries from '../../data/missionaries';*/

import MissionaryDataService from "../../services/MissionaryService";
import IMissionaryData from '../../types/Missionary';
import ContactModal from "../../components/ContactModal/ContactModal";

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
                    <IonTitle>FFC Missionaries</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">FFC Missionaries</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {missionaries.map(missionary => (
                    <IonCard key={missionary.id}>
                        <IonRow class="ion-justify-content-start">
                            <IonCol size="2">
                                <img className="missionary-photo" src={missionary.photo} alt={missionary.description}/>
                            </IonCol>
                            <IonCol size="10">
                                <IonCardHeader>
                                    <IonCardSubtitle>{missionary.location}</IonCardSubtitle>
                                    <IonCardTitle>{missionary.title}</IonCardTitle>
                                </IonCardHeader>

                                <IonCardContent>
                                    {missionary.description}
                                    <ContactModal missionary={missionary} />
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Home;
