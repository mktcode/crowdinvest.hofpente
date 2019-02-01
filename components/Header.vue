<template>
  <header>
    <div>
      <div class="responsive-video">
        <img src="/logo.png" alt="Hof Pente" class="video-logo" />
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/8P9PmQ-kTis?autoplay=0&time=0&enablejsapi=1&origin=http://localhost:3000&widgetid=1&showinfo=0&theme=light&color=white"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </header>
</template>

<style lang="sass">
  @import '../assets/css/variables'

  header
    background-color: $brand-color
    > div
      max-width: 800px
      margin: 0 auto
</style>
