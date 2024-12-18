import { formatDate, formatPrice } from '../../../utils/formatters';

export const userEmailTemplates = {
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
  orderConfirmation: {
    subject: 'KSBiznes - Potwierdzenie zamówienia',
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
  }
} as const;