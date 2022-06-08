import React from 'react';
import {IonButton, IonText, useIonAlert} from '@ionic/react';
import {useForm} from 'react-hook-form';
import MissionaryService from "../../services/MissionaryService";
import './ContactForm.scss';

// @ts-ignore
export const ContactForm = ({missionary}) => {
    const {register, handleSubmit, setError, formState: {errors}} = useForm();
    const [present] = useIonAlert();
    // @ts-ignore
    const onSubmit = (data, e) => {
        MissionaryService.contactMissionary(missionary.id, data)
            .then((response: any) => {
                // Show response alert
                let message = 'Something went wrong. Try again later.';
                if (response.data.success === true) {
                    message = 'Message sent successfully!';
                }
                present({
                    header: 'Send a Message!',
                    message: message,
                    buttons: [
                        {text: 'Ok'},
                    ]
                });

                // Reset Form on success
                if (response.data.success === true) {
                    e.target.reset();
                }
            })
            .catch((error) => {
                // Display API errors
                // @ts-ignore
                for (var input in error.response.data.errors) {
                    var message = error.response.data.errors[input][0];
                    // @ts-ignore
                    setError(input, {
                        message: message
                    })
                }
            });
    };

    return <>
        <IonText>
            <h3>Send a Message!</h3>
        </IonText>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <label>Your Name</label>
            <input {...register("name", {
                required: {
                    value: true,
                    message: "You must enter your name."
                }
            })} />
            {errors.name && <p className="error">{errors.name.message}</p>}

            {/* Message */}
            <label>Your Message</label>
            <textarea {...register("message")} />

            {/* Submit */}
            <IonButton type="submit" className="ion-margin-top" expand="full">Submit</IonButton>
        </form>
    </>
};
