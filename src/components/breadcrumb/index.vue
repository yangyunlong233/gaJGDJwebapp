<template>
  <div class="cmpt-breadcrumb" id="cmptBreadcrumb">
    <div class="layout1200">
      <img src="../../assets/images/icon_breadcrumb_flag.svg">
      <span><a href="/">首页</a></span>
      <span>/</span>
      <span><router-link :to="{path: '/list', query: {id: borderId, limited: 10, page: 1}}">{{viewName}}</router-link></span>
      <span>/</span>
      <span class="current">{{from}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptBreadcrumb',
  props: ['viewName', 'borderId', 'from']
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
