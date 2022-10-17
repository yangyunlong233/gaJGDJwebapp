<template>
  <div class="list" id="List">
    <topCover />
    <mainNav />
    <breadcrumb :borderId="borderId" :viewName="viewName" from="文章列表"/>
    <div class="layout1200">
      <articleListTab :borderId="borderId" />
      <articleList v-if="listContains.length > 0" :listContains="listContains" />
      <div v-if="listContains.length == 0" class="empty">此栏目下还没有文章</div>
    </div>
    <pagination v-if="totalPage != 0" :borderId="borderId" :limited="limited" :page="page" :count="count" :totalPage="totalPage"/>
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
  data () {
    return {
      borderId: this.$route.query.id,
      viewName: '',
      limited: this.$route.query.limited,
      page: this.$route.query.page,
      listContains: [],
      count: 0,
      totalPage: 0
    }
  },
  components: {
    topCover,
    mainNav,
    breadcrumb,
    articleListTab,
    articleList,
    pagination,
    foot
  },
  created () {
    this.get_list_contains()
  },
  methods: {
    get_list_contains () {
      this.$axios.get(`/api/doc/page/${this.borderId}/${this.limited}/${this.page}`)
        .then(response => {
          this.listContains = response.data.data
          if (response.data.data.length >= 1) {
            this.viewName = response.data.data[0].viewName
          } else {
            this.viewName = '空栏目'
          }
          console.log('list', response.data.data)
          this.count = response.data.count
          this.totalPage = response.data.totalPage
          // console.log(response.data)
        })
    }
  }
}
</script>

<style lang="scss">
.list {
  > .layout1200 {
    display: flex;
    flex-flow: row nowrap;
  }
  .empty {
    padding: 20px 0 0 30px;
    min-height: 880px;
    border-left: 1px solid #B3B3B3;
    width: auto;
    font-size: 20px;
    margin: 0;
    text-align: center;
    color: #7a7a7a;
  }
}
</style>
