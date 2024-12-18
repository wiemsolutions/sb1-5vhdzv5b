import { EMAIL_TEMPLATES, EmailTemplate } from '../config/emailTemplates';

interface EmailOptions {
  to: string;
  templateName: keyof typeof EMAIL_TEMPLATES;
  data: any;
}

export async function sendEmail({ to, templateName, data }: EmailOptions): Promise<boolean> {
  try {
    const template = EMAIL_TEMPLATES[templateName];
    const emailContent = {
      to,
      subject: template.subject,
      body: template.template(data)
    };

    // Here you would integrate with your email service provider
    console.log('Sending email:', emailContent);
    
    // Example implementation:
    // await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailContent)
    // });

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export function getEmailTemplate(templateName: keyof typeof EMAIL_TEMPLATES): EmailTemplate {
  return EMAIL_TEMPLATES[templateName];
}