<template>
  <div class="cmpt-pagination" id="cmptPagination" :style="{padding:(type == 'clear' ? '0' : '0 0 0 240px'), width:(type == 'clear' ? '1200px' : '960px')}">
    <span v-show="page > 1 ? true :false">
      <router-link
        :to="{path: '/list', query: {id: borderId, limited: 10, page: parseInt(page) - 1}}">
        上一页
      </router-link>
    </span>
    <span v-for="i in 5" v-show="(i + parseInt(page) - 1) <= totalPage" :key="i" :class="{'current': i == 1}">
      <router-link :to="{path: '/list', query: {id: borderId, limited: 10, page: i + parseInt(page) - 1}}">
        {{i + parseInt(page) - 1}}
      </router-link>
    </span>
    <span class="more-than-5" v-show="parseInt(totalPage) - parseInt(page) > 4">...</span>
    <span v-show="page != totalPage ? true : false">
      <router-link
        :to="{path: '/list', query: {id: borderId, limited: 10, page: parseInt(page) + 1}}">
        下一页
      </router-link>
    </span>
    <span v-show="parseInt(totalPage) - parseInt(page) > 4">
      <router-link
        :to="{path: '/list', query: {id: borderId, limited: 10, page: totalPage}}">
        末页
      </router-link>
    </span>
    <span class="total">{{page + '/' + totalPage}}页</span>
    <span class="total">共{{count}}条</span>
  </div>
</template>

<script>
export default {
  name: 'cmptPagination',
  props: ['type', 'borderId', 'limited', 'page', 'count', 'totalPage']
}
</script>

<style lang="scss" scoped>
.cmpt-pagination {
  margin: 40px auto 60px;
  span {
    display: inline-block;
    margin: 0 10px;
    font-size: 14px;
    border: 1px solid #B3B3B3;
    text-align: center;
    border-radius: 4px;
    transition: all .5s;
    a {
      display: inline-block;
      padding: 0 10px;
      height: 42px;
      line-height: 42px;
      min-width: 22px;
    }
  }
  span:hover {
    background: #DB0A0B;
    border-color: #DB0A0B;
    color: #fff;
    font-weight: bold;
    transition: all .5s;
  }
  span:first-of-type {
    margin-left: 0;
  }
  span.current {
    background: #DB0A0B;
    border-color: #DB0A0B;
    color: #fff;
    font-weight: bold;
  }
  span.more-than-5 {
    border: 0;
    &:hover {
      background: none;
      color: #000;
      font-weight: normal;
    }
  }
  span.total {
    margin: 0 0 0 30px;
    border: 0;
  }
  span.total:hover {
    background: none;
    border: 0;
    color: #000;
    font-weight: normal;
  }
}
</style>
