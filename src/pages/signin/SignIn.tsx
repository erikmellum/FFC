import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonButton, IonLabel, IonIcon, IonText} from '@ionic/react';
import React, {useState} from 'react';
import './SignIn.scss';
import {eye, eyeOff} from "ionicons/icons";

interface SignInProps {
    setSignedIn: any
}

const Home: React.FC<SignInProps> = ({setSignedIn}) => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [authenticated, setAuthenticated] = useState<boolean>();
    const [passwordShown, setPasswordShown] = useState(false);
    const submit = (username?: string, password?: string) => {
        if (username === 'ffc' && password === 'missionarieshavethemostfun') {
            setSignedIn(true);
            setAuthenticated(true);
        } else {
            setSignedIn(false);
            setAuthenticated(false);
        }
    };
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    return <IonPage>
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
                <img src="assets/ffc-logo.png" alt="FFC"/>
                <IonItem color="danger" className={authenticated === false ? 'ion-show' : 'ion-hide'} >
                    <IonLabel className="ion-text-preline">Your username or password was incorrect.</IonLabel>
                </IonItem>
                <IonItem>
                    <IonInput value={username} placeholder="Enter username" onIonChange={e => setUsername(e.detail.value!)} onKeyPress={(e) => e.key === 'Enter' && submit(username, password)}></IonInput>
                </IonItem>
                <IonItem>
                    <IonInput value={password} type={passwordShown ? "text" : "password"} placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)} onKeyPress={(e) => e.key === 'Enter' && submit(username, password)}></IonInput>
                    <span className="password-icon" title={passwordShown ? 'Hide Password' : 'Show Password'} onClick={togglePasswordVisibility}>
                      <IonIcon icon={passwordShown ? eyeOff : eye}></IonIcon>
                    </span>
                </IonItem>
                <IonButton expand="full" onClick={e => submit(username, password)}>Submit</IonButton>
            </div>
        </IonContent>
    </IonPage>;
};

export default Home;
