<template>
  <body class="all">
    <div class="top">
      <strong class="myname">
        Kazuki Hara
      </strong>
      <video autoplay loop muted preload>
        <source src="../assets/img/top/hero.mp4" type="video/mp4">
      </video>
    </div>
    <section class="section_fir">
      <h1 class="about_top">
        About
      </h1>
      <div class="intro">
        千葉大学 融合理工学府 基幹工学専攻 電気電子工学コース システム数理研究分野所属の大学院生。学部４年生では,<br/>
        Convolutional Neural Network のハードウェア化に関する研究をしており, Deep Learningを中心に<br/>
        研究に取り組んでいます。また, プログラミング能力の向上, チームでのITサービスの開発経験を積むことを目的に今年から,<br/>
        IT系ベンチャー企業にてGo言語を用いたシステム開発に携わっています。
        <p class="more_a">
          <router-link to="/about" class="menu-btn">more</router-link>
        </p>
      </div>
    </section>
    <section class="section_sec">
      <h1 class="reseach_top">
        Reseach
      </h1>
      <div class="glid">
        <div class="bachelor">
          <h1 class="bachelor_top">
            Bachelor
          </h1>
          <h2 class="bachelor_tema">
            Convolutional Neural Networkの<br/>ハードウェア化に関する量子化手法の改良
          </h2>
          <div class="ab_b">
            近年，Internet of Tings（IoT）が普及しつつある。しかし, それに伴いサーバ負荷<br/>
            の増大という問題が生じる。この問題に対し, エッジコンピューティング<br/>
            が注目されている。エッジコンピューティングの一種として,<br/>
            Convolutional Neural Network（CNN）を，モデル圧縮技術を用いて
            Field Programmable Gate Array（FPGA）に搭載する試みが行われている。<br/>
            また, モデル圧縮技術の一つとして，パラメータを任意のビット数で量子化する<br/>
            DoReFa-Net が報告されている。本研究では，DoReFa-Netにおけるアルゴリズムの<br/>
            改良とその学習性能の検証を目的とし，DoReFa-Netを適用したCNNのFPGA実装を<br/>
            行い，画像分類に対する回路シミュレーションを通じてその有効性を検証する。
            <p class="more_a">
              <router-link to="/research" class="menu-btn">more</router-link>
            </p>
          </div>
        </div>
        <div class="master">
          <h1 class="master_top">
            Master
          </h1>
          <h2 class="master_tema">
            Coming soon…<br/><br/>
          </h2>
          <div class="ab_m">
            Coming soon…<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p class="more_a">
              <router-link to="/research" class="menu-btn">more</router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<!--
<template>
  <div class="top">
    <div class="bluelight">
      <h1>Kazuki's Portfolio</h1>
      <p>Click on the top to see the details.</p>
    </div>
  </div>
</template>
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Top',
  components: {
  },
});
</script>

<style lang="sass">

.top
  width: 100vw
  height: 100vh
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%) 
  background: #333
  overflow: hidden

  video
    position: absolute
    width: auto
    height: 105%

.myname
  position: absolute
  z-index: 1
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 120px
  color: #fff
  font-weight: bold
  display: block
  width: 100%
  text-align: center

.section_fir
  margin: 100vh 0 0 0

.about_top
  margin: 0 0 10px 0
  padding: 100px 0 0 0
  font-size: 100px
  font-weight: bold
  text-align: center
  text-shadow: 0 0 20px rgba(0, 0, 0, 1),  0 0 20px rgba(0, 0, 0, 0)
  color: #f5f5f5
  border-bottom: 2px solid #333

.intro
  color: #333
  padding: 20px
  position: relative
  font-size: 20px
  width: 60%
  margin: 40px auto
  text-align: left
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset

.more_a
  color: #333
  margin: 10px 0 0 0 
  padding: 0 5px 5px 5px
  position: absolute
  right: 10px
  font-size: 30px
  text-align: right

  router-link
    color: #333

.section_sec
  margin: 0 0 150px 0


.reseach_top
  margin: 200px 0 10px 0
  padding: 0 0 0 0
  font-size: 100px
  font-weight: bold
  text-align: center
  text-shadow: 0 0 20px rgba(0, 0, 0, 1),  0 0 20px rgba(0, 0, 0, 0)
  color: #f5f5f5
  border-bottom: 2px solid #333

