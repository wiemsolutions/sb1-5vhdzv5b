import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function TermsPage() {
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

        {/* Terms Content */}
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Regulamin serwisu Ksbiznes.pl
          </h1>

          <div className="text-sm text-gray-500 mb-8">
            Data wejścia w życie: 29.07.2024
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Wstęp</h2>
            <p className="text-gray-600 mb-4">
              Witamy w Ksbiznes.pl, ogłoszonej platformie sprzedaży i zakupu istniejących przedsiębiorstw. 
              Wchodząc lub korzystając z Ksbiznes.pl, wyrażasz zgodę na przestrzeganie niniejszego Regulaminu 
              i jesteś nim związany. Jeśli nie zgadzasz się z tymi warunkami, prosimy o niekorzystanie z naszej platformy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Definicje</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>„Platforma" odnosi się do serwisu Ksbiznes.pl i wszystkich jego usług.</li>
              <li>„Użytkownik" oznacza każdą osobę lub podmiot korzystający z Platformy.</li>
              <li>„Sprzedawca" oznacza dowolnego Użytkownika wystawiającego ofertę sprzedaży na Platformie.</li>
              <li>„Kupujący" oznacza dowolnego Użytkownika, który wyraża zainteresowanie firmą wymienioną na Platformie lub ją kupuje.</li>
              <li>„Treść" oznacza wszelkie informacje, teksty, obrazy i inne materiały przesłane na Platformę.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Kwalifikowalność</h2>
            <p className="text-gray-600 mb-4">
              Aby móc korzystać z Ksbiznes.pl, musisz mieć ukończone 18 lat. Korzystając z Platformy, 
              oświadczasz i gwarantujesz, że masz prawo, upoważnienie i zdolność do zawarcia niniejszego 
              Regulaminu oraz przestrzegania wszystkich zawartych w nim warunków.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Konta Użytkowników</h2>
            <p className="text-gray-600 mb-4">
              Aby uzyskać dostęp do niektórych funkcji Platformy, konieczne może być utworzenie konta. Zgadzasz się na:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Podaj dokładne, aktualne i pełne informacje podczas procesu rejestracji.</li>
              <li>Utrzymuj i szybko aktualizuj informacje o swoim koncie.</li>
              <li>Zachowaj bezpieczeństwo i poufność danych logowania do swojego konta.</li>
              <li>Przyjmij odpowiedzialność za wszystkie działania, które mają miejsce na Twoim koncie.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Ogłoszenia firma</h2>
            <p className="text-gray-600 mb-4">
              Sprzedawcy mogą wystawiać firmy na sprzedaż na Platformie, pod warunkiem, że spełniają następujące warunki:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Wpisy muszą być dokładne, zgodne z prawdą i nie mogą wprowadzać w błąd.</li>
              <li>Sprzedający muszą mieć prawo do sprzedaży wymienionej firmy.</li>
              <li>Oferty nie mogą naruszać żadnych obowiązujących przepisów prawa ani regulacji.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Kupowanie firm</h2>
            <p className="text-gray-600 mb-4">
              Kupujący mogą przeglądać i wyrażać zainteresowanie firmami wymienionymi na Platformie. W ten sposób Kupujący potwierdzają, że:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Ksbiznes.pl nie gwarantuje poprawności i legalności ogłoszeń.</li>
              <li>Kupujący muszą przeprowadzić własną analizę due diligence przed zakupem przedsiębiorstwa.</li>
              <li>Jakakolwiek transakcja odbywa się wyłącznie pomiędzy Kupującym a Sprzedającym.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Opłaty i płatności</h2>
            <p className="text-gray-600 mb-4">
              Ksbiznes.pl może pobierać opłaty za zamieszczanie ogłoszeń firm lub innych usług. 
              Wszelkie obowiązujące opłaty zostaną ujawnione przed skorzystaniem z usługi. 
              Zgadzasz się uiścić wszystkie opłaty i prowizje zgodnie z warunkami obowiązującymi w momencie transakcji.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Czynności zabronione</h2>
            <p className="text-gray-600 mb-4">Użytkownicy zgadzają się nie:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Korzystać z Platformy w celach niezgodnych z prawem lub z naruszeniem prawa lokalnego, stanowego, krajowego lub międzynarodowego.</li>
              <li>Publikuj treści fałszywe, wprowadzające w błąd lub zniesławiające.</li>
              <li>Naruszać prawa innych osób, w tym prawa własności intelektualnej.</li>
              <li>Rozpowszechniać wirusy lub inne technologie, które mogą zaszkodzić Ksbiznes.pl lub jego użytkownikom.</li>
              <li>Angażować się w jakąkolwiek działalność, która mogłaby uszkodzić, wyłączyć, przeciążyć lub zakłócić funkcjonowanie Platformy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Własność intelektualna</h2>
            <p className="text-gray-600 mb-4">
              Cała zawartość i materiały na Ksbiznes.pl, w tym między innymi teksty, grafiki, logo i oprogramowanie, 
              są własnością Ksbiznes.pl lub jej licencjodawców i są chronione prawami autorskimi, znakami towarowymi 
              i innymi prawami własności intelektualnej. Użytkownikom nie wolno wykorzystywać treści znajdujących się 
              na Platformie bez uprzedniej pisemnej zgody Ksbiznes.pl.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Ograniczenie odpowiedzialności</h2>
            <p className="text-gray-600 mb-4">
              Ksbiznes.pl udostępnia Platformę w stanie „takim, jaki jest" i „w miarę dostępności". 
              Nie gwarantujemy, że Platforma będzie działać nieprzerwanie, bez błędów i bezpiecznie. 
              W najszerszym zakresie dozwolonym przez prawo Ksbiznes.pl zrzeka się wszelkich gwarancji, 
              wyraźnych lub dorozumianych, dotyczących Platformy i jej użytkowania.
            </p>
            <p className="text-gray-600 mb-4">
              Ksbiznes.pl nie ponosi odpowiedzialności za jakiekolwiek szkody bezpośrednie, pośrednie, 
              przypadkowe, szczególne, wynikowe lub karne, w tym między innymi za utratę zysków, danych 
              lub inne straty niematerialne, powstałe w wyniku:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Twoje wykorzystanie lub niemożność korzystania z Platformy.</li>
              <li>Jakikolwiek nieautoryzowany dostęp do naszych serwerów lub korzystanie z nich.</li>
              <li>Wszelkie błędy, wirusy, konie trojańskie i tym podobne, które mogą być przesyłane za pośrednictwem Platformy.</li>
              <li>Wszelkie błędy lub pominięcia w jakiejkolwiek treści lub za jakiekolwiek straty lub szkody poniesione w wyniku wykorzystania jakiejkolwiek treści opublikowanej, przesłanej pocztą elektroniczną, przesłanej lub w inny sposób udostępnionej za pośrednictwem Platformy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Odszkodowanie</h2>
            <p className="text-gray-600 mb-4">
              Zgadzasz się zabezpieczyć, bronić i chronić Ksbiznes.pl, jej kadrę kierowniczą, dyrektorów, 
              pracowników, agentów i podmioty stowarzyszone przed wszelkimi roszczeniami, zobowiązaniami, 
              szkodami, stratami, kosztami, wydatkami lub honorariami (w tym uzasadnionymi kosztami obsługi 
              prawnej) wynikające z korzystania przez Ciebie z Platformy lub naruszenia przez Ciebie niniejszego Regulaminu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Zakończenie</h2>
            <p className="text-gray-600 mb-4">
              Ksbiznes.pl zastrzega sobie prawo do zamknięcia lub zawieszenia Twojego konta i dostępu do Platformy, 
              za powiadomieniem lub bez, z dowolnej przyczyny, w tym między innymi z powodu naruszenia niniejszego Regulaminu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Obowiązujące prawo</h2>
            <p className="text-gray-600 mb-4">
              Niniejsze Warunki podlegają prawu obowiązującemu w Polsce i zgodnie z nim będą interpretowane, 
              bez względu na zasady kolizyjne obowiązujące w tym kraju.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Zmiany Regulaminu</h2>
            <p className="text-gray-600 mb-4">
              Od czasu do czasu możemy aktualizować niniejsze Warunki. O wszelkich istotnych zmianach 
              poinformujemy Cię poprzez publikację nowego Regulaminu na naszej Platformie i aktualizację 
              daty wejścia w życie. Dalsze korzystanie z Ksbiznes.pl po wprowadzeniu zmian oznacza akceptację 
              zaktualizowanego Regulaminu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Skontaktuj się z nami</h2>
            <p className="text-gray-600 mb-4">
              Jeśli masz jakiekolwiek pytania lub wątpliwości dotyczące niniejszego Regulaminu, skontaktuj się z nami pod adresem:
            </p>
            <div className="text-gray-600">
              <p>WIEM Solutions sp. z o.o.</p>
              <p>ul. Władysława Kańskiego 5c/10</p>
              <p>81-245 Gdynia, Polska</p>
              <p>Telefon: +48 504 828 090</p>
              <p>Email: Buiro@ksbiznes.pl</p>
            </div>
          </section>

          <div className="text-gray-600 mt-12">
            Dziękujemy za korzystanie z Ksbiznes.pl. Zależy nam na zapewnieniu bezpiecznej platformy 
            do kupna i sprzedaży istniejących przedsiębiorstw.
          </div>
        </div>
      </div>
    </div>
  );
}