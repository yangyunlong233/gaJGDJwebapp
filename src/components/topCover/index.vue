<template>
  <div class="cmpt-top-cover" id="cmptTopCover">
    <div class="layout1200">
      <div class="site-logo"><img src="../../assets/images/site_logo.png"></div>
      <div class="ga-logo"><img src="../../assets/images/ga_logo.png"></div>
      <div class="top-title"><img src="../../assets/images/top_title.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptTopCover'
}
</script>

<style lang="scss" scoped>
.cmpt-top-cover {
  width: 100%;
  height: 300px;
  background-image: url(../../assets/images/top_cover.jpg);
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
  .layout1200 {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .site-logo, .ga-logo {
    position: absolute;
    top: 60px;
    height: 70px;
    img {
      height: 100%;
      width: auto;
    }
  }
  .site-logo {
    left: 0;
  }
  .ga-logo {
    right: 0;
  }
  .top-title {
    position: absolute;
    bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
    height: 32px;
    img {
      height: 100%;
      width: auto;
    }
  }
}
</style>
