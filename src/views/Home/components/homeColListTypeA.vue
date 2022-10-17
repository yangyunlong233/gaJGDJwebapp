<template>
  <div class="cmpt-home-col-list-type-a" id="cmptHomeColListTypeA">
    <h2 class="col-title">
      <i class="icon"><slot name="icon"><img src="@/assets/images/icon_col_title_type_a_01.svg"></slot></i>
      <a href="/list?id=41&limited=10&page=1">{{title}}</a>
      <i class="line"></i>
    </h2>
    <ul>
      <li v-for="item, index in listContains" :key="index">
        <router-link :to="{path: '/list', query: {id: item.id}}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColListTypeA',
  props: ['colId', 'title'],
  data () {
    return {
      listContains: []
    }
  },
  created () {
    this.get_contains()
  },
  methods: {
    // 通知通告，id: 41
    get_contains () {
      this.$axios.get(`/api/doc/list/${this.colId}/6`)
        .then(response => {
          this.listContains = response.data.data
          // console.log('this.topContains', this.topContains)
          // console.log('this.listContains', this.listContains)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-list-type-a {
  width: 450px;
  margin: 0 0 20px;
  h2.col-title {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: #DB0A0B;
    i, a {
      display: inline-block;
      vertical-align: middle;
    }
    a {
      padding: 0 8px;
      background: #fff;
      position: relative;
      z-index: 9;
    }
    i.line {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 400px;
      height: 1px;
      background-image: linear-gradient(90deg, #B3B3B3 50%, #fff 100%);
    }
  }
  ul {
    font-size: 16px;
    color: #000;
    margin: 25px 0 0;
    min-height: 225px;
    li {
      position: relative;
      margin: 18px 0;
      padding: 0 0 0 35px;
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
      left: 20px;
      transform: translateY(-50%);
      background: #000;
      border-radius: 4px;
    }
  }
}
</style>
