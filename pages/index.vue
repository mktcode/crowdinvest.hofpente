<template>
  <div class="h-100" data-spy="scroll" data-target="#navbar" id="top">
    <Navbar />
    <Header />

    <div class="container" id="home">
      <h1 class="text-center mt-4 mt-sm-5">CSA Hof Pente Crowdfunding</h1>
      <h3 class="text-center text-muted-light">Wir landwirtschaften biologisch-dynamisch, gemeinschaftsgetragen & solidarisch!</h3>
      <div class="row mt-4 mt-sm-5">
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <p><b>CSA</b> steht für <b>C</b>ommunity <b>S</b>upported <b>A</b>griculture, auf Deutsch: Gemeinschaftsgetragene Landbaukultur oder auch Solidarische Landwirtschaft. </p>
          <p>Der <b>CSA Hof Pente</b> ist ein Stück lebendige Utopie. Die Grundlage bildet der biologisch-dynamische Bauernhof, 10 km nördlich von Osnabrück. Wir bewirtschaften 36 Hektar Land, davon 5 ha mit Gemüse verschiedenster Arten und versorgen 13 Rinder, 20 Schafe. 3 Zuchtsauen und ein Eber mit Nachzucht sowie 12 Bienenvölker und bauen vielfältiges Getreide auf 10 Hektar an. Fleisch und Obst erzeugen wir ebenfalls.</p>
          <p>Wir versorgen derzeit 200 Familien/Haushalte mit Lebensmitteln vom Hof.</p>
          <p>Den Hof bewirtschaften wir nach biodynamischen Gesichtspunkten. Außerdem gehören zum Hof ein Kindergarten und die Freie Hofschule Pente.</p>
          <a href="https://hofpente.de" target="_blank" class="btn btn-brand">Erfahren Sie mehr auf hofpente.de!</a>
        </div>
        <div class="col-md-6">
          <img src="/schaubild.png" alt="Schaubild" class="img-fluid mt-4" />
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="container" id="situation">
      <h1 class="text-center mb-4">Die allgemeine Situation in der Landwirtschaft</h1>
      <div class="columns-2">
        <p>Um unsere Landwirtschaft nachhaltig zu gestalten, darf Ackerland nicht zum Spekulationsgut werden. Es braucht Menschen, die Landwirtschaft mit Enthusiasmus, Hingabe und Fachwissen betreiben. Es braucht Menschen, die ehrlich und sorgsam mit Tieren, Pflanzen und Boden umgeben. Aber es braucht auch Sie, es braucht Menschen, die dies ermöglichen, Menschen, die den Mut haben sich zu beteiligen.</p>
        <p>Seit Ausbruch der Weltfinanzkrise 2008 fließt immer mehr Spekulationsgeld von außerlandwirtschaftlichen Investoren in Äcker, Grünland und Wald als sicheren Hafen für ihre Geldanlage. Als Folge haben sich die landwirtschaftlichen Bodenpreise in Deutschland alleine in den letzten 9 Jahren mehr als verdoppelt.</p>
        <p><b>Jeden Tag verschwinden in Deutschland über 20 Höfe</b>, gleichzeitig kaufen außerlandwirtschaftliche Investoren Millionen von Hektar Ackerland. Das ist eine schlechte Nachricht für unsere Gesundheit und für unsere Natur. Denn eine gesunde Gesellschaft ist angewiesen auf gesunde Lebensmittel aus einer möglichst regionalen und nachhaltigen Landwirtschaft. </p>
        <p>Bestehende Höfe stehen in einem unaufhörlichen finanziellen Überlebenskampf. Die Folge davon ist, dass immer weniger Menschen mit immer größeren Maschinen immer größere Flächen bewirtschaften. Soziale und ökologische Gedanken finden in dieser Art der Landwirtschaft immer weniger Platz.</p>
      </div>

      <h2 class="text-center mt-5 mb-4">Warum Crowdfunding?</h2>
      <div class="row">
        <div class="col-sm-6">
          <h3 class="text-muted">Landwirtschaftliche Grundlage</h3>
          <p>Derzeit werden von uns 36 ha landwirtschaftliche Gesamtflächen bewirtschaftet. 2/3 der Fläche sind von 5 unterschiedlichen Verpächtern gepachtet. Damit ist die zukünftige Bewirtschaftung ungewiss. Durch die Crowdinvest Kampagne soll der Hof Pente langfristig als lebenspraktischer Begegnungs- und Lernort gesichert werden und Artenvielfalt fördern.</p>
        </div>
        <div class="col-sm-6">
          <h3 class="text-muted">Freie Hofschule Pente</h3>
          <p>Im August 2018 hat die Freie Hofschule Pente gestartet. Dabei müssen wir als Freie Schule die ersten 3 Jahre komplett ohne Zuschüsse vom Land Niedersachsen auskommen. Daher sind wir auf Unterstützung angewiesen.</p>
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="container" id="support">
      <h1 class="text-center mt-5">Unterstützen Sie uns!</h1>
      <h3 class="text-center text-muted-light">
        Helfen Sie dabei den CSA Hof Pente langfristig als lebenspraktischen Begegnungs- und Lernort zu sichern und eine nachhaltige, biodynamische Landwirtschaft zu ermöglichen!
      </h3>

      <h2 class="mt-5 text-center">Gemeinschaftsstiftung Hof Pente</h2>
      <p class="text-center">Um der Spekulation mit landwirtschaftlichem Land Einhalt zu gebieten, wurde die Gemeinschaftsstiftung Hof Pente ins Leben gerufen. Die Stiftung stellt die Infrastruktur für die Erfüllung der gemeinnützigen Ziele bereit.</p>
      <p class="text-center"><b>Machen Sie mit und kaufen sie ein Stück Land für die Zukunft!</b></p>

      <div class="mt-5 p-3 border rounded">
        <FundingItem v-for="(item, index) in data.funding.stiftung" :key="index" :item="item" />

        <h4 class="text-center mt-4">Wie Sie helfen können:</h4>

        <div class="accordion">
          <div class="card">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse1">
                  <span>Stiften und dauerhaft einen guten Zweck fördern durch Bodensicherung</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse1" class="collapse">
              <div class="card-body">
                <p>Wollen Sie Ihr Vermögen <b>dauerhaft einem guten Zweck</b> widmen, kann eine <b>Stiftung</b> richtig sein. Denn gestiftetes Vermögen bleibt erhalten, <b>wir wollen dafür Land kaufen und dauerhaft für gemeinnützige Zwecke</b> (Landschaftspflege und Naturschutz, Bildung und Erziehung einschl. der Berufsausbildung sowie das bürgerschaftliche Engagement im Verfolgen dieser Zwecke) <b>zur Verfügung stellen</b>.</p>
                <p class="text-center"><b>Die Ersten 80.000 € die gestiftet werden, werden durch eine Förderung der NBank verdreifacht!</b></p>
                <hr>
                <p>Bitte füllen Sie das Kontaktformular aus oder nehmen Sie direkt Kontakt mit uns auf, um <b>unverbindlich</b> Ihr Interesse zu bekunden.</p>
                <a href="#contact" class="btn btn-brand" v-scroll-to="'#contact'">
                  <i class="fas fa-download"></i>
                  zum Kontaktformular
                </a>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse2">
                  <span>Stiften auf Zeit - Mit Geld auf bestimmte Zeit einen guten Zweck fördern</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse2" class="collapse">
              <div class="card-body">
                <p>Es ist auch möglich, Geld für eine bestimmte Zeit zu stiften.</p>
                <hr>
                <p>Laden Sie einfach das Formular herunter und senden Sie es uns ausgefüllt, per Post zu.</p>
                <a href="/Zustiftung-auf-Zeit.pdf" class="btn btn-brand" download>
                  <i class="fas fa-download"></i>
                  Formular Herunterladen
                </a>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse3">
                  <span>Spende für Boden-, Wasser- & Klimaschutz</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse3" class="collapse">
              <div class="card-body">
                <p>„Bio ist nicht zu teuer, sondern konventionell zu billig“ – davon sind viele Anhänger der Bio-Branche überzeugt. Seit Kurzem sprechen auch Ernst&Young, Standard & Poor’s selbst BlackRock offen darüber, dass ihre Methoden zur Bewertung von Unternehmen nicht mehr aktuell sind. Firmen sollen zukünftig bei ihrer Bewertung u.a. Klimarisiken mitberücksichtigen, sonst werden sie bei ihrer Kreditwürdigkeit heruntergestuft. Für eine bessere Bewertung wurde die Gesamtkostenrechnung entwickelt. Für die Landwirtschaft wurde u.a. die organische Substanz im Boden als Schlüsselindikator identifiziert, der die zukünftige Konkurrenzfähigkeit landwirtschaftlicher Systeme definiert.</p>
                <p>Diese Gesamtkostenanalyse wurde basierend auf den Richtlinien des Natural Capital Protocols2 durchgeführt unter Berücksichtigung der von Ernst&Young und Soil & More entwickelten Anforderungen für den Lebensmittel- und Agrarsektor. Folgende Parameter wurden hierbei für die einzelnen Betriebe untersucht: CO<sup>2</sup>-Emissionen, CO<sup>2</sup>-Bindung, Wasserverbrauch und -verschmutzung, Erosion, Bodenaufbau, Biodiversität, Energie-verbräuche, Transport der Waren zum Verbraucher, Bildungsarbeit und Gesundheit. Für die Bewertung der ökologischen Aspekte wurden ausschließlich von Industrie und Wissenschaft anerkannte Modelle verwendet.</p>
                <p>Die in den letzten Jahren eingeführte schonende Bodenbearbeitung, Untersaat, Zwischenfrüchte und bodendeckende Pflanzen sowie verbesserte Kompostwirtschaft führt zu signifikanter CO<sup>2</sup>-Bindung und Bodenaufbau. <b>Mehr Hintergrund Informationen:</b>&nbsp;<a href="/Report-Hofpente-TCA.pdf" download>Report Herunterladen</a></p>
                <p>Auf den Gesamtbetrieb bezogen generiert Hof Pente einen jährlichen Nettonutzen von 30.259 €. Ein durchschnittlicher Vergleichsbetrieb hingegen 100.000 € minus.</p>
                <hr>
                <h5>Stiften für Bodenaufbau und CO<sup>2</sup> Bindung</h5>
                <p>Mit Ihrer Stiftung ermöglichen Sie uns den konkreten Mehrwert für Boden, Wasser und Klima zu leisten. Mit einem Umweltzeritfikat bescheinigen wir Stiftern im Rahmen unseres jährlichen Nettonutzens (siehe oben) ihr Engagement. Das Geld wird wieder in den Bodenaufbau und in die CO<sup>2</sup> Bindung investiert. Damit soll zukünftig der positive Effekt noch verstärkt werden.</p>
                <hr>
                <p>Bitte füllen Sie das Kontaktformular aus oder nehmen Sie direkt Kontakt mit uns auf, um <b>unverbindlich</b> Ihr Interesse zu bekunden.</p>
                <a href="#contact" class="btn btn-brand" v-scroll-to="'#contact'">
                  <i class="fas fa-download"></i>
                  zum Kontaktformular
                </a>

              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse4">
                  <span>Vererben</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse4" class="collapse">
              <div class="card-body">
                <h5>Ein Testament ist wichtig!</h5>
                <p>Nur durch ein Testament können Sie die gesetzliche Erbfolge außer Kraft setzen. Wenn Sie also mit ihrem Erbe einen guten Zweck unterstütze wollen, so benötigen Sie ein Testament. Ansonsten tritt die gesetzliche Erbfolge in Kraft.</p>
                <p>Das Erbrecht im Todesfall wird durch das Bürgerliche Gesetzbuch geregelt. Es werden darin allein Ehe- und eingetragene Lebenspartner, Kinder, Adoptivkinder und Enkel berücksichtigt. Dabei ist die Rangfolge vorgegeben.</p>
                <p>
                  1. Ordnung: Erst Kinder/Adoptivkinder, dann Kindeskinder<br>
                  2. Ordnung: Erst Eltern, dann Geschwister und deren Abkömmlinge<br>
                  3. Ordnung: Erst Großeltern, dann deren Abkömmlinge<br>
                  4. Ordnung: Erst Urgroßeltern, dann deren Abkömmlinge
                </p>

                <h5>Alles nach Ihrem Willen: Mit einem Testament</h5>
                <p>Immer dann, wenn Sie Ihr Vermögen anders aufteilen möchten, als es die gesetzliche Erbfolge vorgibt, müssen Sie dies in einem Testament oder Erbvertrag regeln. Wollen Sie nichteheliche Lebenspartner, enge Freunde oder gemeinnützige Organisationen bedenken? Erst ein Testament setzt die gesetzliche Erbfolge außer Kraft und ermöglicht Ihnen individuelle Gestaltungsfreiheit.</p>
                <h5>Was Sie über ein Testament für den guten Zweck wissen sollten</h5>
                <p>Gemeinnützig vererben? Nur mit einem Testament oder Erbvertrag.</p>
                <p>Wer im Todesfall erbt, das regelt in Deutschland das Bürgerliche Gesetzbuch. Die gesetzliche Erbfolge berücksichtigt allein Blutsverwandte, Adoptivkinder, Ehe- und eingetragene Lebenspartner – oder den Staat.</p>
                <p>Nur ein Testament oder Erbvertrag setzt diese Regelung außer Kraft und ermöglicht individuelle Gestaltungsfreiheit. Wer eine gemeinnützige Organisation bedenken möchte, muss dies mit einem Testament regeln oder einen Erbvertrag aufsetzen lassen.</p>

                <h5>Vermachen oder Vererben? Was ähnlich klingt, ist nicht das selbe.</h5>
                <p>Wenn sie Gutes tun wollen, ist es wichtig, den Unterschied zu kennen: Der Erbe übernimmt nicht nur Vermögen, sondern auch Schulden und Verbindlichkeiten.</p>
                <p>Wenn Sie der Gemeinschaftsstiftung Hof Pente einen Geldbetrag, eine Immobilie oder sonstiges für einen guten Zweck überlassen wollen, dann ist ein Vermächtnis der beste Weg.</p>
                <p><b>Beispiel für eine Erbeinsetzung:</b></p>
                <p>Als Erben bestimme ich zu gleichen Teilen meine Tocher XXX, wohnhaft in XXX, und die Gemeinschaftsstiftung Hof Pente.</p>
                <p><b>Beispiel für ein Vermächtnis:</b></p>
                <p>Die Gemeinschaftsstiftung Hof Pente, Osnabrücker Str. 73, 49565 Bramsche, soll aus meinem Erbe ein Vermächtnis in Höhe von X Euro bekommen.</p>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse5">
                  <span>Schenkung - Möglich jeder Zeit oder von Todes wegen</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse5" class="collapse">
              <div class="card-body">
                <p>Sie können auch einfach Teile Ihres Vermögens - beispielsweise Geld, Haus oder Wertgegenstände - bereits zu ihren Lebzeiten verschenken. So können Sie noch zu ihren Lebzeiten miterleben, wie sie damit Gutes bewirken. Sie können allerdings auch durch ein „Schenkungsversprechen“, die Schenkung erst mit Ihrem Tod wirksam werden lassen. Dazu bedarf es allerdings einer notariellen Beurkundung.</p>
                <p>Ohne Notar ist eine „Verfügung zugunsten Dritter für den Todesfall“ möglich. Was sperrig klingt, ist einfach: Ein Sparbuch, Bankkonto oder Wertpapierdepot geht am Tag Ihres Todes auf eine Person oder Organisation über. Auf ähnliche Weise können Sie gemeinnützige Organisationen auch als Bezugsberechtigte Ihrer Lebens¬ oder Rentenversicherung eintragen. Die Auszahlung dient ohne steuerlichen Abzug der guten Sache.</p>
                <p><b>Übrigens: Die Schenkung an unsere gemeinnützige Organisation ist steuerbefreit.</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-5 text-center">ARG e.V.</h2>
      <p class="text-center">Fördere Bildung für nachhaltige Entwicklung auf Hof Pente.</p>

      <div class="mt-5 p-3 border rounded">
        <FundingItem v-for="(item, index) in data.funding.arg" :key="index" :item="item" />

        <h4 class="text-center mt-4">Wie Sie helfen können:</h4>

        <div class="accordion">
          <div class="card">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse6">
                  <span>GLS Bank - Kleinstbürgschaften: Ihr bürgt, die Schule erhält ein Darlehn</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse6" class="collapse">
              <div class="card-body">
                <h5>Bürgschaftskredit für den Schulbetrieb - Bis 3000 €</h5>
                <p>Unterzeichne eine Bürgschaftserklährung für bis zu 3.000 € und die Schule erhält von der GLS Bank dafür einen Schulgründungskredit:</p>
                <a href="/Buergschaftskredit.pdf" class="btn btn-brand" download>Info-PDF herunterladen</a>
                <p class="mt-3"><b>Freie Schulen müssen in Niedersachsen die ersten 3 Jahre ohne Zuschuss klarkommen. Das Darlehn ist für die Überbrückung der ersten drei Jahre. Danach erhalten wir einen Zuschuss des Landes Niedersachsen. Den Kredit zahlt die Schule in den ersten 10 Jahren durch den Landeszuschuss und die Elternbeiträge zurück.</b></p>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse7">
                  <span>GLS Schenkgemeinschaft: Kleine Beträge ermöglichen große Schritte</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse7" class="collapse">
              <div class="card-body">
                <p>Die GLS Bank mit Hauptsitz in Bochum bietet das Modell "Leihen und Schenken" zur Finanzierung kultureller, sozialer oder ökologischer Projekte, die sie für förderungswürdig erachtet. Kredite an Leihgemeinschaften werden kostendeckend vergeben, d.h. es werden nur die anfallenden Personal- und Sachkosten in Rechnung gestellt, aber keine Zinsen erhoben.</p>
                <p>Nach eingehender Prüfung unseres Konzepts stellt die Bank uns eine Summe X zur Verfügung. Die Voraussetzung ist, dass wir genügend Kleinkreditgeber finden, die sich für max. 5 Jahre verpflichten, die Kreditsumme in monatlichen Raten an die GLS Bank zurück zu zahlen.</p>
                <p>Wie funktioniert das? Menschen, die die <b>Freie Hofschule Pente</b> unterstützen wollen, erklären sich bereit, für fünf Jahre jeden Monat 9,00 € bis max. 50,00 € zu spenden. Die Unterstützerinnen und Unterstützer schließen sich zu einer Leihgemeinschaft zusammen, eine echte Solidargemeinschaft. Jeder Unterstützer beantragt einen Kleinkredit bei der GLS Bank, der der <b>Gemeinschaftsstiftung Hof Pente</b> sofort zugutekommt. Weitere Unterlagen oder eine Bonitätsprüfung sind nicht erforderlich. Die einzelnen Leihgemeinschafts-mitglieder tilgen über ein mtl. Lastschriftverfahren ihren jeweiligen Kredit über die vereinbarte Laufzeit, max. fünf Jahre.  Jedes Mitglied zahlt seinen eigenen Kredit zurück und haftet zusätzlich gesamtschuldnerisch für alle anderen Kredite der Leihgemeinschaft, bis diese vollständig getilgt sind. Die Höhe dieser zusätzlichen Haftung bleibt auf den eigenen Kreditbetrag beschränkt.</p>
                <p>Wenn Sie einer Leih- und Schenkgemeinschaft beitreten und dadurch die <b>Freie Hofschule Pente</b> in der Anlaufphase unterstützen möchten, dann schicken Sie uns bitte untenstehende Erklärung zu. Die <b>Gemeinschaftsstiftung Hof Pente</b> wird die Verwaltung der Leih- und Schenkgemeinschaften übernehmen und Sie über alle weiteren Schritte informieren.</p>
                <a href="/Schenkgemeinschaft.pdf" class="btn btn-brand" download>Bereitschaftserklärung herunterladen</a>
              </div>
            </div>
          </div>

          <div class="card mt-2">
            <div class="card-header">
              <h5 class="my-0">
                <a href="#" class="btn btn-brand d-flex justify-content-between" data-toggle="collapse" data-target="#collapse8">
                  <span>Spende für die Hofschule - Und die Software AG Stiftung verdoppelt deine Spende!</span>
                  <i class="fas fa-chevron-down mt-1 d-block"></i>
                </a>
              </h5>
            </div>

            <div id="collapse8" class="collapse">
              <div class="card-body">
                <p>Für den Aufbau der Hofschule brauchen wir Unterstützer. Spenden unter 2.000 € werden von der Software AG Stiftung verdoppelt (bis zu einer Höhe von 20.000 €). Für jede Spende erhalten Sie eine Spendenbescheinigung.</p>
                <hr>
                <p>Bitte füllen Sie das Kontaktformular aus oder nehmen Sie direkt Kontakt mit uns auf, um <b>unverbindlich</b> Ihr Interesse zu bekunden.</p>
                <a href="#contact" class="btn btn-brand" v-scroll-to="'#contact'">
                  <i class="fas fa-download"></i>
                  zum Kontaktformular
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <hr class="my-5">

    <Contact />
    <Partners />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import Header from '~/components/Header'
  import FundingItem from '~/components/FundingItem'
  import Contact from '~/components/Contact'
  import Partners from '~/components/Partners'
  import Footer from '~/components/Footer'

  import { mapGetters } from 'vuex'

  export default {
    head: {
      bodyAttrs: {
        'data-spy': 'scroll',
        'data-target': '#navbar',
        'data-offset': '250'
      }
    },
    components: {
      Navbar,
      Header,
      FundingItem,
      Contact,
      Partners,
      Footer
    },
    computed: {
      ...mapGetters(['data']),
      date () {
        return new Date().getFullYear()
      }
    },
    mounted () {
      this.$store.dispatch('fetchData')
    }
  }
</script>
