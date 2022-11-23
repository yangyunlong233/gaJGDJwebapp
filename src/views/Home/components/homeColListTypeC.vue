<template>
  <div class="cmpt-home-col-list-type-c" id="cmptHomeColListTypeC">
    <h2>
      <span :class="{'current': this.current === 0}" @mouseenter="switch_handler(0)">
        <router-link :to="{path: '/list', query: {id: colId1, limited: 10, page: 1}}">{{title1}}</router-link>
      </span>
      <span  v-show="title2" class="line"></span>
      <span v-show="title2"  :class="{'current': this.current === 1}"  @mouseenter="switch_handler(1)">
        <router-link :to="{path: '/list', query: {id: colId2, limited: 10, page: 1}}">{{title2}}</router-link>
      </span>
    </h2>
    <ul>
      <li v-for="item, index in showContains" :key="index">
        <router-link :to="{path: '/article', query: {id: item.id}}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getColumnList } from '../../../api.js'
export default {
  name: 'cmptHomeColListTypeC',
  props: ['title1', 'colId1', 'title2', 'colId2'],
  data () {
    return {
      contains1: [],
      contains2: [],
      showContains: [],
      current: 0
    }
  },
  created () {
    if (this.title1 && this.colId1) {
      this.getColumnList(this.colId1, 6).then(res => {
        this.contains1 = res
        this.showContains = this.contains1
      })
    }
    if (this.title2 && this.colId2) {
      this.getColumnList(this.colId2, 6).then(res => { this.contains2 = res })
    }
  },
  mounted () {
  },
  methods: {
    getColumnList,
    switch_handler (i) {
      this.current = i
      if (i === 0) {
        this.showContains = this.contains1
      }
      if (i === 1) {
        this.showContains = this.contains2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-list-type-c {
  width: 380px;
  margin: 0 0 20px;
  h2 {
    width: auto;
    height: 36px;
    line-height: 36px;
    padding: 0 0 0 15px;
    span {
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      vertical-align: middle;
      color: #7A7A7A;
      cursor: pointer;
    }
    span.current {
      color: #DB0A0B;
    }
    span.line {
      display: inline-block;
      height: 20px;
      border-right: 1px solid #B3B3B3;
      vertical-align: middle;
      margin: 0 15px 0 0;
      padding: 0 0 0 15px;
    }
  }
  ul {
    width: 380px;
    font-size: 16px;
    color: #000;
    margin: 0;
    padding: 0;
    min-height: 225px;

    li {
      position: relative;
      margin: 18px 0;
      padding: 0 0 0 15px;
      width: auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    li:after {
      content: '';
      width: 4px;
      height: 4px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: #000;
      border-radius: 4px;
    }
  }
}
</style>
