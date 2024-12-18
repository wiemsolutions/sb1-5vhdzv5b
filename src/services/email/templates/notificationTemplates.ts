import { formatDate } from '../../../utils/formatters';

export const notificationEmailTemplates = {
  listingExpiringSoon: {
    subject: 'KSBiznes - Ogłoszenie wkrótce wygaśnie',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" wygaśnie za ${data.daysLeft} dni.

      Szczegóły:
      - Data wygaśnięcia: ${formatDate(data.expiryDate)}
      - Link do ogłoszenia: ${data.listingUrl}

      Odnów ogłoszenie w panelu użytkownika:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },
  listingExpired: {
    subject: 'KSBiznes - Ogłoszenie wygasło',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" właśnie wygasło.

      Aby przywrócić ogłoszenie, odnów je w panelu użytkownika:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  }
} as const;