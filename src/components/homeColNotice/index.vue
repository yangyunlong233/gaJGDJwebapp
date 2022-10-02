<template>
  <div class="cmpt-home-col-notice" id="cmptHomeColNotice">
    <h2 class="col-title"><a href="#">更多</a></h2>
    <ul>
      <li><a href="#">当时代守关人 保持状态“向未来” 解锁“奋斗密码”</a></li>
      <li><a href="#">当时代守关人 保持状态“向未来” 解锁“奋斗密码”</a></li>
      <li><a href="#">当时代守关人 保持状态“向未来” 解锁“奋斗密码”</a></li>
      <li><a href="#">当时代守关人 保持状态“向未来” 解锁“奋斗密码”</a></li>
      <li><a href="#">当时代守关人 保持状态“向未来” 解锁“奋斗密码”</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColNotice'
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-notice {
  width: 240px;
  h2.col-title {
    position: relative;
    width: 100%;
    height: 53px;
    background-image: url(../../assets/images/icon_home_notice.png);
    background-size: 100% 100%;
    a {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      font-size: 14px;
      color: #fff;
    }
  }
  ul {
    padding: 15px 15px 0;
    width: auto;
    border: 1px solid #DB0A0B;
    border-top: 0;
    background: #fff2d6;
    border-radius: 0 0 8px 8px;
    li {
      margin: 0 0 12px;
      font-size: 14px;
      color: #000;
    }
  }
}
</style>
