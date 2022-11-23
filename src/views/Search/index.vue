<template>
  <div class="search" id="Search">
    <topCover />
    <mainNav />
    <div class="layout1200">
      <div class="search-container">
        <input type="text" v-model="nextKey" placeholder="请输入关键字">
        <button @click="search_action_handler">搜索</button>
      </div>
      <div class="search-general">
        <span class="tt">关键字：</span>
        <span>{{key}}</span>
        <span class="rslt">找到相关结果{{contains.count}}个</span>
      </div>
      <div class="result-container">
        <div class="no-result"  v-if="totalPage == 0">未检索到相关内容，请更换关键字再试:)</div>
        <ul class="result-list" v-if="totalPage > 0">
          <li v-for="item, index in contains.data" :key="index">
            <router-link :to="{path: '/article', query: { id: item.id }}">
              <h2>{{item.title}}</h2>
              <div class="content">
                <img v-show="item.imageUrl" :src="item.imageUrl">
                <p>{{item.note}}</p>
              </div>
            </router-link>
            <div class="info">
              <span>栏目：<router-link :to="{path: '/list', query: {id: item.borderId, limited: 10, page: 1}}">{{item.viewName}}</router-link></span>
              <span>发文：{{item.author}}</span>
              <span>作者：{{item.authorWriter}}</span>
              <span>审核：{{item.checkMan}}</span>
              <span>发布时间：{{item.writeDate}}</span>
            </div>
          </li>
        </ul>
        <ul class="side-list">
          <h3>近期更新</h3>
          <li v-for="item, index in sideContains" :key="index">
            <router-link :to="{path: '/article', query: {id: item.id}}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="search-pagination" v-if="totalPage != 0">
      <div class="prev" v-if="currentPage != 1">
        <router-link :to="{path: '/search', query: {key: key, page: parseInt(currentPage) - 1}}">上一页</router-link>
      </div>
      <ul v-if="totalPage >= 5">
        <li v-for="i in 5" :key="i" :class="{'current': i == 1}">
          <router-link v-if="totalPage - (parseInt(currentPage) - 1 + i) >= 0" :to="{path: '/search', query: {key: key, page: parseInt(currentPage) - 1 + i}}">{{parseInt(currentPage) - 1 + i}}</router-link>
        </li>
        <li v-if="totalPage - (parseInt(currentPage)) >= 5">...</li>
      </ul>
      <ul v-if="totalPage < 5">
        <li v-for="i in totalPage" :key="i">
          <router-link v-if="totalPage - (parseInt(currentPage) - 1 + i) >= 0" :to="{path: '/search', query: {key: key, page: i}}">{{i}}</router-link>
        </li>
      </ul>
      <div class="next" v-if="currentPage != totalPage">
        <router-link :to="{path: '/search', query: {key: key, page: parseInt(currentPage) + 1}}">下一页</router-link>
      </div>
      <div class="pageinfo">每页显示 20 条</div>
      <div class="pageinfo">共有 {{totalPage}} 页</div>
    </div>
    <foot />
  </div>
</template>

<script>
import { postSearch, getUpgradeList } from '../../api.js'
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import foot from '../../components/foot'
export default {
  name: 'Search',
  data () {
    return {
      key: this.$route.query.key,
      contains: [],
      sideContains: [],
      totalPage: 0,
      currentPage: this.$route.query.page,
      nextKey: ''
    }
  },
  components: {
    topCover,
    mainNav,
    foot
  },
  created () {
    this.postSearch(20, this.currentPage, this.key).then(response => {
      this.contains = response
      this.totalPage = response.totalPage
    })
    this.getUpgradeList(15, 1).then(response => {
      this.sideContains = response
    })
  },
  mounted () {
  },
  methods: {
    postSearch,
    getUpgradeList,
    search_action_handler () {
      if (this.nextKey) {
        this.$router.push(`/search?key=${this.nextKey}&page=1`)
      }
    }
  }
}
</script>

<style lang="scss">
@import "./list.scss";
.search {
  .search-container {
    margin: 30px auto 10px;
    input, button {
      height: 44px;
      line-height: 44px;
      margin: 0;
      padding: 0;
      box-sizing: content-box;
    }
    input {
      width: 500px;
      border: 1px solid #7A7A7A;
      border-radius: 6px 0 0 6px;
      border-right: 0;
      font-size: 18px;
      background-image: url("../../assets/images/icon_search_gray.svg");
      background-repeat: no-repeat;
      background-position: 15px center;
      text-indent: 50px;
      outline: none;
    }
    button {
      position: relative;
      top: -.5px;
      width: 120px;
      background: #DB0A0B;
      border: 1px solid #DB0A0B;
      border-radius: 0 6px 6px 0;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
  }
  .search-general {
    span {
      display: inline-block;
      font-size: 16px;
      margin: 0 10px;
      color: #DB0A0B;
      text-decoration: underline;
    }
    span.tt {
      font-weight: bold;
      color: #000;
      text-decoration: none;
    }
    span.rslt {
      color: #7a7a7a;
      text-decoration: none;
      margin: 0 0 0 30px;
    }
  }
  .search-pagination {
    width: 1200px;
    margin: 0 auto;
    div {
      display: inline-block;
      text-align: center;
      color: #DB0A0B;
      font-size: 14px;
    }
    .prev, .next {
      width: 60px;
      height: 36px;
      line-height: 36px;
      border: 1px solid #DB0A0B;
      border-radius: 3px;
    }
    .prev {
      margin-right: 20px;
    }
    .next {
      margin-left: 20px;
    }
    .pageinfo {
      width: auto;
      margin-left: 30px;
      color: #000;
    }
    ul {
      display: inline-block;
      li {
        display: inline-block;
        a {
          margin: 0 5px;
          display: inline-block;
          min-width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border: 1px solid #DB0A0B;
          border-radius: 3px;
          color: #DB0A0B;
          font-size: 14px;
        }
      }
      li.current {
        a {
          background: #DB0A0B;
          color: #FFF;
        }
      }
      li:last-of-type {
        margin: 0 5px;
        font-size: 14px;
      }
    }
  }
}
</style>
