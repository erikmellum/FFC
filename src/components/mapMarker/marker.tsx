import React, { useState } from 'react';
import './marker.scss';
import {
  IonIcon,
} from '@ionic/react';

import {sendOutline, closeOutline} from 'ionicons/icons';

const Marker = (props: any) => {
  const [showHint, setShowHint] = useState<Boolean>(false);
  const handleClick = () => {
    var i;
    var allElements = document.querySelectorAll(".hint");
    for (i = 0; i < allElements.length; i++) {
      allElements[i].classList.remove('active');
    }
    setShowHint(!showHint);
  }
  return <>
    <div className="pin" onClick={handleClick}></div>
    <div className="pulse"></div>
    <div className={`text ${props.missionary.position}`} onClick={handleClick}>{props.missionary.title}</div>
      <div className={`hint ${props.missionary.position} ${showHint ? "active" : ""}`}>
        <IonIcon className="map-marker-close-btn ion-float-right " icon={closeOutline} onClick={handleClick}/>
        <div className="hint-image-container">
          <img src={props.missionary.photo}/>
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