<template>
  <div class="cmpt-home-guide-entry" id="cmptHomeGuideEntry">
    <div class="entry-tab">
      <div class="entry" v-for="item,index in group" :key="index" @click="show_handler(index)"  :class="{'current': (index === currentIndex) && (maskShow === true)}">
        <img src="@/assets/images/icon_guide.svg">
        <span>{{item.viewName}}</span>
      </div>
    </div>
    <div class="mask-layout" v-show="maskShow">
      <ul>
        <li v-for="item,index in groupItems[currentIndex]" :key="index">
          <a href="#">{{item.viewName}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGroupLinks } from '../../../api.js'
export default {
  name: 'cmptHomeGuideEntry',
  data () {
    return {
      maskShow: false,
      group: [],
      groupItems: [],
      currentIndex: 0
    }
  },
  created () {
    // 全局导航组 id 579
    this.getGroupLinks(579).then(response => {
      this.group = response
      // 遍历全局导航下面的分组
      for (let i = 0; i < this.group.length; i++) {
        this.getGroupLinks(this.group[i].id).then(res => {
          this.groupItems[i] = res
        })
      }
    })
  },
  methods: {
    show_handler (i) {
      if (this.currentIndex === i) {
        this.maskShow = !this.maskShow
      } else {
        this.maskShow = true
      }
      this.currentIndex = i
    },
    getGroupLinks
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-guide-entry {
  position: relative;
  margin: 0 0 40px;
  .entry-tab {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .mask-layout {
    position: relative;
    top: -2px;
    width: calc(100% - 2px);
    background: #FFF3F3;
    border: 1px solid #db0a0b;
    border-radius: 0 0 6px 6px;
    ul {
      width: auto;
      padding: 20px 10px 0;
      display: flex;
      flex-flow: row wrap;
      li {
        min-width: 80px;
        padding: 10px 22px;
        margin: 0 10px 20px;
        font-size: 16px;
        border: 1px solid #db0a0b;
        background: #fff;
        border-radius: 4px;
        transition: background .5s;
        text-align: center;
      }
      li:hover {
        background: #db0a0b;
        color: #fff;
        transition: background .5s;
      }
    }
  }
  .entry {
    position: relative;
    width: 100%;
    height: 68px;
    padding: 0 10px;
    margin: 0 10px;
    line-height: 68px;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
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
  .entry.current {
    z-index: 9;
    border: 1px solid #db0a0b;
    background: #FFF3F3;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  }
  .entry:first-of-type {
    margin-left: 0;
  }
  .entry:last-of-type {
    margin-right: 0;
  }
}
</style>
