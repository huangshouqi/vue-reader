<template>
  <div class="top-nav-pannel font-container" id="font-container" v-show="font_panel">
    <div class="child-mod">
      <span>字号</span>
      <button id="large-font" class="spe-button" @click="add">
        大
      </button>
      <button id="small-font" class="spe-button" @click="decrease" style="margin-left:10px;">
        小
      </button>
    </div>

    <div class="child-mod" id="bk-container">
      <span>背景</span>
      <div class="bk-container" :class="{'bk-container-current':now_color==index}" v-for="(item,index) in 6">
        <div class="color_btn" @click="changeColor(index)"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Store from '../../store/local'
  export default {
    data() {
      return {
        now_color: 0
      }
    },
    computed: {
      ...mapState([
        'font_panel', 'bg_color', 'fontSizeAdd', 'fontSizeDecrease'
      ])
    },
    methods: {
      //点击修改bg_color，父组件可根据bg_color的值更改自定义属性bg_color，达到修改背景色的目的
      changeColor(index) {
        this.now_color = index
        this.$store.state.bg_color = index + 1
        Store.save('bg_color', index + 1)
//        console.log('now:',this.now_color)
//        console.log('bg_cloro:',this.$store.state.bg_color )
      },
      add() {
        this.$store.dispatch('fontSizeAdd')
//        console.log(this.$store.state.font_size)
      },
      decrease() {
        this.$store.dispatch('fontSizeDecrease')
//        console.log(this.$store.state.font_size)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/variable.styl"
  .top-nav-pannel
    position: fixed
    bottom: 70px
    height: 135px
    width: 100%
    color: #fff
    font-size: 14px
    z-index: 10000
    background: rgba(0, 0, 0, 0.8)
    button
      background: none
      border: 1px #8c8c8c solid
      padding: 5px 40px
      color: #fff
      display: inline-block
      border-radius: 16px
      &:focus
        outline: none

    .child-mod
      padding: 5px 20px
      margin-top: 15px
      & > span:first-child
        margin-right: 20px

    .bk-container
      position: relative
      height: 30px
      width: 30px
      border-radius: 15px
      display: inline-block
      vertical-align: -14px
      margin-left: 10px

      .color_btn
        height: 30px
        width: 30px
        border-radius: 15px

    .bk-container-current
      border: 1px #ff7800 solid

    .bk-container:nth-child(2) .color_btn
      background: $color-reader-bg-1

    .bk-container:nth-child(3) .color_btn
      background: $color-reader-bg-2

    .bk-container:nth-child(4) .color_btn
      background: $color-reader-bg-3

    .bk-container:nth-child(5) .color_btn
      background: $color-reader-bg-4

    .bk-container:nth-child(6) .color_btn
      background: $color-reader-bg-5
    .bk-container:nth-child(7) .color_btn
      background: $color-reader-bg-6


</style>
