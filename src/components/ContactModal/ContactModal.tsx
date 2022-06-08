import React, {Component, useState} from 'react';
import {IonButton, IonButtons, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonHeader, IonIcon, IonModal, IonRow, IonTitle, IonToolbar} from "@ionic/react";
import {sendOutline, close} from "ionicons/icons";
import {ContactForm} from "../ContactForm/ContactForm";
// @ts-ignore
export const ContactModal = ({missionary}) => {
    const [showModal, setShowModal] = useState(false);
    return <>
        <a className="send-cta" onClick={() => setShowModal(true)}>
            <span>Details & Contact</span>
            <IonIcon icon={sendOutline}/>
        </a>
        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
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
                    <IonCol size="4">
                        <img className="missionary-photo" src={missionary.photo} alt={missionary.description}/>
                    </IonCol>
                    <IonCol size="8">
                        <IonCardHeader>
                            <IonCardSubtitle>Location: {missionary.location}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            {missionary.description}
                        </IonCardContent>
                    </IonCol>
                </IonRow>
                <IonRow class="ion-justify-content-start">
                    <IonCol size="12">
                        <ContactForm missionary={missionary}/>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonModal>
    </>
};

export default ContactModal;
