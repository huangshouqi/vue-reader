const STORAGE_KEY = 'vue_reader_' // 为了避免重名，这里添加一个前缀

export default {
  fetch(key) {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY + key) || '[]')
  },
  save(key, val) {
    window.localStorage.setItem(STORAGE_KEY + key, JSON.stringify(val))
  }
}
