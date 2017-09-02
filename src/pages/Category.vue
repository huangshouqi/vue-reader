<template>
  <div class="category">
    <loading v-if="loading"></loading>
    <pull-down>
      <back-nav class="tab">
      <h2>{{ getTitle }}</h2>
    </back-nav>

      <div class="list" v-show="!loading">
      <ul class="list-item">
        <li v-for="book in categoryList" class="book">
          <router-link :to="{path:'/bookdetail/'+book.id}">

            <div class="book-img">
              <img :src="book.images" alt="">
            </div>

            <div class="book-detail">

              <h3>{{book.name}}</h3>
              <p>{{book.intro}}</p>
              <div class="desc-wrap">
                <div class="book-author">
                  <i class="iconfont icon-lanmuzuozhe"></i>
                  <span>{{book.author}}</span>
                </div>

                <div class="book-desc">
                  <span>{{book.type}}</span>
                  <span>{{book.serialize}}</span>
                  <span>{{book.wordcount}}万</span>
                </div>
              </div>

            </div>
          </router-link>
        </li>
      </ul>
    </div>
    </pull-down>

  </div>
</template>

<script>
  import BackNav from 'components/BackNav'
  import PullDown from 'components/PullDown'
  import Loading from 'components/Loading'
  import {mapState} from 'vuex'
  export default {
    components: {BackNav,PullDown,Loading},
    data() {
      return {
        categoryList: []
      }
    },
    created() {
      this.getCategory(this.$route.query.type)
    },
    methods: {
      getCategory(type) {
        this.$store.state.loading = true
        this.$http.get(`http://39.108.14.248:3333/type?type=${type}`).then(res => {
          this.$store.dispatch('toggleLoading')
          this.loading = false
          this.categoryList = res.data
        })
      }
    },
    computed: {
      ...mapState([
        'loading'
      ]),
      getTitle() {
        switch (this.$route.query.type) {
          case 1:
            return '玄幻'
            break
          case 2:
            return '修真'
            break
          case 3:
            return '都市'
            break
          case 4:
            return '历史'
            break
          case 5:
            return '网游'
            break
          default:
            return '分类'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~stylus/iconfont.styl'
  .category
    .tab
      line-height: 44px
      margin-top: 10px
      box-sizing: border-box
      h2
        font-size: 20px
        display: inline-block
    .list
      border-top: 20px solid #f6f7f9
      padding: 0 20px
      .list-item
        .book
          display: flex
          padding-bottom: 20px
          margin: 30px 0
          border-bottom: 1px solid #ddd
          &:last-of-type
            border-bottom: none
          a
            display: flex
            .book-img
              width: 80px
              img
                width: 100%

            .book-detail
              flex: 1
              padding: 0
              margin-left: 20px
              position: relative
              h3
                font-size: 20px
                margin-bottom: 10px
                color: #333
                font-weight: bold
              p
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                line-clamp: 2
                font-size: 18px
                line-height: 24px
                color: #969ba3
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
              .desc-wrap
                position: absolute
                left: 0
                bottom: 0
                width: 100%
                .book-author
                  display: inline-block
                  float: left
                  font-size: 14px
                .book-desc
                  display: inline-block
                  float: right
                  span
                    font-size: 12px
                    border: 1px solid #ccc
                  span
                    border: 1px solid #ccc
                    border-radius: 2px
                    padding: 0 2px
                  span:first-child
                    color: #ffa100
                  span:nth-child(2)
                    color: #ed424b
                  span:nth-child(3)
                    color: #4284ed
</style>
