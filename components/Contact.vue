<template>
  <div>
    <div class="container">
      <h2 class="text-center mb-4">Kontakt</h2>
      <div class="row contact-data mb-4">
        <div class="col-6 text-right">
          <b>CSA Hof Pente GbR</b><br>
          Osnabrücker Str. 73<br>
          49565 Bramsche
        </div>
        <div class="col-6">
          Tel.: 05407 8984517<br>
          Fax.: 05407 8984518<br>
          <a href="mailto:buero@hofpente.de">buero@hofpente.de</a>
        </div>
      </div>
      <div class="text-center mb-3 social-links">
        <a href="https://www.youtube.com/channel/UChUMp5liXuh0qZkKzL6zBdA" target="_blank" class="mr-2 youtube">
          <i class="fab fa-youtube fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/CSA-Hof-Pente-212166685493372/" target="_blank" class="ml-2 facebook">
          <i class="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
      <p>Wir bieten gerne Hofführungen an und geben unsere Erfahrungen natürlich gerne weiter. Da wir Mitglied im <a href="https://www.oekolandbau.de/verbraucher/demonstrationsbetriebe/" target="_blank">Netzwerk der Demonstationsbetriebe für Ökologische Landwirtschaft</a> sind, können wir Ihnen Führungen anbieten, die für sie kostenneutral sind. Die Führung muss bei uns allerdings 10 Tage im voraus angemeldet werden.</p>
      <p>Sie können uns selbstverständlich auch mit jedem anderen Anliegen kontaktieren. Nutzen Sie einfach das unten stehende Kontaktformular oder rufen Sie an.</p>
    </div>
    <div class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <form class="mt-5">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="firstname">Vorname</label>
                    <input type="text" class="form-control" id="firstname">
                  </div>
                  <div class="form-group">
                    <label for="email">E-Mail</label>
                    <input type="text" class="form-control" id="email">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="lastname">Nachname</label>
                    <input type="text" class="form-control" id="lastname">
                  </div>
                  <div class="form-group">
                    <label for="phone">Telefon</label>
                    <input type="text" class="form-control" id="phone">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="message">Nachricht</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-brand">
                  <i class="fas fa-paper-plane"></i>
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
          <div class="col-4">
            <iframe
              class="border-0 d-block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d131096.73374923566!2d7.884366025030807!3d52.37122221495227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e11447a4c789%3A0x2ea9ece22abd4540!2sCSA+Hof+Pente+-+Solidarische+Landwirtschaft+-+Handlungsp%C3%A4dagogische+Provinz!5e0!3m2!1sde!2sde!4v1491624957441"
              width="100%"
              height="450"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .contact-data
    font-size: 1.2rem
  .social-links
    a
      color: #ccc
      transition: color .3s ease
      &.youtube
        &:hover
          color: #f00
      &.facebook
        &:hover
          color: #3b5998
  .contact-form
    background-color: #f8f8f8
    label
      font-weight: bold
      font-size: .9rem
      margin-bottom: 0
</style>
