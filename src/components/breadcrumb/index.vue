<template>
  <div class="cmpt-breadcrumb" id="cmptBreadcrumb">
    <div class="layout1200">
      <img src="../../assets/images/icon_breadcrumb_flag.svg">
      <span><a href="#">首页</a></span>
      <span>/</span>
      <span><a href="#">新闻动态</a></span>
      <span>/</span>
      <span class="current">文章列表</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptBreadcrumb'
}
</script>

<style lang="scss" scoped>
.cmpt-breadcrumb {
  > .layout1200 {
    margin: 30px auto;
    text-align: right;
    img, span {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      margin: 0 10px;
      font-size: 14px;
      color: #B3B3B3;
      a {
        text-decoration: underline;
      }
    }
    span.current {
      color: #DB0A0B;
    }
  }
}
</style>
