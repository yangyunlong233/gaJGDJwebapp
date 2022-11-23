<template>
  <div class="cmpt-home-col-side-notice" id="cmptHomeColSideNotice">
    <h2 class="col-title"><a href="#">更多</a></h2>
    <ul>
      <li v-for="item, index in contains" :key="index">
        <router-link :to="{path: '/article', query: {id: item.id}}">[{{item.writeDate}}] {{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getColumnList } from '../../../api.js'
export default {
  name: 'cmptHomeColSideNotice',
  data () {
    return {
      contains: []
    }
  },
  created () {
    // 公告公示栏目 id 51
    this.getColumnList(51, 5).then(response => {
      this.contains = response
    })
  },
  methods: {
    getColumnList
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-side-notice {
  width: 240px;
  h2.col-title {
    position: relative;
    width: 100%;
    height: 53px;
    background-image: url("../../../assets/images/icon_home_notice.png");
    background-size: 100% 100%;
    a {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      font-size: 14px;
      color: #fff;
    }
  }
  ul {
    padding: 20px 15px 10px;
    width: auto;
    height: 260px;
    border: 1px solid #DB0A0B;
    border-top: 0;
    background: #fff2d6;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    li {
      margin: 0 0 15px;
      font-size: 14px;
      color: #000;
      span {
        display: block;
        font-size: 12px;
        color: #7a7a7a;
      }
      a {
        display: block;
        max-height: 36px;
        overflow: hidden;
      }
    }
  }
}
</style>
