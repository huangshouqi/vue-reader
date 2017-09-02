<template>
  <div class="recommend">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="list">
      <ul class="list-item">
        <li v-for="book in booklist" class="book">
          <router-link :to="{path:'/bookdetail/'+book.id}">
            <img :src="book.images" alt="">
            <p class="book-name">{{ book.name }}</p>
            <p class="book-auther">{{ book.author }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['booklist', 'title'],
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~stylus/mixin.styl"
  .recommend
    booklist-item()
    .title
      title-style()
    .list
    .list-item
      position: relative
      overflow-x: auto
      overflow-y: hidden
      white-space: nowrap
      text-indent: 7px
      .book
        display: inline-block
        margin-right: 8px
        width: 100px
        font-size 14px
        img
          width: 100%
          height: 125px
        p
          no-wrap()
          margin: 3px 0
        .book-name
          font-size: 16px
        .book-auther
          font-size: 14px
          color: #ccc
</style>
