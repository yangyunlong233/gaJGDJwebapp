<template>
  <div class="cmpt-home-col-slider" id="cmptHomeColSlider">
    <div class="slider-container">
      <ul class="content">
        <li>
          <a href="#">
            <img src="../../assets/images/slider/case_01.jpg">
            <div class="tt">学习贯彻十九届六中全会精神</div>
          </a>
        </li>
      </ul>
      <ul class="flag">
        <li class="current"></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="slider-entrys">
      <div class="entry red">
        <a href="#">
          <img src="../../assets/images/icon_slider_entry_01.svg">
          <span>党建暨思想政治工作考核台账系统</span>
        </a>
      </div>
      <div class="entry orange">
        <a href="#">
          <img src="../../assets/images/icon_slider_entry_02.svg">
          <span>网上投稿</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptHomeColSlider'
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-slider {
  width: 450px;
  margin: 0 0 20px;
  .slider-container {
    width: 100%;
    .content {
      width: 100%;
      img {
        width: 450px;
        height: 300px;
      }
      .tt {
        padding: 10px 0;
        font-size: 18px;
        font-weight: bold;
        color: #000;
        text-align: center;
      }
    }
    .flag {
      width: 100%;
      text-align: center;
      li {
        display: inline-block;
        border-radius: 9px;
        margin: 0 6px;
        width: 9px;
        height: 9px;
        background: #b3b3b3;
        transition: background .5s;
      }
      li.current {
        background: #db0a0b;
        transition: background .5s;
      }
    }
  }
  .slider-entrys {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 20px 0 0;
    width: 100%;
    height: 76px;
    .entry {
      position: relative;
      width: 212px;
      height: 72px;
      border-width: 2px;
      border-style: solid;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 58px;
        right: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
      }
    }
    .entry.red {
      background: rgba(#FFBEBE, .2);
      border-color: #DB0A0B;
      color: #DB0A0B;
    }
    .entry.orange {
      background: rgba(#FFBE82, .2);
      border-color: #FF9466;
      color: #ED4E0A;
    }
  }
}
</style>
