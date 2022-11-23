<template>
  <div class="cmpt-home-links" id="cmptHomeLinks">
    <h2><a href="#">友情链接</a></h2>
    <ul>
      <li v-for="item, index in contains" :key="index">
        <router-link :to="item.hrefValue">{{item.viewName}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getGroupLinks } from '../../../api.js'
export default {
  name: 'cmptHomeLinks',
  data () {
    return {
      contains: []
    }
  },
  created () {
    // 友情链接组 id 571
    this.getGroupLinks(571).then(response => {
      this.contains = response
    })
  },
  methods: {
    getGroupLinks
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-links {
  width: 1200px;
  position: relative;
  h2 {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: #DB0A0B;
    text-align: center;
  }
  h2:before {
    content: '';
    position: absolute;
    width: 520px;
    height: 1px;
    border-top: 1px solid #B3B3B3;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  h2:after {
    content: '';
    position: absolute;
    width: 520px;
    height: 1px;
    border-top: 1px solid #B3B3B3;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  ul {
    margin: 20px 0;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    li {
      margin: 10px 10px;
      min-width: 218px;
      height: 50px;
      line-height: 50px;
      background: rgba(255, 184, 119, 0.1);
      border: 1px dashed #DB0A0B;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
