import * as dotenv from 'dotenv';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { peopleOutline, homeOutline, mapOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Map from './pages/map/Map';
import Missionaries from './pages/missionaries/Missionaries';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import './theme/app.scss';

dotenv.config();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/map" component={Map} exact={true} />
            {/* <Route path="/map/details" component={Details} /> */}
            <Route path="/missionaries" component={Missionaries} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="map" href="/map">
              <IonIcon icon={mapOutline} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="missionaries" href="/missionaries">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Missionaries</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
