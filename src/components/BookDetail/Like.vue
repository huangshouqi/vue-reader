<template>

  <div class="like">
    <router-link :to="{path:'/bookdetail/'+bookDetail.id}">
      <div class="like">
        <img :src="bookDetail.images" @error="loadImage($event)" alt="">
      </div>
      <p>{{bookDetail.name}}</p>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        bookDetail: {}
      }
    },
    props: {
      like: {
        type: String,
        required: true
      }
    },
    created() {
      this.getBookDetail(this.like)
    },
    methods: {
      getBookDetail(id) {
        this.$http.get(`http://39.108.14.248:3333/booklist?id=${id}`).then((res) => {
          this.bookDetail = res.data
        })
      },
      loadImage(e) {
        e.target.src = 'http://www.zwdu.com/files/article/image/20/20962/20962s.jpg'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .like
    height: 140px
    .like-img
      height: 140px
    img
      width: 100%
      height: 100%
      &[src=""]
        opacity: 0
</style>

