import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-sea-600 hover:text-sea-700 mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Powrót do strony głównej
        </Link>

        {/* Privacy Policy Content */}
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Polityka Prywatności RODO
          </h1>
          <div className="text-sm text-gray-500 mb-8">
            <p>WIEM Solutions sp. z o.o. / Ksbiznes.pl</p>
            <p>Data aktualizacji: 17.08.2024</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Wstęp</h2>
            <p className="text-gray-600 mb-4">
              Ksbiznes.pl zobowiązuje się do ochrony prywatności i danych osobowych naszych użytkowników zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO). Niniejsza Polityka RODO określa rodzaje danych osobowych, które gromadzimy, sposób ich przetwarzania, Twoje prawa wynikające z RODO oraz sposoby korzystania z tych praw. Korzystając z Ksbiznes.pl zgadzasz się z warunkami tej polityki.
            </p>
            <p className="text-gray-600 mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przez WIEM Solutions sp. z o.o., właściciela marki „Ksbiznes.pl", z siedzibą przy ul. Władysława Kańskiego 5c/10, 81-245 Gdynia, Polska, REGON: 529591299, NIP: 9581747023, KRS: 0001125519. Kontakt z nami możliwy jest pod numerem telefonu +48 504828090.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Administrator danych</h2>
            <p className="text-gray-600 mb-4">
              Administratorem danych osobowych jest WIEM Solutions sp. z o.o., właściciel marki Ksbiznes.pl, z siedzibą w Gdyni, ul. Władysława Kańskiego 5c/10.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cel przetwarzania danych osobowych</h2>
            <p className="text-gray-600 mb-4">Przetwarzamy dane osobowe w celu:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Zarządzania platformą sprzedaży istniejących przedsiębiorstw – w tym kontaktu z użytkownikami, obsługi transakcji, oraz udostępniania informacji o oferowanych przedsiębiorstwach.</li>
              <li>Realizacji obowiązków prawnych – wynikających z przepisów prawa, np. przepisów podatkowych i rachunkowych.</li>
              <li>Marketingu – w tym przesyłania informacji handlowych, ofert, oraz materiałów promocyjnych, jeśli użytkownik wyraził na to zgodę.</li>
              <li>Poprawy jakości usług i analizy statystycznej – w tym monitorowania ruchu na stronie i optymalizacji działania platformy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Podstawa prawna przetwarzania danych</h2>
            <p className="text-gray-600 mb-4">Dane osobowe przetwarzane są na podstawie:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Art. 6 ust. 1 lit. b RODO – w celu wykonania umowy lub podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy.</li>
              <li>Art. 6 ust. 1 lit. c RODO – w celu wypełnienia obowiązków prawnych ciążących na Administratorze.</li>
              <li>Art. 6 ust. 1 lit. f RODO – w celu realizacji prawnie uzasadnionych interesów Administratora, np. związanych z dochodzeniem roszczeń lub obroną przed nimi.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Odbiorcy danych</h2>
            <p className="text-gray-600 mb-4">Dane osobowe mogą być udostępniane:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Podmiotom współpracującym z Administratorem, np. dostawcom usług IT, prawnych, księgowych, ale tylko w zakresie niezbędnym do realizacji celów przetwarzania.</li>
              <li>Organom władzy publicznej lub innym podmiotom uprawnionym na podstawie przepisów prawa.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)</h2>
            <p className="text-gray-600 mb-4">
              Dane osobowe nie są przekazywane poza EOG. Jeśli zaistnieje taka konieczność, zapewnimy odpowiedni stopień ochrony danych, zgodnie z przepisami RODO.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Okres przechowywania danych</h2>
            <p className="text-gray-600 mb-4">
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, a także przez czas wymagany przepisami prawa, np. w zakresie przechowywania dokumentacji księgowej.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prawa osoby, której dane dotyczą</h2>
            <p className="text-gray-600 mb-4">Osoba, której dane dotyczą, ma prawo do:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Dostępu do swoich danych osobowych.</li>
              <li>Sprostowania nieprawidłowych danych lub uzupełnienia niekompletnych danych.</li>
              <li>Usunięcia danych („prawo do bycia zapomnianym").</li>
              <li>Ograniczenia przetwarzania danych.</li>
              <li>Przenoszenia danych.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
              <li>Wycofania zgody na przetwarzanie danych w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem).</li>
              <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Profilowanie</h2>
            <p className="text-gray-600 mb-4">
              Dane osobowe nie będą wykorzystywane do profilowania ani do podejmowania zautomatyzowanych decyzji.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Zmiany w Polityce Prywatności</h2>
            <p className="text-gray-600 mb-4">
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez odpowiednią informację na stronie internetowej Ksbiznes.pl.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-gray-600 mb-4">
              W przypadku pytań dotyczących przetwarzania danych osobowych prosimy o kontakt pod adresem:
            </p>
            <div className="text-gray-600">
              <p>WIEM Solutions sp. z o.o.</p>
              <p>ul. Władysława Kańskiego 5c/10</p>
              <p>81-245 Gdynia, Polska</p>
              <p>Telefon: +48 504 828 090</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}