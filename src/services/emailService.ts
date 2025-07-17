import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_2k7ciun';
const EMAILJS_TEMPLATE_ID_TO_ME = 'template_drij04f'; // Template for emails to you
const EMAILJS_TEMPLATE_ID_AUTO_REPLY = 'template_372t88c'; // Template for auto-reply to form filler
const EMAILJS_PUBLIC_KEY = 'OjFiDob71BrNALRX4';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    // Template parameters for email to you
    const templateParamsToMe = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'manojmsaiml@gmail.com',
      reply_to: formData.email,
    };

    // Template parameters for auto-reply to form filler
    const templateParamsAutoReply = {
      from_name: formData.name,
      email: formData.email,
      name: formData.name,
    };

    // Send email to you
    console.log('Sending email to you...');
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_TO_ME,
      templateParamsToMe
    );

    // Send auto-reply to form filler
    console.log('Sending auto-reply to form filler...');
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_AUTO_REPLY,
      templateParamsAutoReply
    );

    console.log('Both emails sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send emails:', error);
    return false;
  }
};