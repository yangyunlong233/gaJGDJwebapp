<template>
  <div class="article" id="Article">
    <topCover />
    <mainNav />
    <breadcrumb />
    <div class="info">
      <span>来源：办公室</span>
      <span>作者：李建刚</span>
      <span>审核：林东</span>
      <span>发布时间：2022-03-02 14:00:00</span>
      <span>
        <img src="@/assets/images/icon_article_print.svg">
        <a class="current" href="#">打印</a>
      </span>
      <span>
        <img src="@/assets/images/icon_article_fz.svg">
        <i>字号</i>
        <a href="#">大</a>
        <a class="current" href="#">中</a>
        <a href="#">小</a>
      </span>
    </div>
    <div class="container">
      <h1>习近平主持召开中央全面深化改革委员会第二十四次会议强调<br>
      加快建设世界一流企业 加强基础学科人才培养<br>
      李克强王沪宁韩正出席</h1>
      <div class="content">
        <p>新华社北京2月28日电 中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平2月28日下午主持召开中央全面深化改革委员会第二十四次会议，审议通过了《关于加快建设世界一流企业的指导意见》、《推进普惠金融高质量发展的实施意见》、《关于加强基础学科人才培养的意见》、《关于推进国有企业打造原创技术策源地的指导意见》。</p>
        <p>新华社北京2月28日电 中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平2月28日下午主持召开中央全面深化改革委员会第二十四次会议，审议通过了《关于加快建设世界一流企业的指导意见》、《推进普惠金融高质量发展的实施意见》、《关于加强基础学科人才培养的意见》、《关于推进国有企业打造原创技术策源地的指导意见》。</p>
        <p>新华社北京2月28日电 中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平2月28日下午主持召开中央全面深化改革委员会第二十四次会议，审议通过了《关于加快建设世界一流企业的指导意见》、《推进普惠金融高质量发展的实施意见》、《关于加强基础学科人才培养的意见》、《关于推进国有企业打造原创技术策源地的指导意见》。</p>
        <p>新华社北京2月28日电 中共中央总书记、国家主席、中央军委主席、中央全面深化改革委员会主任习近平2月28日下午主持召开中央全面深化改革委员会第二十四次会议，审议通过了《关于加快建设世界一流企业的指导意见》、《推进普惠金融高质量发展的实施意见》、《关于加强基础学科人才培养的意见》、《关于推进国有企业打造原创技术策源地的指导意见》。</p>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import breadcrumb from '../../components/breadcrumb'
import foot from '../../components/foot'
export default {
  name: 'Article',
  components: {
    topCover,
    mainNav,
    breadcrumb,
    foot
  }
}
</script>

<style lang="scss">
.article {
  .info {
    width: 1200px;
    margin: 30px auto 10px;
    padding: 15px 0;
    border-top: 1px solid #B3B3B3;
    border-bottom: 1px solid #B3B3B3;
    text-align: center;
    span {
      margin: 0 30px;
      display: inline-block;
      font-size: 14px;
      color: #7A7A7A;
      a, i {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        font-size: 14px;
        margin: 0 5px;
      }
      a.current {
        color: #DB0A0B;
        text-decoration: underline;
      }
      a:hover {
        color: #DB0A0B;
        text-decoration: underline;
      }
    }
  }
  .container {
    width: 960px;
    margin: 0 auto 80px;
    h1 {
      font-size: 34px;
      font-weight: bold;
      padding: 40px 0;
      text-align: center;
    }
    .content {
      p {
        padding: 0 0 18px 0;
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
}
</style>
