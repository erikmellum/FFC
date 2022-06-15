import React, {useState, useEffect} from 'react';
import {IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonModal, IonRow, IonTitle, IonToolbar} from "@ionic/react";
import {sendOutline, close} from "ionicons/icons";
import {ContactForm} from "../ContactForm/ContactForm";
import './ContactModal.scss';
// @ts-ignore
export const ContactModal = ({missionary, showContactForm}) => {
    const [showModal, setShowModal] = useState(false);
    return <>
        <a className="send-cta" onClick={() => setShowModal(true)}>
            <span>Details & Contact</span>
            <IonIcon icon={sendOutline}/>
        </a>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} cssClass='modal-fullscreen'>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>{missionary.title}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setShowModal(false)}>
                            <IonIcon icon={close}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonRow class="ion-justify-content-start">
                    <IonCol>
                        <IonCard>
                            <div className="ion-text-center">
                                <img className="missionary-image" src={missionary.photo} alt={missionary.title}/>
                            </div>

                            <IonCardHeader>
                                <IonCardSubtitle>Location</IonCardSubtitle>
                                <IonCardTitle>{missionary.location}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                {missionary.description}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol className={`${showContactForm === '1' ? "ion-show" : "ion-hide"}`}>
                        <ContactForm missionary={missionary}/>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonModal>
    </>
};

export default ContactModal;