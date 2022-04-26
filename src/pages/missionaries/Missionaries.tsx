import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol} from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Missionaries.scss';
/*import missionaries from '../../data/missionaries';*/
import {
    IonIcon,
} from '@ionic/react';

import {sendOutline} from 'ionicons/icons';

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
                                    <a className="send-cta" href={`mailto:${missionary.email}?subject=Hello from Firm Family Church!&body=We are thinking of you!`} target="ffc">
                                        <span>Send a message</span>
                                        <IonIcon icon={sendOutline}/>
                                    </a>
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
