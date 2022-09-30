<template>
  <div id="Home" class="home">
    <topCover />
    <mainNav />
    <div class="layout1200">
      <div class="ad-1200"><img src="../../assets/images/ad_1200.jpg"></div>
      <div class="home-col-layout">
        <homeColSlider />
        <homeColTopNews />
      </div>
    </div>
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import homeColSlider from '../../components/homeColSlider'
import homeColTopNews from '../../components/homeColTopNews'
export default {
  name: 'Home',
  components: {
    topCover,
    mainNav,
    homeColSlider,
    homeColTopNews
  }
}
</script>

<style lang="scss">
.home-col-layout {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 930px;
}
</style>
