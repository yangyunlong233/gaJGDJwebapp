<template>
  <div class="cmpt-article-list" id="cmptArticleList">
    <ul class="type-a">
      <li>
        <a href="#">
          <img src="@/assets/images/article_case/list_case.jpg">
          <h3>打击治理跨境赌博工作第四次专题会议召开 坚持重拳出击 注重标本兼治</h3>
          <p>全国公安机关“昆仑2022”专项行动动员部署视频会议2月28日召开，公安部党委委员、副部长杜航伟出席并讲话。会议强调，要认真学习贯彻习近平总书记重要指示...</p>
          <span>03-12</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="@/assets/images/article_case/list_case.jpg">
          <h3>打击治理跨境赌博工作第四次专题会议召开 坚持重拳出击 注重标本兼治</h3>
          <p>全国公安机关“昆仑2022”专项行动动员部署视频会议2月28日召开，公安部党委委员、副部长杜航伟出席并讲话。会议强调，要认真学习贯彻习近平总书记重要指示...</p>
          <span>03-12</span>
        </a>
      </li>
    </ul>
    <ul class="type-b">
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
      <li><a href="#">公安部部署打击食药环和知识产权犯罪“昆仑2022”专项行动<span>03-12</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptArticleList'
}
</script>

<style lang="scss" scoped>
.cmpt-article-list {
  width: 999px;
  min-height: 800px;
  border-left: 1px solid #B3B3B3;
  ul {
    width: auto;
    padding: 0 0 0 40px;
    li {
      position: relative;
    }
  }
  ul.type-a {
    li {
      padding: 0 0 0 210px;
      min-height: 128px;
      margin: 0 0 30px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 192px;
        height: 128px;
      }
      h3 {
        padding: 5px 0 0;
        font-size: 20px;
        font-weight: bold;
      }
      p {
        padding: 10px 0;
        font-size: 16px;
        color: #7A7A7A;
      }
      span {
        display: block;
        font-size: 16px;
        color: #B3B3B3;
      }
    }
  }
  ul.type-b {
    margin: 40px 0 0;
    li {
      margin: 35px 0;
      font-size: 18px;
      span {
        padding: 0 0 0 20px;
        font-size: inherit;
        color: #B3B3B3;
      }
    }
  }
}
</style>
