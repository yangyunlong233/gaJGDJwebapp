<template>
  <div id="NotFound" class="not-found">
    <div class="home-top-ad"></div>
    <topCover />
    <div class="contains">
      <img src="../../assets/images/404.jpg">
      <h1>您访问的资源不存在:(</h1>
      <p><a href="/">[返回网站首页]</a>，如无法解决，请联系管理员</p>
    </div>
  </div>
  <foot />
</template>

<script>
import topCover from '../../components/topCover'
import foot from '../../components/foot'
export default {
  name: 'NotFound',
  components: {
    topCover,
    foot
  }
}
</script>

<style lang="scss">
.not-found {
  position: relative;
  .contains {
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;
    img {
      height: 200px;
    }
    h1 {
      padding: 40px 0 10px;
      font-size: 24px;
      font-weight: bold;
    }
    p {
      padding: 15px 0;
      font-size: 16px;
    }
  }
}
</style>
