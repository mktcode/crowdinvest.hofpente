<template>
  <div class="container">
    <form>
      Daten:
      <textarea v-model="json" class="form-control" style="min-height: 500px;"></textarea>
      <br>
      Key:
      <input type="password" class="form-control" v-model="key" />

      <div class="alert alert-success mt-3" v-if="showSuccessMessage">
        <button type="button" class="close" aria-label="Close" @click="showSuccessMessage = false">
          <span aria-hidden="true">&times;</span>
        </button>
        <h5>Daten Erfolgreich aktualisiert!</h5>
        Lade die Crowdfunding Seite neu, um die Änderungen zu sehen.
      </div>
      <div class="alert alert-danger mt-3" v-if="showErrorMessage">
        <button type="button" class="close" aria-label="Close" @click="showErrorMessage = false">
          <span aria-hidden="true">&times;</span>
        </button>
        <h5>Fehler!</h5>
        Das hat leider nicht geklappt. Hast du den richtigen Key eingegeben?
      </div>

      <div class="text-right my-3">
        <button @click.prevent="sendData" class="btn btn-brand" v-if="isValidJson">
          <i class="fas fa-spinner fa-spin" v-if="loading"></i>
          <i class="fas fa-paper-plane" v-else></i>
          Aktualisieren
        </button>
        <div class="text-danger" v-else>Daten sind falsch formatiert.</div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        key: '',
        json: '',
        loading: false,
        showSuccessMessage: false,
        showErrorMessage: false
      }
    },
    computed: {
      ...mapGetters(['data']),
      isValidJson () {
        try {
          JSON.parse(this.json);
        } catch (e) {
          return false;
        }
        return true;
      }
    },
    methods: {
      sendData () {
        this.loading = true
        axios.post('/api/data', {data: JSON.parse(this.json), key: this.key}).then(() => {
          this.loading = false
          this.showSuccessMessage = true
        }).catch(() => {
          this.loading = false
          this.showErrorMessage = true
        })
      }
    },
    mounted () {
      this.$store.dispatch('fetchData').then(() => {
        this.json = JSON.stringify(this.data, null, 2)
      })
    }
  }
</script>
