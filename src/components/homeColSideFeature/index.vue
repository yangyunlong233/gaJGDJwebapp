<template>
  <div class="cmpt-home-col-side-feature" id="cmptHomeColSideFeature">
    <div class="entry-container">
      <div class="entry-min"><a href="#"><img src="../../assets/images/feature_entry_01.jpg"></a></div>
      <div class="entry-min"><a href="#"><img src="../../assets/images/feature_entry_02.jpg"></a></div>
      <div class="entry-min"><a href="#"><img src="../../assets/images/feature_entry_03.jpg"></a></div>
      <div class="entry-min"><a href="#"><img src="../../assets/images/feature_entry_04.jpg"></a></div>
    </div>
    <div class="entry-container">
      <div class="entry-normal"><a href="#"><img src="../../assets/images/feature_entry_05.jpg"></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColSideFeature'
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
