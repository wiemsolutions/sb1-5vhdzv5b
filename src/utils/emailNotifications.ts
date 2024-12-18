import { EMAIL_CONFIG } from '../config/email';

interface EmailData {
  to: string[];
  subject: string;
  body: string;
}

export async function sendAdminNotification(type: 'newUser' | 'newSubscriber', data: any) {
  if (!EMAIL_CONFIG.notifications[type]) return;

  const template = EMAIL_CONFIG.templates[type];
  const emailData: EmailData = {
    to: EMAIL_CONFIG.adminEmails,
    subject: template.subject,
    body: template.template(data)
  };

  try {
    // Here you would typically integrate with your email service provider
    // For example, using AWS SES, SendGrid, or another email service
    console.log('Sending admin notification:', emailData);
    
    // Example implementation with fetch:
    // await fetch('/api/send-email', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(emailData)
    // });
    
    return true;
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return false;
  }
}

export function validateAdminEmail(email: string): boolean {
  return EMAIL_CONFIG.adminEmails.includes(email);
}