<template>
  <div class="cmpt-article-list" id="cmptArticleList">
    <ul class="type-a">
      <li v-for="item, index in listContains" :key="index" :class="{'type-a': item.imageUrl, 'type-b': item.imageUrl == ''}">
        <router-link :to="{path: '/article', query: {id: item.id}}">
          <img src="@/assets/images/article_case/list_case.jpg" v-show="item.imageUrl">
          <h3 v-html="item.title"></h3>
          <p v-html="item.note ? ellipsis(item.note, 90) : ''"></p>
          <span v-html="item.writeDate"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ellipsis } from '../../../libs.js'
export default {
  name: 'cmptArticleList',
  props: ['listContains'],
  methods: {
    ellipsis
  }
}
</script>

<style lang="scss" scoped>
.cmpt-article-list {
  width: 999px;
  min-height: 800px;
  border-left: 1px solid #B3B3B3;
  ul {
    width: auto;
    padding: 0 0 0 40px;
    li {
      position: relative;
    }
  }
  ul {
    li.type-a {
      padding: 0 0 25px 210px;
    }
    li.type-b {
      padding: 0;
    }
    li {
      margin: 0 0 30px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 192px;
        height: 128px;
      }
      h3 {
        padding: 5px 0 0;
        font-size: 20px;
        font-weight: bold;
      }
      p {
        padding: 10px 0;
        font-size: 16px;
        color: #7A7A7A;
      }
      span {
        display: block;
        font-size: 16px;
        color: #B3B3B3;
      }
    }
  }
}
</style>
