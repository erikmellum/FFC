import React, {useState} from 'react';
import {IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItemDivider, IonModal, IonRow, IonTitle, IonToolbar} from "@ionic/react";
import {sendOutline, close} from "ionicons/icons";
import {ContactForm} from "../ContactForm/ContactForm";
import {ImageGallery} from "../ImageGallery/ImageGallery";
import './ContactModal.scss';
// @ts-ignore
export const ContactModal = ({missionary, showContactForm}) => {
    const [showModal, setShowModal] = useState(false);
    return <>
        <button className="send-cta link-button" onClick={() => setShowModal(true)}>
            <span>Details & Contact</span>
            <IonIcon icon={sendOutline}/>
        </button>
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
                    <IonCol size={`${showContactForm === '1' ? "6" : "12"}`}>
                        <IonCard>
                            <div className="ion-text-center">
                                <img className="missionary-image" src={missionary.photo} alt={missionary.title}/>
                            </div>

                            <IonCardHeader className={`${missionary.location !== null ? "ion-show" : "ion-hide"}`}>
                                <IonCardSubtitle>Location</IonCardSubtitle>
                                <IonCardTitle>{missionary.location}</IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent>
                                {missionary.description}
                                <IonItemDivider></IonItemDivider>
                                <ImageGallery missionary={missionary}/>
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