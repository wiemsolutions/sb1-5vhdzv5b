import { formatDate } from '../../../utils/formatters';

export const listingEmailTemplates = {
  listingCreated: {
    subject: 'KSBiznes - Ogłoszenie zostało utworzone',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało pomyślnie utworzone i oczekuje na zatwierdzenie.

      Szczegóły:
      - ID ogłoszenia: ${data.listingId}
      - Data utworzenia: ${formatDate(data.createdAt)}

      Możesz śledzić status swojego ogłoszenia w panelu użytkownika:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },
  listingApproved: {
    subject: 'KSBiznes - Ogłoszenie zostało zatwierdzone',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało zatwierdzone i jest już widoczne w serwisie.

      Link do ogłoszenia: ${data.listingUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  }
} as const;