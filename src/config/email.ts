export const EMAIL_CONFIG = {
  adminEmails: [
    'biuro@ksbiznes.pl',
    'admin@ksbiznes.pl'
  ],
  notifications: {
    newUser: true,
    newSubscriber: true,
    newListing: true,
    contactForm: true
  },
  templates: {
    newUser: {
      subject: 'Nowy użytkownik w KSBiznes',
      template: (userData: any) => `
        Nowy użytkownik zarejestrował się w serwisie KSBiznes:
        
        Imię i nazwisko: ${userData.firstName} ${userData.lastName}
        Email: ${userData.email}
        Firma: ${userData.companyName}
        Data rejestracji: ${new Date().toLocaleString('pl-PL')}
      `
    },
    newSubscriber: {
      subject: 'Nowa subskrypcja w KSBiznes',
      template: (subscriptionData: any) => `
        Nowa subskrypcja w serwisie KSBiznes:
        
        Pakiet: ${subscriptionData.packageName}
        Użytkownik: ${subscriptionData.userName}
        Email: ${subscriptionData.userEmail}
        Kwota: ${subscriptionData.amount} PLN
        Data: ${new Date().toLocaleString('pl-PL')}
      `
    }
  }
} as const;