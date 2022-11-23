<template>
  <div class="cmpt-home-col-slider" id="cmptHomeColSlider">
    <div class="slider-container">
      <ul class="content">
        <transition-group>
          <li v-for="item, index in contains" :key="index" v-show="count == index">
            <router-link :to="{path: '/article', query: {id: item.id}}">
              <img :src="item.imageUrl">
              <div class="tt">{{ellipsis(item.title, 24)}}</div>
            </router-link>
          </li>
        </transition-group>
      </ul>
      <ul class="flag">
        <li v-for="i in contains.length" :key="i" :class="{'current': (i - 1 == count)}" @click="timer_handler(i)"></li>
      </ul>
    </div>
    <div class="slider-entrys">
      <div v-for="item, index in links" :key="index" class="entry" :class="{'red': index == 0, 'orange': index == 1}">
        <a href="#">
          <img v-if="index == 0" src="@/assets/images/icon_slider_entry_01.svg">
          <img v-if="index == 1" src="@/assets/images/icon_slider_entry_02.svg">
          <span>{{item.viewName}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getImgList, getGroupLinks } from '../../../api.js'
import { ellipsis } from '../../../libs.js'
export default {
  name: 'cmptHomeColSlider',
  data () {
    return {
      count: 0,
      contains: [],
      links: [],
      timer: null
    }
  },
  computed: {
    ...mapState([
      'columnSliderIdState'
    ])
  },
  created () {
    this.getImgList(this.columnSliderIdState, 5).then(response => {
      this.contains = response
    })
    this.getGroupLinks(572).then(response => {
      this.links = response
    })
    this.timer = this.sliderAnimation()
  },
  methods: {
    ellipsis,
    getImgList,
    getGroupLinks,
    sliderAnimation () {
      setInterval(() => {
        if (this.count >= this.contains.length - 1) {
          this.count = 0
        } else {
          this.count++
        }
      }, 5000)
    },
    timer_handler (i) {
      clearInterval(this.timer)
      this.timer = null
      this.count = i - 1
      setTimeout(() => {
        this.timer = this.sliderAnimation()
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.cmpt-home-col-slider {
  width: 450px;
  margin: 0 0 20px;
  .slider-container {
    width: 100%;
    .content {
      position: relative;
      width: 100%;
      height: 348px;
      li {
        position: absolute;
        top: 0;
        left: 0;
      }
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
/* 进入之前和离开后的样式 */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 离开和进入过程中的样式 */
.v-enter-active,
.v-leave-active {
  /* 添加过渡动画 */
  transition: opacity 0.3s ease;
}

/* 进入之后和离开之前的样式 */
.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
