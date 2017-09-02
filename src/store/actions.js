import * as types from './types'

export default {
  toggleNav: ({commit}) => {
    commit(types.TOGGLE_NAV)
  },
  showCatelogPanel({commit}) {
    commit(types.SHOW_CATELOG_PANEL)
  },
  showFontPanel({commit}) {
    commit(types.SHOW_FONT_PANEL)
  },
  fontSizeAdd({commit}) {
    commit(types.FONT_SIZE_ADD)
  },
  fontSizeDecrease({commit}) {
    commit(types.FONT_SIZE_DECREASE)
  },
  showNight({commit}) {
    commit(types.SHOW_NIGHT)
  },
  prevChapter({commit}) {
    commit(types.PREV_CHAPTER)
  },
  nextChapter({commit, maxChapter}) {
    commit(types.NEXT_CHAPTER, maxChapter)
  },
  curChapter({commit}, num) {
    commit(types.CUR_CHAPTER, num)
  },
  toggleLoading({commit}) {
    commit(types.TOGGLE_LOADING)
  }
}
