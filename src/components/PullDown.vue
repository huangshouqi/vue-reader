<template>
  <!--mint-ui loadmore组件-->
  <mt-loadmore
    :top-method="loadTop"
    :auto-fill="false"
    ref="loadmore">
    <slot></slot>
  </mt-loadmore>
</template>

<script>
    export default {
        methods: {
          loadTop() {
            history.go(0) // 下拉刷新
            this.$refs.loadmore.onTopLoaded()
          }
        }
    }
</script>

