<template>
  <div class="list" id="List">
    <topCover />
    <mainNav />
    <breadcrumb />
    <div class="layout1200">
      <articleListTab />
      <articleList />
    </div>
    <pagination />
    <foot />
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import breadcrumb from '../../components/breadcrumb'
import articleListTab from './components/articleListTab.vue'
import articleList from './components/articleList.vue'
import pagination from '../../components/pagination'
import foot from '../../components/foot'
export default {
  name: 'List',
  components: {
    topCover,
    mainNav,
    breadcrumb,
    articleListTab,
    articleList,
    pagination,
    foot
  }
}
</script>

<style lang="scss">
.list {
  > .layout1200 {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
