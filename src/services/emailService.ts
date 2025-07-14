import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_2k7ciun';
const EMAILJS_TEMPLATE_ID = 'template_372t88c';
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
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'manojmsaiml@gmail.com', // Your email address
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative: Send email with auto-reply
export const sendContactEmailWithAutoReply = async (formData: EmailData): Promise<boolean> => {
  try {
    // Send main email to you
    const mainEmailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: `Portfolio Contact: ${formData.subject}`,
      message: `
        New contact form submission:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        ---
        Sent from Portfolio Contact Form
      `,
      to_email: 'manojmsaiml@gmail.com',
      reply_to: formData.email,
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, mainEmailParams);

    // Send auto-reply to the sender
    const autoReplyParams = {
      from_name: 'Manoj MS',
      from_email: 'manojmsaiml@gmail.com',
      subject: 'Thank you for contacting me!',
      message: `
        Hi ${formData.name},
        
        Thank you for reaching out! I've received your message about "${formData.subject}" and will get back to you as soon as possible.
        
        Your message:
        "${formData.message}"
        
        I typically respond within 24-48 hours. If you have any urgent inquiries, feel free to reach out to me directly at manojmsaiml@gmail.com.
        
        Best regards,
        Manoj MS
        AI Engineer & Software Developer
        
        ---
        This is an automated response from my portfolio contact form.
      `,
      to_email: formData.email,
      reply_to: 'manojmsaiml@gmail.com',
    };

    await emailjs.send(EMAILJS_SERVICE_ID, 'template_auto_reply', autoReplyParams);

    console.log('Emails sent successfully with auto-reply');
    return true;
  } catch (error) {
    console.error('Failed to send emails:', error);
    return false;
  }
};

// Backup method using a simple API service (like Formspree)
export const sendEmailViaFormspree = async (formData: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _replyto: formData.email,
        _subject: `Portfolio Contact: ${formData.subject}`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send email via Formspree:', error);
    return false;
  }
};