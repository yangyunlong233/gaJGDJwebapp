<template>
  <div id="Home" class="home">
    <topCover />
    <mainNav />
    <div class="layout1200">
      <div class="ad-1200"><img src="../../assets/images/ad_1200.jpg"></div>
    </div>
    <div class="layout1200">
      <div class="home-col-layout">
        <homeColSlider />
        <homeColTopNews />
      </div>
      <div class="home-col-layout">
        <homeColListMinimal>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_notice.svg">
          </template>
        </homeColListMinimal>
        <homeColListMinimal>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_microphone.svg">
          </template>
        </homeColListMinimal>
      </div>
      <div class="home-side-col-layout">
        <homeColNotice />
      </div>
    </div>
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import homeColSlider from '../../components/homeColSlider'
import homeColTopNews from '../../components/homeColTopNews'
import homeColListMinimal from '../../components/homeColListMinimal'
import homeColNotice from '../../components/homeColNotice'
export default {
  name: 'Home',
  components: {
    topCover,
    mainNav,
    homeColSlider,
    homeColTopNews,
    homeColListMinimal,
    homeColNotice
  }
}
</script>

<style lang="scss">
.home-col-layout {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 930px;
  margin: 30px 0 40px;
}
.home-side-col-layout {
  position: absolute;
  top: 0;
  right: 0;
  width: 240px;
}
</style>
