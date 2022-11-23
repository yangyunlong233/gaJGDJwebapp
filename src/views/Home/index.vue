<template>
  <div id="Home" class="home">
    <div class="home-top-ad"></div>
    <topCover />
    <mainNav />
    <div class="layout1200">
      <div class="ad-1200">
        <a :href="fullAd.hrefValue"><img :src="fullAd.viewImage"/></a>
      </div>
    </div>
    <div class="layout1200">
      <div class="home-col-layout">
        <homeColSlider />
        <homeColTopNews />
      </div>
      <div class="home-col-layout">
        <!-- homeColListTypeC vuex state is columnTypeAState -->
        <homeColListTypeA v-for="item, index in columnTypeAState" :key="index" :colId="item.id" :title="item.title">
          <template v-slot:icon>
            <img :src="item.icon">
          </template>
        </homeColListTypeA>
      </div>
      <div class="home-side-col-layout">
        <homeColSideNotice />
        <homeColSideFeature :contains="featureAd"/>
      </div>
    </div>
    <div class="layout1200" style="z-index: 99">
      <homeGuideEntry />
    </div>
    <div class="layout1200">
      <div class="home-col-layout">
        <!-- homeColListTypeC vuex state is columnTypeBState -->
        <homeColListTypeB v-for="item, index in columnTypeBState" :key="index" :colId="item.id" :title="item.title">
          <template v-slot:icon>
            <img :src="item.icon">
          </template>
        </homeColListTypeB>
      </div>
      <div class="home-side-col-layout">
        <homeColSideTotal />
      </div>
      <homeColListTypeImg />
      <div class="home-col-layout full-col-layout">
        <!-- homeColListTypeC vuex state is columnTypeCState -->
        <homeColListTypeC v-for="item, index in columnTypeCState" :key="index" :title1="item.title1" :title2="item.title2" :colId1="item.id1" :colId2="item.id2" />
      </div>
      <homeLinks />
    </div>
    <div class="home-bottom-bg"></div>
    <foot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getGroupImgLinks } from '../../api.js'
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
  data () {
    return {
      fullAd: {},
      featureAd: []
    }
  },
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
  },
  computed: {
    ...mapState([
      'columnTypeAState',
      'columnTypeBState',
      'columnTypeCState'
    ])
  },
  created () {
    this.get_nav_handle()
    this.get_ad_links()
  },
  methods: {
    getGroupImgLinks,
    ...mapMutations([
      'setNav'
    ]),
    // 首页上发请求获取菜单，放到 vuex 中供使用，首页菜单组 id: 1
    get_nav_handle () {
      this.$axios.get('/api/menus/body/1').then(response => {
        this.$store.commit('setNav', response.data.data)
      })
        .catch(error => {
          console.log('--------' + error)
        })
    },
    get_ad_links () {
      this.getGroupImgLinks(1).then(response => {
        this.fullAd = response[0]
        this.featureAd = response.slice(1)
      })
    }
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
