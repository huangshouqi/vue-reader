<template>
  <div class="foot-nav" v-show="showNav">
    <div class="foot-item" @click="showCatelogPanel">
      <i class="iconfont icon-caidan"></i>
      <p>目录</p>
    </div>
    <div class="foot-item" @click="showFontPanel">
      <i class="iconfont icon-icon-yxj-font"></i>
      <p>字号</p>
    </div>
    <div class="foot-item" @click="showNight">
      <i class="iconfont icon-yejianmoshi-dianjiguozhuangtai" v-show="bg_night"></i>
      <i class="iconfont icon-mianbanbaitian" v-show="!bg_night"></i>
      <p>模式</p>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'


  export default {
    methods: {
      showCatelogPanel() {
        this.$store.dispatch('showCatelogPanel')
        this.$store.state.font_panel = false
      },
      showFontPanel() {
        this.$store.dispatch('showFontPanel')
      },
      showNight(){
        this.$store.dispatch('showNight')
        console.log(this.$store.state.bg_night)
      }
    },
    computed: {
      ...mapState([
        'showNav','catelog_panel','bg_night'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/iconfont.styl"
  @import "~stylus/variable.styl"
  .foot-nav
    height: 70px
    width: 100%
    position: fixed
    bottom: 0
    left: 0
    z-index: 100
    background: rgba(0, 0, 0, 0.8)
    display: flex
    line-height: 24px
    text-align: center
    .foot-item
      margin-top: 12px
      flex: 1
      i
        color: #fff
      p
        font-size: 14px
        display: block
        color: #fff
      .active
        background: rgba(0, 0, 0, 0.8)
        position: fixed
        bottom: 70px
        left: 0
        height: 135px
        width: 100%
        color: #fff
        text-align: left
        display: flex
        flex-direction: column
        justify-content: center
        padding-left: 2em
      .font-size
        span
          margin-right: 10px
        button
          background: none
          border: 1px solid #8c8c8c
          border-radius: 16px
          padding: 5px 20px
          margin-right: 5px
      .font-color
        box-sizing: border-box
        padding-top: 20px
        font-size 16px
        span
          vertical-align: 9px
        a
          display: inline-block
          background: #fff
          height: 30px
          width: 30px
          margin-right: 10px
          margin-left: 10px
          border-radius: 50%
        a:nth-of-type(1)
          background: $color-reader-bg-1
        a:nth-of-type(2)
          background: $color-reader-bg-2
        a:nth-of-type(3)
          background: $color-reader-bg-3
        a:nth-of-type(4)
          background: $color-reader-bg-4
        a:nth-of-type(5)
          background: $color-reader-bg-5
        a:nth-of-type(5)
          background: $color-reader-bg-6
</style>
