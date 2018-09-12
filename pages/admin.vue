<template>
  <div class="container">
    <form>
      Daten:
      <textarea v-model="json" class="form-control" style="min-height: 500px;"></textarea>
      <br>
      Key:
      <input type="password" class="form-control" v-model="key" />

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
        loading: false
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
        }).catch(() => {
          this.loading = false
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
