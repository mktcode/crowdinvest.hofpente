import axios from 'axios'

export default {
  fetchData ({ state, commit }) {
    return axios.get('/api/data').then(res => {
      commit('setData', res.data)
    })
  },
}
