<template>
  <div class="cmpt-home-col-side-feature" id="cmptHomeColSideFeature">
    <div class="entry-container">
      <div class="entry-min" :class="{'entry-normal': index === 4}" v-for="item, index in contains" :key="index"><a :href="item.hrefValue"><img :src="item.viewImage"></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColSideFeature',
  props: {
    contains: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  created () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-side-feature {
  .entry-container {
    margin: 35px 0 -15px;
    display: flex;
    flex-flow: row wrap;
    width: 240px;
    justify-content: space-between;
    .entry-min {
      margin: 0 0 15px;
      width: 114px;
      height: 142px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .entry-normal {
      margin-top: 10px;
      width: 240px;
      height: 85px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
