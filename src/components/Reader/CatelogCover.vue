<template>
  <div class="cover" @click="hideCatelogPanel">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      hideCatelogPanel() {
        this.$store.state.catelog_panel = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cover
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    opacity: 1
    z-index: 10
    background-color: rgba(0,0,0,.5)
    transition: all .5s
    &.hide
      position: static
      opacity:0
</style>
