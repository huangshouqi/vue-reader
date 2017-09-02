<template>
  <div class="catelog-panel">
    <div class="catelog">
      <div class="catelog-nav">
        <i class="iconfont icon-fanhui" @click="hideCatelogPanel"></i>
        <span>目录</span>
      </div>
      <div class="catelog-content">
        <ul>
          <li v-for="(item,index) in chapterCatelog" @click="jumpTo(index)">
            · {{index + 1}}. {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        chapterCatelog: []
      }
    },
    props: {
      bookId: {
        type: String,
        required: true
      }
    },
    created() {
      this.getCatelog()
    },
    methods: {
      jumpTo(index) {
        if (index >= 100) {
          index = 100
        }
        this.$store.dispatch('curChapter', index + 1)
        this.hideCatelogPanel()
        this.$store.state.showNav = false
        document.body.scrollTop = 0
      },
      hideCatelogPanel() {
        this.$store.state.catelog_panel = false
      },
      getCatelog() {
        this.$http.get(`http://39.108.14.248:3333/titles?id=${this.bookId}`).then(res => {
          this.chapterCatelog = res.data.titles.split('-')
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/iconfont.styl"
  @import "~stylus/mixin.styl"
  .catelog-panel
    position: fixed
    transition: all .3s
    left: 0
    top: 0
    bottom: 0
    right: 50px
    z-index: 1000
    overflow-x: hidden
    transform: translateX(-100%)
    &.show
      transform: translateX(0)
    .catelog
      position: absolute
      left: 0
      top: 0
      bottom: 0
      width: 100%
      background-color: #fff
      opacity: 1
      .catelog-nav
        position: fixed
        height: 50px
        line-height: 50px
        text-align: center
        font-size: 20px
        width: 100%
        top: 0
        left: 0
        color: #ed424b
        border-bottom: 1px solid #ed424b
        background-color: #fff
        .iconfont
          position: absolute
          left: 10px
          top: 3px
          width: 30px
          height: 30px
          line-height: 50px
        span
          margin-right: 5px
      .catelog-content
        background-color: #fff
        margin-top: 50px
        ul
          padding: 0 15px
        li
          color: #333
          height: 50px
          line-height: 50px
          border-bottom: 1px solid #ccc
          no-wrap()
</style>
