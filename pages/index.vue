<template>
  <div class="h-100">
    <Navbar />

    <Header />

    <div class="container">
      <h1 class="text-center mt-5">Crowdfunding Hof Pente</h1>
      <h3 class="text-center text-muted-light">Helfen Sie dabei den CSA Hof Pente langfristig als lebenspraktischen Begegnungs- und Lernort zu sichern und eine nachhaltige, biologische Landwirtschaft zu ermöglichen!</h3>
      <div class="row mt-5">
        <div class="col-6 d-flex flex-column justify-content-center">
          <p><b>CSA</b> steht für <b>C</b>ommunity <b>S</b>upported <b>A</b>griculture, zu deutsch: Gemeinschaftsgetragene Landbaukultur oder auch Solidarische Landwirtschaft. </p>
          <p>Der <b>CSA Hof Pente</b> ist ein Stück lebendige Utopie. Die Grundlage bildet der biologisch-dynamische Bauernhof, 10km nördlich von Osnabrück. Wir bewirtschaften 36 Hektar Land, davon 5 ha mit Gemüse verschiedenster Arten und versorgen 13 Rinder, 20 Schafe. 3 Zuchtsauen mit Eber und Nachzucht, 12 Bienenvölker und bauen vielfältiges Getreide auf 10 Hektar an. Fleisch und Obst erzeugen wir ebenfalls.</p>
          <p>Wir versorgen derzeit 200 Familien/Haushalte mit Lebensmitteln vom Hof.</p>
          <p>Den Hof bewirtschaften wir nach biodynamischen Gesichtspunkten. Außerdem gehören zum Hof ein Kindergarten und die Freie Hofschule Pente.</p>
          <a href="https://hofpente.de" target="_blank" class="btn btn-brand">Erfahren Sie mehr auf hofpente.de!</a>
        </div>
        <div class="col-6">
          <img src="/schaubild.png" alt="Schaubild" class="img-fluid" />
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="container">
      <h2 class="text-center mb-4">Die Situation in der Landwirtschaft allgemein</h2>
      <div class="columns-2">
        <p>Um unsere Landwirtschaft nachhaltig zu gestalten darf Ackerland nicht zum Spekulationsgut werden. Es braucht Menschen, die Landwirtschaft mit Enthusiasmus, Hingabe und Fachwissen betreiben. Es braucht Menschen, die ehrlich und sorgsam mit Tieren, Pflanzen und Boden umgeben. Aber es braucht auch Sie, es brauch Menschen die dies Ermöglichen, Menschen, die den Mut haben sich zu beteiligen.</p>
        <p>Seit Ausbruch der Weltfinanzkrise 2008 fließt immer mehr Spekulationsgeld von außerlandwirtschaftlichen Investoren in Äcker, Grünland und Wald als sicheren Hafen für ihre Geldanlage. Als Folge haben sich die landwirtschaftlichen Bodenpreise in Deutschland alleine in den letzten 9 Jahren mehr als verdoppelt.</p>
        <p><b>Jeden Tag verschwinden in Deutschland über 30 Höfe</b>, gleichzeitig kaufen außerlandwirtschaftliche Investoren Millionen von Hektar Ackerland. Das ist eine schlechte Nachricht für unsere Gesundheit und für unsere Natur. Denn eine gesunde Gesellschaft ist angewiesen auf gesunde Lebensmittel aus einer möglichst regionalen und nachhaltigen Landwirtschaft. </p>
        <p>So sind heutige Hofübernahmen häufig mit jahrzehntelanger Verschuldung verbunden oder finanziell untragbar. Obwohl Nachwuchs an motivierten, kompetenten Menschen in der Landwirtschaft vorhanden wäre, verfügen diese nicht über das notwendige Kapital um Höfe und Land zu übernehmen. Bestehende Höfe stehen in einem unaufhörlichen finanziellen Überlebenskampf. Die Folge davon ist, dass immer weniger Menschen mit immer größeren Maschinen immer größere Flächen bewirtschaften. Soziale und ökologische Gedanken finden in dieser Art der Landwirtschaft immer weniger Platz.</p>
      </div>

      <h2 class="text-center mt-5 mb-4">Warum Crowdfunding?</h2>
      <div class="row">
        <div class="col-6">
          <h3 class="text-muted">Landwirtschaftliche Grundlage</h3>
          <p>Derzeit werden 36 ha landwirtschaftlichen Gesamtflächen bewirtschaftet. 2/3 der Fläche sind von 5 unterschiedlichen Verpächtern gepachtet. Damit ist die zukünftige Bewirtschaftung ungewiss. Durch die Crowdinvest Kampagne soll der Hof Pente langfristig als lebenspraktischer Begegnungs- und Lernort gesichert werden.</p>
        </div>
        <div class="col-6">
          <h3 class="text-muted">Freie Hofschule Pente</h3>
          <p>Im August 2018 hat die Freie Hofschule Pente gestartet. Dabei müssen wir als Freie Schule die ersten 3 Jahre komplett ohne Zuschüsse vom Land Niedersachsen auskommen. Daher sind wir auf Unterstützung angewiesen.</p>
        </div>
      </div>
    </div>

    <hr class="my-5">

    <Contact />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import Header from '~/components/Header'
  import Contact from '~/components/Contact'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Navbar,
      Header,
      Contact,
      Footer
    },
    computed: {
      date () {
        return new Date().getFullYear()
      }
    }
  }
</script>
