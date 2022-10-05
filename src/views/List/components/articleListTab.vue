<template>
  <div class="cmpt-article-list-tab" id="cmptArticleListTab">
    <ul>
      <li class="current"><a href="#">干部任免</a></li>
      <li><a href="#">职级调整</a></li>
      <li><a href="#">人员调配</a></li>
      <li><a href="#">退休离职</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptArticleListTab'
}
</script>

<style lang="scss" scoped>
.cmpt-article-list-tab {
  ul {
    width: 200px;
    li {
      position: relative;
      padding: 0 40px 0 0;
      margin: 0 0 20px;
      width: auto;
      height: 52px;
      line-height: 52px;
      text-align: right;
      font-size: 18px;
      font-weight: normal;
      transition: background .5s;
    }
    li.current {
      background: #DB0A0B;
      font-weight: bold;
      color: #fff;
    }
    li:hover {
      background: rgba(#DB0A0B, .2);
      transition: background .5s;
    }
    li.current:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      width: 13px;
      height: 13px;
      background-image: url("../../../assets/images/icon_article_list_tab_current.svg");
      background-repeat: no-repeat;
    }
    li.current:hover {
      background: #DB0A0B;
    }
  }
}
</style>
