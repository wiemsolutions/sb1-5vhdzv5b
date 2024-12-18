import { userEmailTemplates } from './templates/userTemplates';
import { listingEmailTemplates } from './templates/listingTemplates';
import { notificationEmailTemplates } from './templates/notificationTemplates';
import { adminEmailTemplates } from './templates/adminTemplates';

type AllTemplates = typeof userEmailTemplates & 
  typeof listingEmailTemplates & 
  typeof notificationEmailTemplates & 
  typeof adminEmailTemplates;

interface EmailOptions {
  to: string | string[];
  templateName: keyof AllTemplates;
  data: Record<string, any>;
}

export class EmailService {
  private static instance: EmailService;
  private templates: AllTemplates;

  private constructor() {
    this.templates = {
      ...userEmailTemplates,
      ...listingEmailTemplates,
      ...notificationEmailTemplates,
      ...adminEmailTemplates
    };
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  public async sendEmail({ to, templateName, data }: EmailOptions): Promise<boolean> {
    try {
      const template = this.templates[templateName];
      if (!template) {
        throw new Error(`Email template "${templateName}" not found`);
      }

      const emailContent = {
        to: Array.isArray(to) ? to : [to],
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
}

export const emailService = EmailService.getInstance();