.glid
  display: flex
  align-items: center
  justify-content: center

.bachelor
  padding: 0 20px 20px 20px
  margin: 0 20px 0 20px
  width: 40%
  height: 100%
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset

.bachelor_top
  width: 30%
  font-size: 40px
  font-weight: bold
  text-align: center
  justify-content: center
  text-shadow: 1px 1px 0 #000,  -1px 1px 0 #000,  1px -1px 0 #000,  -1px -1px 0 #000
  color: #fff
  border-bottom: 2px solid #333


.bachelor_tema
  color: #333
  font-size: 30px
  font-weight: bold
  text-align: center

.ab_b
  color: #333
  font-size: 20px
  position: relative

.master
  padding: 0 20px 20px 20px
  margin: 0 20px 0 20px
  width: 40%
  height: 100%
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset

.master_top
  width: 30%
  font-size: 40px
  font-weight: bold
  text-align: center
  align-items: center
  text-shadow: 1px 1px 0 #000,  -1px 1px 0 #000,  1px -1px 0 #000,  -1px -1px 0 #000
  color: #fff
  border-bottom: 2px solid #333

.master_tema
  color: #333
  font-size: 30px
  font-weight: bold
  text-align: center

.ab_m
  color: #333
  font-size: 20px
  position: relative

</style>

<!--
<style lang="sass" scoped>
.top
  position: relative
  font-size: 30px
  height: 100vh
  background-color: white
  color: #222
  text-shadow: 1px 1px 0 white,  -1px 1px 0 white,  1px -1px 0 white,  -1px -1px 0 white

  .bluelight 
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

    h1
      font-size: 50px
      font-weight: bold
      text-align: center
      vertical-align: middle
      border-radius: 50%
      transition: background 1s, border-width 0.5s cubic-bezier(0.075, 0.820, 0.165, 1.000), text-shadow 0.5s
      color: #daf6ff
      text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0)
      box-shadow: 0 0 0 rgba(10, 175, 230, 0),  inset 0 0 0 rgba(10, 175, 230, 0)
      background-image: radial-gradient(center, ellipse farthest-corner, rgba(10, 175, 230, 0) 0%, rgba(10, 175, 230, 0) 90%)
      border: 0 dotted rgba(10, 175, 230, 0.0)

      &:hover 
        color: #fff
        text-shadow: 0 0 50px rgba(10, 175, 230, 1),  0 0 50px rgba(10, 175, 230, 1)
        background-image: radial-gradient(center, ellipse farthest-corner, rgba(10, 175, 230, 0.3) 0%, rgba(10, 175, 230, 0) 60%)
    
    &:before, &:after, h1:before, h1:after 
        transition: 0.2s ease-in-out
        content: ""
        display: block
        position: absolute
        border-radius: 50%
        border: 60px dashed transparent
        left: 50%
        top: 50%
        transform : translate(-50%,-50%)
    
    &:before 
        animation: rotate 20s linear 0s infinite
        width: 180%
        height: 180%
        border: 3px dotted rgba(10, 175, 230, 0)
        z-index: -1
    
    &:after 
        animation: rotate 10s linear 0s infinite reverse
        border: 80px dashed rgba(10, 175, 230, 0)
        width: 160%
        height: 160%
        z-index: -2
    
    h1
      &:before 
        animation: rotate 5s ease-in-out 0s infinite alternate
        width: 120%
        height: 120%
        border: 50px dashed rgba(10, 175, 230, 0)
      
      &:after 
        animation: rotate 5s linear 0s infinite
        border: 18px dashed rgba(10, 175, 230, 0)
        width: 120%
        height: 120%
    
    &:hover 
      &:before 
        border-color: rgba(10, 175, 230, 0.3)
      
      &:after 
        border-color: rgba(10, 175, 230, 0.1)
      
      h1
        &:before 
          border-color: rgba(10, 175, 230, 0.3)
          
        &:after
          border-color: rgba(10, 175, 230, 0.3)
  
  @keyframes rotate 
    0% 
      transform: translate(-50%,-50%) rotate(0deg)
    100% 
      transform: translate(-50%,-50%) rotate(360deg)
</style>
-->