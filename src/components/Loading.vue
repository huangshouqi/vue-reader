<template>
  <div class="loading">
    <div><span></span></div>
    <div><span></span></div>
    <div><span></span></div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loading
    width: 30px
    height: 30px
    -webkit-animation: load 3s linear infinite
    position fixed
    top: 40%
    left: 45%

  .loading div
    width: 100%
    height: 100%
    position: absolute  

  .loading span
    display: inline-block
    width: 20px
    height: 20px
    border-radius: 50%
    background: #99CC66
    position: absolute
    left: 50%
    margin-top: -10px
    margin-left: -10px
    -webkit-animation: changeBgColor 3s ease infinite


  @-webkit-keyframes load
    0%
      -webkit-transform: rotate(0deg)
    33.3%
      -webkit-transform: rotate(120deg)
    66.6%
      -webkit-transform: rotate(240deg)

    100%
      -webkit-transform: rotate(360deg)

  @-webkit-keyframes changeBgColor
    0%, 100%
      background: #99CC66

    33.3%
      background: #FFFF66

    66.6%
      background: #FF6666



  .loading div:nth-child(2)
    -webkit-transform: rotate(120deg)


  .loading div:nth-child(3)
    -webkit-transform: rotate(240deg)


  .loading div:nth-child(2) span
    -webkit-animation-delay: 1s


  .loading div:nth-child(3) span
    -webkit-animation-delay: 2s

</style>
