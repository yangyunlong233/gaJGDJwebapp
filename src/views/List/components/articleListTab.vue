<template>
  <div class="cmpt-article-list-tab" id="cmptArticleListTab">
    <ul>
      <li v-for="item, index in contains" :key="index" :class="{'current': item.id == borderId}">
        <router-link :to="{path: '/list', query: {id: item.id, limited: 10, page: 1}}">
          {{item.viewName}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptArticleListTab',
  props: ['borderId'],
  data () {
    return {
      contains: []
    }
  },
  created () {
    this.get_contains()
  },
  methods: {
    get_contains () {
      this.$axios.get('/api/docBorder/body/1')
        .then(response => {
          if (response.data.success) {
            this.contains = response.data.data
            // console.log(response.data.data)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-article-list-tab {
  ul {
    width: 200px;
    li {
      position: relative;
      padding: 0 40px 0 0;
      margin: 0 0 20px;
      width: auto;
      height: 52px;
      line-height: 52px;
      text-align: right;
      font-size: 18px;
      font-weight: normal;
      transition: background .5s;
    }
    li.current {
      background: #DB0A0B;
      font-weight: bold;
      color: #fff;
    }
    li:hover {
      background: rgba(#DB0A0B, .2);
      transition: background .5s;
    }
    li.current:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      width: 13px;
      height: 13px;
      background-image: url("../../../assets/images/icon_article_list_tab_current.svg");
      background-repeat: no-repeat;
    }
    li.current:hover {
      background: #DB0A0B;
    }
  }
}
</style>
