<template>
  <div class="cmpt-home-list-minimal" id="cmptHomeListMinimal">
    <h2 class="col-title">
      <i class="icon"><slot name="icon"><img src="../../assets/images/icon_col_title_notice.svg"></slot></i>
      <a href="#">通知通报</a>
      <i class="line"></i>
    </h2>
    <ul>
      <li><a href="#">十八大以来组织工作取得新进展新成效十八大以来组织工作取得新进展新成效</a></li>
      <li><a href="#">十八大以来组织工作取得新进展新成效</a></li>
      <li><a href="#">十八大以来组织工作取得新进展新成效</a></li>
      <li><a href="#">十八大以来组织工作取得新进展新成效</a></li>
      <li><a href="#">十八大以来组织工作取得新进展新成效</a></li>
      <li><a href="#">十八大以来组织工作取得新进展新成效</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeListMinimal'
}
</script>

<style lang="scss" scoped>
.cmpt-home-list-minimal {
  width: 450px;
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
      background-image: linear-gradient(to right, #B3B3B3, #B3B3B3, #fff);
    }
  }
  ul {
    font-size: 16px;
    color: #000;
    margin: 25px 0 0;
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
