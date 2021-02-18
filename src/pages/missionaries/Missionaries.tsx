import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../../components/exploreContainer/ExploreContainer';
import './Missionaries.css';
const missionaries = [
  {
    photo: 'http://placekitten.com/200/200',
    title: 'New Leaf',
    subtitle: 'Nepal',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut repudiandae eos placeat illum inventore eaque exercitationem nulla quidem fugit officiis ullam deserunt sapiente tempora cupiditate, nostrum delectus ad dignissimos.',
  },
  {
    photo: 'http://placekitten.com/200/200',
    title: 'Paul',
    subtitle: 'Cypress',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aut repudiandae eos placeat illum inventore eaque exercitationem nulla quidem fugit officiis ullam deserunt sapiente tempora cupiditate, nostrum delectus ad dignissimos.',
  },
]
const Home: React.FC = () => {
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
        { missionaries.map(missionary => (
          <IonCard>
            <IonRow class="ion-justify-content-start">
              <IonCol size="2">
                <img src={missionary.photo}/>
              </IonCol>
              <IonCol size="10">            
                <IonCardHeader>
                  <IonCardSubtitle>{missionary.subtitle}</IonCardSubtitle>
                  <IonCardTitle>{missionary.title}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  {missionary.description}
                </IonCardContent>
              </IonCol>
            </IonRow>
          </IonCard>
        )) }
      </IonContent>
    </IonPage>
  );
};

export default Home;
