<template>
  <div class="cmpt-home-links" id="cmptHomeLinks">
    <h2><a href="#">友情链接</a></h2>
    <ul>
      <li><a href="#">全国公安政治工作信息网</a></li>
      <li><a href="#">云南公安政工信息网</a></li>
      <li><a href="#">首都公安爱警网</a></li>
      <li><a href="#">全国公安思想政治工作之窗</a></li>
      <li><a href="#">昆明市公安局政治部</a></li>
      <li><a href="#">全国公安政治工作信息网</a></li>
      <li><a href="#">云南公安政工信息网</a></li>
      <li><a href="#">首都公安爱警网</a></li>
      <li><a href="#">全国公安思想政治工作之窗</a></li>
      <li><a href="#">昆明市公安局政治部</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeLinks'
}
</script>

<style lang="scss" scoped>
.cmpt-home-links {
  width: 1200px;
  position: relative;
  h2 {
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: #DB0A0B;
    text-align: center;
  }
  h2:before {
    content: '';
    position: absolute;
    width: 520px;
    height: 1px;
    border-top: 1px solid #B3B3B3;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  h2:after {
    content: '';
    position: absolute;
    width: 520px;
    height: 1px;
    border-top: 1px solid #B3B3B3;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  ul {
    margin: 20px 0;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    li {
      margin: 10px 0;
      width: 225px;
      height: 50px;
      line-height: 50px;
      background: rgba(255, 184, 119, 0.1);
      border: 1px dashed #DB0A0B;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>
