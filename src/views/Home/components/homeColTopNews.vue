<template>
  <div class="cmpt-home-col-top-news" id="cmptHomeColTopNews">
    <div class="top-news-container">
      <h1><a href="#">十三届全国人大五次会议在京开幕<br>习近平汪洋王沪宁赵乐际等在主席台就座</a></h1>
    </div>
    <ul class="news-list">
      <li><a href="#">习近平中青班开班式讲话要点梳理学习专题习近平中青班开班式讲话要点梳理学习专题<span>03-06</span></a></li>
      <li><a href="#">中组部召开基层党建工作重点任务推进会<span>03-06</span></a></li>
      <li><a href="#">听音频 学“四史” 这四本简史有声书请查收<span>03-06</span></a></li>
      <li><a href="#">《我们，从延安走来》| 实事求是思想路线这样形成<span>03-06</span></a></li>
      <li><a href="#">雷锋精神| 永不停驶的"雷锋车" 走过近60年风雨历程<span>03-06</span></a></li>
      <li><a href="#">暖心！为了这对母子 公交公司专门增设一块公交车站牌<span>03-06</span></a></li>
      <li><a href="#">漫画 | @年轻干部 这些不良网络嗜好需警惕<span>03-06</span></a></li>
      <li><a href="#">党务参考 | 退休人员的党费是如何交纳的 标准是什么<span>03-06</span></a></li>
      <li><a href="#">《每周学习参考》 （2022年2月28日—3月6日）<span>03-06</span></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColTopNews'
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-top-news {
  width: 450px;
  margin: 0 0 20px;
  .top-news-container {
    width: 100%;
    h1 {
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      color: #DB0A0B;
      text-align: center;
      border-bottom: 1px solid #B3B3B3;
      padding: 0 0 20px;
      margin: 0 0 5px;
    }
  }
  .news-list {
    width: 100%;
    li {
      position: relative;
      padding: 18px 40px 0 0;
      font-size: 16px;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        position: absolute;
        top: 19px;
        right: 0;
        font-size: inherit;
        color: #B3B3B3;
      }
    }
  }
}
</style>
