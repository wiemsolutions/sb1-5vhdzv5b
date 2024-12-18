import { formatDate, formatPrice } from '../utils/formatters';

export interface EmailTemplate {
  subject: string;
  template: (data: any) => string;
}

export const EMAIL_TEMPLATES = {
  registration: {
    subject: 'Witamy w KSBiznes - Potwierdzenie rejestracji',
    template: (data: any) => `
      Witaj ${data.firstName},

      Dziękujemy za rejestrację w serwisie KSBiznes. Twoje konto zostało pomyślnie utworzone.

      Dane konta:
      - Email: ${data.email}
      - Nazwa firmy: ${data.companyName}

      Możesz zalogować się do swojego panelu użytkownika klikając w poniższy link:
      ${data.userPanelUrl}

      W razie pytań jesteśmy do Twojej dyspozycji.

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  orderFulfilled: {
    subject: 'KSBiznes - Potwierdzenie realizacji zamówienia',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje zamówienie nr ${data.orderNumber} zostało zrealizowane.

      Szczegóły zamówienia:
      - Data zamówienia: ${formatDate(data.orderDate)}
      - Kwota: ${formatPrice(data.amount)}
      - Pakiet: ${data.packageName}

      Możesz zarządzać swoimi ogłoszeniami w panelu użytkownika:
      ${data.userPanelUrl}

      Dziękujemy za zaufanie,
      Zespół KSBiznes
    `
  },

  newOrder: {
    subject: 'KSBiznes - Potwierdzenie nowego zamówienia',
    template: (data: any) => `
      Witaj ${data.firstName},

      Dziękujemy za złożenie zamówienia w serwisie KSBiznes.

      Numer zamówienia: ${data.orderNumber}
      Data: ${formatDate(data.orderDate)}
      Kwota: ${formatPrice(data.amount)}
      Pakiet: ${data.packageName}

      Status zamówienia możesz sprawdzić w panelu użytkownika:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  listingDeleted: {
    subject: 'KSBiznes - Ogłoszenie zostało usunięte',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało usunięte.

      Szczegóły:
      - ID ogłoszenia: ${data.listingId}
      - Data usunięcia: ${formatDate(data.deletedAt)}
      - Powód: ${data.reason}

      W razie pytań skontaktuj się z nami.

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  listingRenewed: {
    subject: 'KSBiznes - Ogłoszenie zostało odnowione',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało pomyślnie odnowione.

      Szczegóły:
      - Nowa data ważności: ${formatDate(data.expiryDate)}
      - Link do ogłoszenia: ${data.listingUrl}

      Zarządzaj swoimi ogłoszeniami:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  renewalReminder: {
    subject: 'KSBiznes - Przypomnienie o odnowieniu ogłoszenia',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" wygaśnie za ${data.daysLeft} dni.

      Aby zachować ciągłość wyświetlania, odnów ogłoszenie w panelu użytkownika:
      ${data.userPanelUrl}

      Szczegóły ogłoszenia:
      - Data wygaśnięcia: ${formatDate(data.expiryDate)}
      - Link do ogłoszenia: ${data.listingUrl}

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

      Szczegóły:
      - ID ogłoszenia: ${data.listingId}
      - Data wygaśnięcia: ${formatDate(data.expiredAt)}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  listingExpiringSoon: {
    subject: 'KSBiznes - Ogłoszenie wkrótce wygaśnie',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" wygaśnie za ${data.daysLeft} dni.

      Szczegóły:
      - ID ogłoszenia: ${data.listingId}
      - Data wygaśnięcia: ${formatDate(data.expiryDate)}
      - Link do ogłoszenia: ${data.listingUrl}

      Odnów ogłoszenie w panelu użytkownika:
      ${data.userPanelUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  listingEdited: {
    subject: 'KSBiznes - Potwierdzenie edycji ogłoszenia',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało pomyślnie zaktualizowane.

      Szczegóły:
      - Data modyfikacji: ${formatDate(data.modifiedAt)}
      - Link do ogłoszenia: ${data.listingUrl}

      Sprawdź swoje ogłoszenie:
      ${data.listingUrl}

      Pozdrawiamy,
      Zespół KSBiznes
    `
  },

  listingApproved: {
    subject: 'KSBiznes - Ogłoszenie zostało opublikowane',
    template: (data: any) => `
      Witaj ${data.firstName},

      Twoje ogłoszenie "${data.listingTitle}" zostało zatwierdzone i jest już widoczne w serwisie.

      Szczegóły:
      - Data publikacji: ${formatDate(data.publishedAt)}
      - Link do ogłoszenia: ${data.listingUrl}

      Zarządzaj swoimi ogłoszeniami:
      ${data.userPanelUrl}

      Dziękujemy za korzystanie z naszego serwisu,
      Zespół KSBiznes
    `
  }
} as const;