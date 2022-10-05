<template>
  <div class="cmpt-home-col-list-type-c" id="cmptHomeColListTypeC">
    <h2>
      <span class="current">青年工作</span>
      <span>前卫体协</span>
    </h2>
    <ul>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
      <li><a href="#">陈希出席全国组织部长会议 部署2022年组织工作</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColListTypeC'
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
    }
    span.current {
      color: #DB0A0B;
    }
    span:first-of-type:after {
      content: '';
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
