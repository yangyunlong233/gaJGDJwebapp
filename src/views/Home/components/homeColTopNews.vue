<template>
  <div class="cmpt-home-col-top-news" id="cmptHomeColTopNews">
    <div class="top-news-container">
      <h1><a :href="'/article?id='+topContains.id" v-html="topContains.title ? ellipsis(topContains.title, 32) : ''"></a></h1>
    </div>
    <ul class="news-list">
      <li v-for="item, index in listContains" :key="index">
        <router-link :to="{path: '/article', query: {id: item.id}}">{{item.title}}<span>{{item.writeDate.slice(5)}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ellipsis } from '../../../libs.js'
export default {
  name: 'cmptHomeColTopNews',
  data () {
    return {
      topContains: '',
      listContains: []
    }
  },
  created () {
    this.get_contains()
  },
  methods: {
    // 党建新闻，id: 31
    get_contains () {
      this.$axios.get('/api/doc/list/31/10')
        .then(response => {
          this.topContains = response.data.data[0]
          this.listContains = response.data.data.slice(1)
          // console.log('this.topContains', this.topContains)
          // console.log('this.listContains', this.listContains)
        })
    },
    ellipsis
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-top-news {
  width: 450px;
  margin: 0 0 20px;
  .top-news-container {
    width: 100%;
    h1 {
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      color: #DB0A0B;
      text-align: center;
      border-bottom: 1px solid #B3B3B3;
      padding: 0 0 20px;
      margin: 0 0 5px;
    }
  }
  .news-list {
    width: 100%;
    li {
      position: relative;
      padding: 18px 40px 0 0;
      font-size: 16px;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        position: absolute;
        top: 19px;
        right: 0;
        font-size: inherit;
        color: #B3B3B3;
      }
    }
  }
}
</style>
