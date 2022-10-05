<template>
  <div class="cmpt-pagination" id="cmptPagination" :style="{padding:(type == 'clear' ? '0' : '0 0 0 240px'), width:(type == 'clear' ? '1200px' : '960px')}">
    <span class="current"><a href="#">1</a></span>
    <span><a href="#">2</a></span>
    <span><a href="#">3</a></span>
    <span><a href="#">4</a></span>
    <span><a href="#">5</a></span>
    <span><a href="#">...</a></span>
    <span><a href="#">上一页</a></span>
    <span><a href="#">下一页</a></span>
    <span><a href="#">末页</a></span>
    <span class="total">1/16页</span>
    <span class="total">共176条</span>
  </div>
</template>

<script>
export default {
  name: 'cmptPagination',
  props: ['type']
}
</script>

<style lang="scss" scoped>
.cmpt-pagination {
  margin: 40px auto 60px;
  span {
    display: inline-block;
    margin: 0 10px;
    font-size: 14px;
    border: 1px solid #B3B3B3;
    text-align: center;
    border-radius: 4px;
    transition: all .5s;
    a {
      display: inline-block;
      padding: 0 10px;
      height: 42px;
      line-height: 42px;
      min-width: 22px;
    }
  }
  span:hover {
    background: #DB0A0B;
    border-color: #DB0A0B;
    color: #fff;
    font-weight: bold;
    transition: all .5s;
  }
  span:first-of-type {
    margin-left: 0;
  }
  span.current {
    background: #DB0A0B;
    border-color: #DB0A0B;
    color: #fff;
    font-weight: bold;
  }
  span.total {
    margin: 0 0 0 30px;
    border: 0;
  }
  span.total:hover {
    background: none;
    border: 0;
    color: #000;
    font-weight: normal;
  }
}
</style>
