<template>
  <footer class="d-flex justify-content-between">
    <small class="text-muted-light d-flex justify-content-center flex-column pl-3">
      &copy; {{ date }} CSA Hof Pente GbR
    </small>
    <div class="links">
      <a href="https://hofpente.de/impressum" target="_blank">
        Impressum
      </a>
      <a href="https://hofpente.de/datenschutz/" target="_blank">
        Datenschutz
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      date () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="sass">
  @import "../assets/css/variables"

  footer
    border-top: 1px solid rgba(0,0,0,.1)
    small
      font-size: .7rem
    .links
      a
        color: #999
        display: inline-block
        padding: 10px 15px
        transition: background-color .5s ease, color .5s ease
        font-size: .7rem
        &:hover
          background-color: $brand-color
          color: #fff
          text-decoration: none
  @media screen and (max-width: 768px)
    footer
      .links
        a
          padding: 10px 4px
</style>
