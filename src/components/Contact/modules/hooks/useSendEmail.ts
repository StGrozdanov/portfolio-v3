'use client'

import { useState } from "react";
import emailjs from 'emailjs-com';

/**
 * sends email using emailJS and form data reference
 * @returns handler to send emails with
 * @returns email is sent boolean that will signalise if the email was sent successfully or not
 */
export function useSendEmail(formRef: React.MutableRefObject<null>) {
    const [emailIsSent, setEmailIsSent] = useState(false);

    /**
    * email js send handler
    * @params event of a form data
    */
    const sendEmailHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const { name, email, description } = Object.fromEntries(formData);

        const formInputIsNotEmpty = email.toString().trim() !== '' && name.toString().trim() !== '' && description.toString().trim() !== '';

        const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
        const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
        const userId = process.env.NEXT_PUBLIC_EMAIL_USER_ID as string;

        if (formInputIsNotEmpty) {
            emailjs
                .sendForm(serviceId, templateId, formRef.current as unknown as string, userId)
                .then(result => {
                    if (result.text == 'OK') {
                        setEmailIsSent(true);
                    } else {
                        console.error(`Email status: ${result.status}, message: ${result.text}`);
                    }
                })
                .catch(err => console.error(err));
        }
    }

    return {
        emailIsSent,
        sendEmailHandler,
    }
}