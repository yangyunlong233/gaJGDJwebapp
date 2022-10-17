<template>
  <div class="article" id="Article">
    <topCover />
    <mainNav />
    <breadcrumb :viewName="viewName" :borderId="borderId" from="正文" />
    <div class="info">
      <span>供稿：{{source}}</span>
      <span>作者：{{author}}</span>
      <span>审核：{{check}}</span>
      <span>发布时间：{{time}}</span>
      <span>
        <img src="@/assets/images/icon_article_print.svg">
        <a class="current" href="#">打印</a>
      </span>
      <span>
        <img src="@/assets/images/icon_article_fz.svg">
        <i>字号</i>
        <a href="#">大</a>
        <a class="current" href="#">中</a>
        <a href="#">小</a>
      </span>
    </div>
    <div class="container">
      <h1 v-html="title"></h1>
      <div class="content" v-html="contain"></div>
    </div>
    <foot />
  </div>
</template>

<script>
import topCover from '../../components/topCover'
import mainNav from '../../components/mainNav'
import breadcrumb from '../../components/breadcrumb'
import foot from '../../components/foot'
export default {
  name: 'Article',
  data () {
    return {
      id: this.$route.query.id,
      title: '',
      contain: '',
      source: '',
      author: '',
      check: '',
      time: '',
      viewName: '',
      borderId: 0
    }
  },
  components: {
    topCover,
    mainNav,
    breadcrumb,
    foot
  },
  created () {
    this.get_contains()
  },
  methods: {
    get_contains () {
      this.$axios.get(`/api/doc/info/${this.id}`)
        .then(response => {
          this.title = response.data.data.title
          this.contain = response.data.data.htmlContent
          this.source = response.data.data.author
          this.check = response.data.data.checkMan
          this.time = response.data.data.writeDate
          this.viewName = response.data.data.viewName
          this.borderId = response.data.data.borderId
          console.log(response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    get_article_column (colId) {
      // this.$axios.get(`/api/`)
    }
  }
}
</script>

<style lang="scss">
.article {
  .info {
    width: 1200px;
    margin: 30px auto 10px;
    padding: 15px 0;
    border-top: 1px solid #B3B3B3;
    border-bottom: 1px solid #B3B3B3;
    text-align: center;
    span {
      margin: 0 30px;
      display: inline-block;
      font-size: 14px;
      color: #7A7A7A;
      a, i {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        font-size: 14px;
        margin: 0 5px;
      }
      a.current {
        color: #DB0A0B;
        text-decoration: underline;
      }
      a:hover {
        color: #DB0A0B;
        text-decoration: underline;
      }
    }
  }
  .container {
    width: 960px;
    margin: 0 auto 80px;
    h1 {
      font-size: 34px;
      font-weight: bold;
      padding: 40px 0;
      text-align: center;
    }
    .content {
      p {
        padding: 0 0 18px 0;
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
}
</style>
