// EmailJS Configuration
// To set up EmailJS for your portfolio:

export const EMAIL_CONFIG = {
  // 1. Go to https://www.emailjs.com/ and create a free account
  // 2. Create a new service (Gmail, Outlook, etc.)
  // 3. Create an email template with these variables:
  //    - {{from_name}} - Sender's name
  //    - {{from_email}} - Sender's email
  //    - {{subject}} - Email subject
  //    - {{message}} - Email message
  //    - {{to_email}} - Your email (manojmsaiml@gmail.com)
  //    - {{reply_to}} - Reply-to email
  
  // Replace these with your actual EmailJS credentials:
  SERVICE_ID: 'service_portfolio', // Your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Your EmailJS template ID
  PUBLIC_KEY: 'your_public_key_here', // Your EmailJS public key
  
  // Your email address where messages will be sent
  TO_EMAIL: 'manojmsaiml@gmail.com',
};

// Email template example for EmailJS:
/*
Subject: Portfolio Contact: {{subject}}

New contact form submission from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
Sent to: {{to_email}}
*/

// Auto-reply template example:
/*
Subject: Thank you for contacting me!

Hi {{from_name}},

Thank you for reaching out! I've received your message about "{{subject}}" and will get back to you as soon as possible.

Your message:
"{{message}}"

I typically respond within 24-48 hours. If you have any urgent inquiries, feel free to reach out to me directly at manojmsaiml@gmail.com.

Best regards,
Manoj MS
AI Engineer & Software Developer

---
This is an automated response from my portfolio contact form.
*/

// Setup Instructions:
/*
1. Create EmailJS Account:
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. Add Email Service:
   - Go to Email Services
   - Add your email service (Gmail recommended)
   - Follow the setup instructions

3. Create Email Template:
   - Go to Email Templates
   - Create a new template
   - Use the template example above
   - Save with ID 'template_contact'

4. Get Your Credentials:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account settings

5. Update Configuration:
   - Replace the values in EMAIL_CONFIG above
   - Update src/services/emailService.ts with your credentials

6. Test the Form:
   - Fill out the contact form
   - Check your email for the message
   - Verify the auto-reply works (optional)

Alternative Setup with Formspree:
1. Go to https://formspree.io/
2. Create a free account
3. Create a new form
4. Get your form endpoint
5. Update the Formspree URL in emailService.ts
*/