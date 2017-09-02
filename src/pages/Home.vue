<template>
  <div class="home">
    <loading v-if="loading"></loading>
    <pull-down v-show="!loading">
      <div class="nav-bar">
        <div class="title">
          <i class="iconfont icon-vuejs"></i>
          <span>ue-Reader</span>
        </div>
        <div class="nav">
          <img src="../assets/images/avater.jpg" alt="">
        </div>
      </div>

      <div class="swipe">
        <mt-swipe :auto="5000" :showIndicators="false">
          <mt-swipe-item><img src="../assets/images/1.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/2.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/3.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/4.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="../assets/images/5.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>

      <nav class="category">
        <router-link
          class="category-item"
          v-for="(type,index) in types"
          :to="{path:'category',query: {type: type.tid}}"
          :key="type.tid"
          @click="bookCategory(type.tid)">
          <i class="iconfont" :class="type.icon"></i>
          <h4>{{type.word}}</h4>
        </router-link>
      </nav>

      <div class="booklist">
        <recommend :booklist="booklist | hot" title="排行榜"></recommend>
        <book-list :booklist="booklist | free" title="限时免费">
          <span class="time"><span>01:</span>{{ time }}</span>
        </book-list>
        <book-list :booklist="booklist | endbook" title="人气完本"></book-list>
        <recommend :booklist="booklist | newbook" title="新书速递"></recommend>
        <recommend :booklist="booklist | top" title="编辑推荐"></recommend>
        <footer>Copyright © 2017 Archie</footer>
      </div>

    </pull-down>
  </div>
</template>

<script>
  import Recommend from 'components/Home/Recommend' // 样式横向排列
  import BookList from 'components/Home/BookList'  // 样式纵向排列
  import Loading from 'components/Loading'
  import PullDown from 'components/PullDown'
  import {mapState} from 'vuex'

  export default {
    components: {Recommend, BookList, Loading, PullDown},
    data() {
      return {
        booklist: [],
        time: '',
//        loading: true,
        types: [
          {
            tid: 1,
            word: '玄幻',
            icon: 'icon-xuanhuanyanqingcopy'
          },
          {
            tid: 2,
            word: '修真',
            icon: 'icon-xianxiaqiyuancopy'
          },
          {
            tid: 3,
            word: '都市',
            icon: 'icon-dushu'
          },
          {
            tid: 4,
            word: '历史',
            icon: 'icon-lishi1'
          },
          {
            tid: 5,
            word: '网游',
            icon: 'icon-wangyeyouxi'
          }
        ],
      }
    },
    created() {
      this.getBookList()
      this.getTime()
      setInterval(this.getTime, 1000)
    },
    methods: {
      getBookList() {
//        this.loading = true
        this.$http.get('http://39.108.14.248:3333/booklist')
          .then((res) => {
            this.$store.dispatch('toggleLoading')
            this.booklist = res.data
          })
      },
      getTime() { // 模拟倒计时
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()
        let hours = 23 - h//计算剩余的小时
        if (hours < 0) hours = 0
        let minutes = 60 - m //计算剩余的分钟
        let seconds = 60 - s //计算剩余的秒数
        hours = this.checkTime(hours)
        minutes = this.checkTime(minutes)
        seconds = this.checkTime(seconds)
//        let time = 01+hours + ":" + minutes + ":" + seconds
        let time = `${hours}:${minutes}:${seconds}`
        return this.time = time
      },
      checkTime(i) { // 将0-9的数字前面加上0，1变为01
        if (i < 10) {
          i = "0" + i;
        }
        return i
      }
    },
    computed: {
      ...mapState([
        'loading'
      ])
    },
    filters: {
      // 过滤分配数据
      hot(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (index < 20) {
            if (index % 2 == 1) {
              arr.push(item)
            }
          }
        })
        return arr
      },
      top(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (index < 20) {
            if (index % 2 == 0) {
              arr.push(item)
            }
          }
        })
        return arr
      },
      free(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (index % 3 == 1) {
            arr.push(item)
          }
        })
        return arr.splice(0, 3)
      },
      newbook(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          //简单更改下首页加载数据太多,可自行修改
          if (index < 20) {
            if (index % 3 == 2) {
              arr.push(item)
            }
          }
        })
        return arr
      },
      endbook(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (item.serialize === '完本') {
            arr.push(item)
          }
        })
        return arr
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/variable.styl"
  @import "~stylus/iconfont.styl"
  .home
    background: $color-home-theme
    .nav-bar
      height: 50px
      font-weight: bold
      background: #fff
      line-height: 50px
      color: #4FC08D
      .title
        display: inline-block
        font-size: 20px
        text-indent: 1em
        .iconfont
          font-size: 18px
          color: #41B883
        span
          margin-left: -6px
      .nav
        display: inline-block
        margin-right: 20px
        line-height: 50px
        float: right
        img
          width: 30px
          vertical-align: middle
          border-radius: 50%

    .swipe
      margin: 20px auto 0px;
      width: 95%
      height: 150px;
      img
        width: 100%

    .category
      display: flex
      text-align: center
      padding: 10px 0
      margin-bottom: 15px
      background-color: $color-home-item
      .category-item
        display: inline-block
        flex: 1
        .iconfont
          text-align: center
          display: inline-block
          font-size: 24px
          margin-bottom: 5px
    .booklist
      .time
        font-size: 16px
        margin-left: 5px
        span
          color: #f00

    footer
      text-align: center
      padding-top: 10px
      background: #fff


</style>
