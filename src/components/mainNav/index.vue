<template>
  <div class="cmpt-main-nav" id="cmptMainNav">
    <ul class="nav-list">
      <li v-for="item, index in getNav" :key="index">
        <router-link v-if="item.viewName === '首页'" to="/">{{item.viewName}}</router-link>
        <router-link v-if="item.viewName !== '首页'" :to="{path: '/list', query: {id: item.hrefValue, limited: 10, page: 1}}">{{item.viewName}}</router-link>
      </li>
      <li class="search-button"><a><img src="../../assets/images/icon_search.svg"></a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'cmptMainNav',
  computed: {
    ...mapGetters([
      'getNav'
    ])
  },
  created () {
    if (this.getNav.length === 0) {
      this.get_contains()
    }
  },
  methods: {
    ...mapMutations([
      'setNav'
    ]),
    get_contains () {
      this.$axios.get('/api/menus/1')
        .then(response => {
          // console.log(response.data.data[0].bodyItems)
          this.$store.commit('setNav', response.data.data[0].bodyItems)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-main-nav {
  width: 100%;
  height: 58px;
  background: #db0a0b;
  border-top: 1px solid rgba(#e9ba71, .7);
  position: relative;
  top: -20px;
  margin-bottom: -20px;
  .nav-list {
    width: 1200px;
    margin: 0 auto;
    height: 58px;
    line-height: 58px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    li {
      transition: background .5s;
      padding: 0 20px;
      height: 58px;
      line-height: 58px;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
      }
    }
    li:hover {
      transition: background .5s;
      background: #c61415;
    }
    .search-button {
      padding: 0;
      width: 58px;
      background: #c61415;
      img {
        position: relative;
        top: 2px;
        display: inline-block;
        width: 24px;
      }
    }
  }
}
</style>
