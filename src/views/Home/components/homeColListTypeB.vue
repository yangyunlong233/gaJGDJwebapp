<template>
  <div class="cmpt-home-col-list-type-b" id="cmptHomeColListTypeB">
    <h2 class="col-title">
      <i class="icon">
        <slot name="icon"><img src="@/assets/images/icon_col_title_type_b_01.svg"></slot>
      </i>
      <a href="#">{{title}}</a>
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
  name: 'cmptHomeColListTypeB',
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
.cmpt-home-col-list-type-b {
  width: 450px;
  margin: 0 0 20px;
  h2.col-title {
    padding: 0 0 25px;
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: #DB0A0B;
    background-image: url("../../../assets/images/col_title_type_b_bg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    i,
    a {
      display: inline-block;
      vertical-align: middle;
    }

    a {
      padding: 0 8px;
      position: relative;
      z-index: 9;
    }

    i.line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-image: linear-gradient(90deg, #DB0A0B 80%, #fff 100%);
    }
  }

  ul {
    font-size: 16px;
    color: #000;
    margin: -15px 0 0;
    padding: 0;
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
