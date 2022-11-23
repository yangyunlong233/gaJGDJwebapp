<template>
  <div class="cmpt-main-nav" id="cmptMainNav">
    <ul class="nav-list">
      <li v-for="item, index in getNav" :key="index">
        <router-link v-if="item.viewName === '首页'" to="/">{{item.viewName}}</router-link>
        <router-link v-if="item.viewName !== '首页'" :to="{path: '/list', query: {id: item.hrefValue, limited: 10, page: 1}}">{{item.viewName}}</router-link>
      </li>
      <li class="search-button" @click="search_show_handler()"><a><img src="../../assets/images/icon_search.svg"></a></li>
    </ul>
    <transition>
      <div class="search-layout" v-show="showSearch">
        <div class="layout1200">
          <input type="text" placeholder="请输入搜索关键字" v-model="keyWords">
          <button class="search-action" @click="search_action_handler()">搜索</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'cmptMainNav',
  data () {
    return {
      showSearch: false,
      keyWords: ''
    }
  },
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
    },
    search_show_handler () {
      this.showSearch = !this.showSearch
    },
    search_action_handler () {
      if (this.keyWords) {
        this.$router.push(`/search?key=${this.keyWords}&page=1`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-main-nav {
  width: 100%;
  background: #db0a0b;
  border-top: 1px solid rgba(#e9ba71, .7);
  position: relative;
  top: -20px;
  margin-bottom: -20px;
  .search-layout {
    box-sizing: border-box;
    position: relative;
    height: 50px;
    background: rgba(#fff, .95);
    border-bottom: 1px solid rgba(#ccc, .3);
    z-index: 9999;
    input {
      margin-right: 100px;
      width: calc(100% - 4px - 100px);
      height: 46px;
      border: 0;
      border-bottom: 2px solid #db0a0b;
      background: none;
      outline: none;
      font-size: 16px;
      text-align: left;
    }
    .search-action {
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 50px;
      background: rgba(#db0a0b, .8);
      border: 0;
      border-left: 2px solid #db0a0b;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
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
/* 进入之前和离开后的样式 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(30%);
}

/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: all 0.3s ease;
}

/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
