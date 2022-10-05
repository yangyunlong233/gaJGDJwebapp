<template>
  <div class="cmpt-foot" id="cmptFoot">
    <div class="layout1200">
      <div class="toolbar">
        <div class="dataview">
          <img src="../../assets/images/icon_foot_dataview.svg">
          <span>网站访问总量：<b>222039</b>次</span>
          <span>全年访问量：<b>11827</b>次</span>
          <span>本月访问量：<b>11827</b>次</span>
          <span>今日访问量：<b>11827</b>次</span>
        </div>
        <div class="admin-button">
          <img src="../../assets/images/icon_foot_admin.svg">
          <a href="#">登录管理后台</a>
        </div>
      </div>
      <div class="logo">
        <img src="../../assets/images/foot_site_logo.png">
        <img src="../../assets/images/foot_ga_logo.png">
      </div>
      <div class="copy">
        <p>云南公安经检监察 运行维护</p>
        <p>copyright©2019. all rights reserved 电话：0871-63051327</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptFoot'
}
</script>

<style lang="scss" scoped>
.cmpt-foot {
  position: relative;
  z-index: 9;
  margin: 50px 0 0;
  height: 294px;
  background-image: url("../../assets/images/copy_bg.jpg");
  background-repeat: no-repeat;
  background-size: 1920px 100%;
  background-position: top center;
  .toolbar {
    position: relative;
    border-bottom: 1px solid #fff;
    .dataview {
      padding: 45px 0;
      img, span {
        display: inline-block;
        vertical-align: middle;
        margin: 0 20px 0 0;
      }
      span {
        font-size: 14px;
        color: #fff;
        b {
          font-weight: bold;
        }
      }
    }
    .admin-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      padding: 12px 15px;
      background: rgba(206, 221, 232, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      img, a {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 14px;
        margin: 0 10px;
      }
    }
  }
  .logo {
    padding: 65px 0 0;
    img {
      height: 52px;
      margin: 0 70px 0 0;
    }
  }
  .copy {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: #fff;
    text-align: right;
    text-transform: uppercase;
    line-height: 24px;
  }
}
</style>
