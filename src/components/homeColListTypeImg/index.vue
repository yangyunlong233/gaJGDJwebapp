<template>
  <div class="cmpt-col-list-type-img" id="cmptColListTypeImg">
    <h2><span>图片新闻</span></h2>
    <img class="bg" src="../../assets/images/list_img_bg.png">
    <ul>
      <li>
        <a href="#">
          <img src="../../assets/images/imglist/case_01.jpg">
          <p>公安局举行2020年全州公安机关人民警察荣誉仪式</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/imglist/case_01.jpg">
          <p>公安局举行2020年全州公安机关人民警察荣誉仪式</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/imglist/case_01.jpg">
          <p>公安局举行2020年全州公安机关人民警察荣誉仪式</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/imglist/case_01.jpg">
          <p>公安局举行2020年全州公安机关人民警察荣誉仪式</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../assets/images/imglist/case_01.jpg">
          <p>公安局举行2020年全州公安机关人民警察荣誉仪式</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cmptColListTypeImg'
}
</script>

<style lang="scss" scoped>
.cmpt-col-list-type-img {
  width: auto;
  height: 275px;
  margin: 0 0 30px;
  border: 1px solid #DB0A0B;
  border-radius: 5px;
  background: linear-gradient(90deg, rgba(250, 145, 145, 0.2) 20%, rgba(255, 150, 150, 0) 100%);
  overflow: hidden;
  img.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 185px;
  }
  h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 84px;
    height: 102px;
    border-radius: 0 0 0 5px;
    background: #DB0A0B;
    text-align: center;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 52px;
      line-height: 30px;
      font-size: 26px;
      font-weight: bold;
      color: #fff;
    }
  }
  ul {
    position: absolute;
    top: 35px;
    bottom: 35px;
    left: 112px;
    right: 30px;
    white-space: nowrap;
    overflow: hidden;
    li {
      width: 218px;
      display: inline-block;
      margin: 0 25px 0 0;
      img {
        width: 218px;
        height: 155px;
      }
      p {
        width: 218px;
        white-space: normal;
        font-size: 14px;
        padding: 10px 0 0;
      }
    }
  }
}
</style>
