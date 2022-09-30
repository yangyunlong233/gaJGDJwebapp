<template>
  <div class="cmpt-main-nav" id="cmptMainNav">
    <ul class="nav-list">
      <li><a href="#">首页</a></li>
      <li><a href="#">党建新闻</a></li>
      <li><a href="#">领导讲话</a></li>
      <li><a href="#">厅直党建</a></li>
      <li><a href="#">州市党建</a></li>
      <li><a href="#">党建知识</a></li>
      <li><a href="#">他山之石</a></li>
      <li><a href="#">五色长廊</a></li>
      <li><a href="#">建言献言</a></li>
      <li class="search-button"><a href="#"><img src="../../assets/images/icon_search.svg"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptMainNav'
}
</script>

<style lang="scss" scoped>
.cmpt-main-nav {
  width: 100%;
  height: 58px;
  background: #db0a0b;
  position: relative;
  top: -20px;
  margin-bottom: -20px;
  .nav-list {
    width: 1200px;
    margin: 0 auto;
    height: 58px;
    line-height: 58px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    li {
      transition: background .5s;
      padding: 0 20px;
      height: 58px;
      line-height: 58px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    }
    li:hover {
      transition: background .5s;
      background: #c61415;
    }
    .search-button {
      padding: 0;
      width: 58px;
      background: #c61415;
      img {
        position: relative;
        top: 2px;
        display: inline-block;
        width: 24px;
      }
    }
  }
}
</style>
