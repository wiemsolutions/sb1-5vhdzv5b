import { formatDate, formatPrice } from '../../../utils/formatters';

export const adminEmailTemplates = {
  newUser: {
    subject: 'Nowy użytkownik w KSBiznes',
    template: (data: any) => `
      Nowy użytkownik zarejestrował się w serwisie KSBiznes:
      
      Imię i nazwisko: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Firma: ${data.companyName}
      Data rejestracji: ${formatDate(new Date())}
    `
  },
  newSubscription: {
    subject: 'Nowa subskrypcja w KSBiznes',
    template: (data: any) => `
      Nowa subskrypcja w serwisie KSBiznes:
      
      Pakiet: ${data.packageName}
      Użytkownik: ${data.userName}
      Email: ${data.userEmail}
      Kwota: ${formatPrice(data.amount)}
      Data: ${formatDate(new Date())}
    `
  }
} as const;