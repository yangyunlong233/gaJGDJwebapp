<template>
  <div id="Home" class="home">
    <div class="home-top-ad"></div>
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
        <homeColListTypeA>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_a_01.svg">
          </template>
        </homeColListTypeA>
        <homeColListTypeA>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_a_02.svg">
          </template>
        </homeColListTypeA>
      </div>
      <div class="home-side-col-layout">
        <homeColSideNotice />
        <homeColSideFeature />
      </div>
    </div>
    <div class="layout1200">
      <homeGuideEntry />
    </div>
    <div class="layout1200">
      <div class="home-col-layout">
        <homeColListTypeB>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_b_01.svg">
          </template>
        </homeColListTypeB>
        <homeColListTypeB>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_b_02.svg">
          </template>
        </homeColListTypeB>
        <homeColListTypeB>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_b_03.svg">
          </template>
        </homeColListTypeB>
        <homeColListTypeB>
          <template v-slot:icon>
            <img src="../../assets/images/icon_col_title_type_b_04.svg">
          </template>
        </homeColListTypeB>
      </div>
      <div class="home-side-col-layout">
        <homeColSideTotal />
      </div>
      <homeColListTypeImg />
      <div class="home-col-layout full-col-layout">
        <homeColListTypeC />
        <homeColListTypeC />
        <homeColListTypeC />
        <homeColListTypeC />
        <homeColListTypeC />
        <homeColListTypeC />
      </div>
      <homeLinks />
    </div>
    <div class="home-bottom-bg"></div>
    <foot />
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import homeColSlider from './components/homeColSlider.vue'
import homeColTopNews from './components/homeColTopNews.vue'
import homeColListTypeA from './components/homeColListTypeA.vue'
import homeColListTypeB from './components/homeColListTypeB.vue'
import homeColListTypeC from './components/homeColListTypeC.vue'
import homeColSideNotice from './components/homeColSideNotice.vue'
import homeColSideFeature from './components/homeColSideFeature.vue'
import homeGuideEntry from './components/homeGuideEntry.vue'
import homeColSideTotal from './components/homeColSideTotal.vue'
import homeColListTypeImg from './components/homeColListTypeImg.vue'
import homeLinks from './components/homeLinks.vue'
import foot from '../../components/foot'
export default {
  name: 'Home',
  components: {
    topCover,
    mainNav,
    homeColSlider,
    homeColTopNews,
    homeColListTypeA,
    homeColListTypeB,
    homeColListTypeC,
    homeColSideNotice,
    homeColSideFeature,
    homeGuideEntry,
    homeColSideTotal,
    homeColListTypeImg,
    homeLinks,
    foot
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
}
.home-top-ad {
  height: 88px;
  background-image: url("../../assets/images/top_ad.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: auto 100%;
}
.home-col-layout {
  position: relative;
  z-index: 9;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 930px;
  margin: 30px 0 0;
}
.home-col-layout.full-col-layout {
  width: 1200px;
}
.home-side-col-layout {
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  width: 240px;
}
.home-bottom-bg {
  position: absolute;
  z-index: 1;
  bottom: 180px;
  width: 100%;
  height: 760px;
  background-image: url("../../assets/images/home_bottom_bg.jpg");
  background-size: 1920px 760px;
  background-repeat: no-repeat;
  background-position: bottom center;
}
</style>
