import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  showNav: true,
  catelog_panel: false,
  font_panel: false,
  font_size: 16,
  curChapter: 1,
  bg_color: 1,
  bg_night: false,
  loading: true

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})



