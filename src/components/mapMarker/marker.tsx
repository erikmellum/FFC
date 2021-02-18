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
    <div className={`text ${props.marker.position}`} onClick={handleClick}>{props.marker.title}</div>
      <div className={`hint ${props.marker.position} ${showHint ? "active" : ""}`}>
        <div className="hint-image-container">
          <img src="http://placekitten.com/100/50"/>
        </div>
        <span>{props.marker.description}</span>
        {/* <div className="send-cta"><span className="">Send a message</span> <IonIcon icon={sendOutline} /></div> */}
      </div> 
  </>
}

export default Marker;