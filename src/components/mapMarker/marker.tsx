import React, { useState } from 'react';
import './marker.scss';
import {
  IonIcon,
} from '@ionic/react';

import {closeOutline} from 'ionicons/icons';
import ContactModal from "../../components/ContactModal/ContactModal";

const Marker = (props: any) => {
  const [showHint, setShowHint] = useState<Boolean>(false);
  const handleClick = (event: React.MouseEvent, missionary_id: any) => {
    var i;
    var allElements = document.querySelectorAll(".hint");
    for (i = 0; i < allElements.length; i++) {
      if (allElements[i].classList.contains("hint_" + missionary_id)) {
        allElements[i].classList.toggle("active");
      } else {
        allElements[i].classList.remove('active');
      }
    }
    //setShowHint(!showHint);
  }
  return <>
    <div className="pin" onClick={(event) => handleClick(event, props.missionary.id)}></div>
    <div className="pulse"></div>
    <div className={`text ${props.missionary.position}`} onClick={(event) => handleClick(event, props.missionary.id)}>{props.missionary.title}</div>
      <div className={`hint hint_${props.missionary.id} ${props.missionary.position}`}>
        <IonIcon className="map-marker-close-btn ion-float-right " icon={closeOutline} onClick={(event) => handleClick(event, props.missionary.id)}/>
        <div className="hint-image-container">
          <img src={props.missionary.photo}/>
        </div>
        <span>{props.missionary.description}</span>
        <ContactModal missionary={props.missionary} />
      </div> 
  </>
}

export default Marker;