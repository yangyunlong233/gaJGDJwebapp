<template>
  <div class="cmpt-home-guide-entry" id="cmptHomeGuideEntry">
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>应用系统导航</span>
    </div>
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>全国公安导航</span>
    </div>
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>全省公安导航</span>
    </div>
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>厅直部门</span>
    </div>
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>州市党建</span>
    </div>
    <div class="entry">
      <img src="@/assets/images/icon_guide.svg">
      <span>专题专栏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeGuideEntry'
}
</script>

<style lang="scss" scoped>
.cmpt-home-guide-entry {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 0 40px;
  .entry {
    width: 180px;
    height: 68px;
    line-height: 68px;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    text-align: center;
    img, span {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      margin-left: 8px;
    }
  }
}
</style>
