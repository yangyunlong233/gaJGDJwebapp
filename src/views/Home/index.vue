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
    </div>
    <div class="layout1200">
      <homeColListTypeImg />
    </div>
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import homeColSlider from '../../components/homeColSlider'
import homeColTopNews from '../../components/homeColTopNews'
import homeColListTypeA from '../../components/homeColListTypeA'
import homeColListTypeB from '../../components/homeColListTypeB'
import homeColSideNotice from '../../components/homeColSideNotice'
import homeColSideFeature from '../../components/homeColSideFeature'
import homeGuideEntry from '../../components/homeGuideEntry'
import homeColSideTotal from '../../components/homeColSideTotal'
import homeColListTypeImg from '../../components/homeColListTypeImg'
export default {
  name: 'Home',
  components: {
    topCover,
    mainNav,
    homeColSlider,
    homeColTopNews,
    homeColListTypeA,
    homeColListTypeB,
    homeColSideNotice,
    homeColSideFeature,
    homeGuideEntry,
    homeColSideTotal,
    homeColListTypeImg
  }
}
</script>

<style lang="scss">
.home-col-layout {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 930px;
  margin: 30px 0 0;
}
.home-side-col-layout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 240px;
}
</style>
