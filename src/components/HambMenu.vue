<template>
  <div id="hamb-menu">
    <!-- ハンバーガーメニューのボタン -->
    <div class="hamburger-btn" @click="activeHamb = !activeHamb">
      <span class="line line-01" :class="{'btn-line01': activeHamb}"></span>
      <span class="line line-02" :class="{'btn-line02': activeHamb}"></span>
      <span class="line line-03" :class="{'btn-line03': activeHamb}"></span>
    </div>
    
    <!-- ハンバーガーメニュー本体 -->
    <transition name="menu">
      <div class="menu-wrapper" v-show="activeHamb" @click.self="activeHamb = !activeHamb">
        <div class="menu">
          <ul>
            <li>aaaaa</li>
            <li>bbbbb</li>
            <li>ccccc</li>
            <li>ddddd</li>
          </ul>
        </div>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent  } from 'vue';

type DataType = {
  activeHamb: boolean;
};

export default defineComponent({
  data(): DataType {
    return {
      activeHamb: false,
    }
  }
})
</script>

<style lang="sass" scoped>
.hamburger-btn 
  position: fixed
  top: 0
  left: 0
  width: 70px
  height: 72px
  cursor: pointer
  z-index: 9999

  .line
    position: absolute
    top: 0
    left: 20px
    width: 32px
    height: 2px
    background: #333
    text-align: center

    &.line-01
      top: 18px
      transition: 0.4s ease
    
    &.line-02
      top: 28px
      transition: 0.4s ease
    
    &.line-03
      top: 38px
      transition: 0.4s ease
    
    &.btn-line01
      transform: translateY(10px) rotate(-45deg)
      transition: 0.4s
    
    &.btn-line02
      opacity: 0
      transition: 0.4s
    
    &.btn-line03
      transform: translateY(-10px) rotate(45deg)
      transition: 0.4s

.menu-enter-active
  transition: all 0.4s ease

.menu-leave-active
  transition: all 0.2s ease

.menu-enter, menu-leave-to
  opacity: 0
  transform: translateX(-100%)

.menu-leave, menu-enter-to
  opacity: 1
  transform: translateX(0)

.menu-wrapper
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 9998
  
  .menu
    width: 200px
    height: 100%
    background-color: #fff
    z-index: 9999

    ul
      margin: 0
      padding: 70px 40px
      list-style: none

      li
        padding: 10px 0
        text-align: left        
</style>