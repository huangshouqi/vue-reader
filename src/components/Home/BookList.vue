<template>
  <div class="booklist">
    <h3 class="title">
      {{ title }}
      <!--限时免费倒计时插槽-->
      <slot></slot>
    </h3>
    <div class="list">
      <ul class="list-item">
        <li v-for="book in booklist" class="book">
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
  </div>
</template>

<script>
  export default {
    props: ['booklist', 'title']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/variable.styl"
  @import "~stylus/mixin.styl"
  @import "~stylus/iconfont.styl"
  .booklist
    booklist-item()
    .title
      title-style()

    .list
      padding: 0 10px
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
                  .iconfont
                    vertical-align: -1px
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
