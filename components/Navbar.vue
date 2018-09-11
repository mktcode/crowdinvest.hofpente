<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="#situation" v-scroll-to="'#situation'">Die Situation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#support" v-scroll-to="'#support'">Unterstützen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" v-scroll-to="'#contact'">Kontakt</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="sass">
  @import '../assets/css/variables'

  .navbar
    padding: 0
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1)
    .nav-item
      a
        padding: 16px 0
        &.active
          background-color: $brand-color
          color: #fff !important
</style>
