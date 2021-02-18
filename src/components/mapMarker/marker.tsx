import { useState } from 'react';
import './marker.scss';
import {
  IonIcon,
} from '@ionic/react';

import { sendOutline } from 'ionicons/icons';

const Marker = (props: any) => {
  const [showHint, setShowHint] = useState<Boolean>(false);
  const handleClick = () => {
    setShowHint(!showHint);
  }
  return <>
    <div className="pin" onClick={handleClick}></div>
    <div className="pulse"></div>
    <div className={`text ${props.missionary.position}`} onClick={handleClick}>{props.missionary.title}</div>
      <div className={`hint ${props.missionary.position} ${showHint ? "active" : ""}`}>
        <div className="hint-image-container">
          <img src="http://placekitten.com/100/50"/>
        </div>
        <span>{props.missionary.description}</span>
        <a className="send-cta" href={`mailto:${props.missionary.email}?subject=Hello from Firm Family Church!&body=We are thinking of you!`} target="ffc">
          <span>Send a message</span> 
          <IonIcon icon={sendOutline} />
        </a>
      </div> 
  </>
}

export default Marker;