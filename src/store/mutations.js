import * as types from './types'

export default {
  [types.TOGGLE_NAV](state) {
    state.showNav = !state.showNav
  },
  [types.SHOW_CATELOG_PANEL](state) {
    state.catelog_panel = !state.catelog_panel
  },
  [types.SHOW_FONT_PANEL](state) {
    state.font_panel = !state.font_panel
  },
  [types.FONT_SIZE_ADD](state) {
    state.font_size++
    if (state.font_size >= 24) {
      state.font_size = 24
    }
  },
  [types.FONT_SIZE_DECREASE](state) {
    state.font_size--
    if (state.font_size <= 14) {
      state.font_size = 14
    }
  },
  [types.SHOW_NIGHT](state) {
    state.bg_night = !state.bg_night
  },
  [types.PREV_CHAPTER](state) {
    if (state.curChapter <= 1) {
      return false
    }
    state.curChapter--
  },
  [types.NEXT_CHAPTER](state, maxChapter) {
    if (state.curChapter >= maxChapter) {
      return false
    }
    state.curChapter++
  },
  [types.CUR_CHAPTER](state, num) {
    state.curChapter = num
  },
  [types.TOGGLE_LOADING](state) {
    state.loading = false
  }
}
