<template>
  <div>
    <loading v-if="loading"></loading>
    <pull-down v-show="!loading">
      <back-nav style="background: #f7f7f7;font-size: 20px">
        <span>{{bookDetail.name}}</span>
      </back-nav>
      <div class="book-detail">
        <div class="book-cover">
          <img :src="bookDetail.images" @error="loadImage($event)" alt="">
        </div>
        <div class="book-desc">
          <h3>{{ bookDetail.name}}</h3>
          <p>{{ bookDetail.author}}</p>
          <p>修仙/{{ bookDetail.type}}</p>
          <p>{{ bookDetail.wordcount}}万字 | {{bookDetail.serialize}}</p>
          <rate :score="bookDetail.ratings" class="rate"></rate>
        </div>
      </div>
      <div class="btn">
        <button @click="readBook">免费试读</button>
        <button @click="readBook">开始阅读</button>
        <button>加书架</button>
      </div>
      <p class="book-intro">{{bookDetail.intro}}</p>
      <h3 class="like">猜你喜欢</h3>

      <ul class="like-list">
        <li v-for="(like,index) in likes">
          <like :like="like" :key="index"></like>
        </li>
      </ul>
    </pull-down>
  </div>
</template>

<script>
  import BackNav from 'components/BackNav'
  import Loading from 'components/Loading'
  import Rate from 'components/BookDetail/Rate/Rate'
  import Like from 'components/BookDetail/Like'
  import PullDown from 'components/PullDown'
  import {mapState} from 'vuex'
  export default {
    components: {
      BackNav,Loading,Rate,PullDown,Like
    },
    data() {
      return {
        bookDetail: {},
        likes: []
      }
    },
    created() {
      this.getBookDetail(this.$route.params.id)
    },
    update (){
      this.loading = false
    },
    methods: {
      getBookDetail(id) {
        this.$store.state.loading = true
        this.$http.get(`http://39.108.14.248:3333/booklist?id=${id}`).then(res => {
          this.bookDetail = res.data
          this.likes = res.data.like.split("-")
//          console.log(this.like)
          this.$store.dispatch('toggleLoading')
        })
      },
      readBook() {
        this.$router.push({path: "/reader/"+this.bookDetail.id})
      },
      loadImage(e) {
        e.target.src = 'http://www.zwdu.com/files/article/image/20/20962/20962s.jpg'
      }
    },
    computed:{
      ...mapState([
        'loading'
      ])
    },
    watch: {
      '$route' (to, from) {
        this.getBookDetail(this.$route.params.id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .book-detail
    display: flex
    .book-cover
      width: 130px
      margin: 10px
      padding: 10px
      img
        width: 100%
    .book-desc
      color: #666
      margin: 10px
      padding: 20px 0px
      h3
        color: #222
        font-size: 18px
        font-weight: 400
        letter-spacing: 5px
        margin-bottom: 15px
      p
        margin: 15px 8px

  .btn
    display: flex
    margin: 10px 20px
    padding-bottom: 20px
    border-bottom: 1px solid #ddd
    button
      flex: 1
      height: 32px
      width: 100px
      border: 1px solid #ccc
      border-radius: 2px
      background: #fff
      margin: 0 10px
      &:first-child
        background: #f00
        color: #fff

  .book-intro
    margin: 20px
    line-height: 30px
    letter-spacing: 2px
    text-indent: 2em

  .like
    margin: 20px
    font-size: 20px
    font-weight: 600
    border-bottom: 1px solid #ddd
    padding-bottom: 20px
  .like-list
    display: flex
    li
      flex: 1
</style>
