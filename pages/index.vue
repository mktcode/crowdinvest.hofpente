<template>
  <div class="h-100">
    <Navbar />
    <iframe
      id="youtube-player-1"
      frameborder="0"
      allowfullscreen="1"
      allow="autoplay; encrypted-media"
      title="YouTube video player"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/5VZj8U4vP3s?autoplay=0&time=0&enablejsapi=1&origin=http://localhost:3000&widgetid=1&showinfo=0&controls=0&theme=light&color=white"
    ></iframe>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>
