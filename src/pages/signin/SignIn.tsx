import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './SignIn.scss';

interface SignInProps {
  setSignedIn: any
}

const Home: React.FC<SignInProps> = ({ setSignedIn}) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const submit = (username?: string, password?: string) => {
    if (username === 'ffc' && password === 'missionarieshavethemostfun') {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FFC Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FFC Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <img src="assets/ffc-logo.png"/>
          <IonItem>
            <IonInput value={username} placeholder="Enter username" onIonChange={e => setUsername(e.detail.value!)} onKeyPress={(e) => e.key === 'Enter' && submit(username, password)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} type="password" placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)} onKeyPress={(e) => e.key === 'Enter' && submit(username, password)}></IonInput>
          </IonItem>
          <IonButton expand="full" onClick={e => submit(username, password)}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
