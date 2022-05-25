<template>
  <div>
    <div class="about">
      <div class="about_v">
        <video autoplay loop muted preload>
          <source src="../assets/img/top/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="aboutme">
        <div class="aboutme-left">
          <h1>About me</h1>
        </div>
        <ul class="ul_about">
          <li v-for="aboutMeContent in aboutMe" :key="aboutMeContent.id">
            <span>{{ aboutMeContent.title }}</span>{{ aboutMeContent.context }}
          </li>
        </ul>
      </div>
      <div class="detail" v-html="detail">
      </div>
    </div>
    <section class="section_fir">
    </section>
  </div>
</template>

<!--
<template>
  <div class="about">
    <div class="aboutme">
      <div class="aboutme-left">
        <h1>About me</h1>
        <img src="../assets/img/about/aboutMe.png" alt="">
      </div>
      <ul class="ul_about">
        <li v-for="aboutMeContent in aboutMe" :key="aboutMeContent.id">
          <span>{{ aboutMeContent.title }}</span>{{ aboutMeContent.context }}
        </li>
      </ul>
    </div>
    <div class="detail" v-html="detail">
    </div>
  </div>
</template>
-->

<script lang="ts">
import { defineComponent } from 'vue'

type AboutMeContent = {
  id: number;
  title: string;
  context: string;
};

type DataType = {
  aboutMe: AboutMeContent[];
  detail: string;
};

export default defineComponent({
  data(): DataType {
    return {
      aboutMe: [
        {
          id: 1,
          title: '名前',
          context: '　原 和希'
        },
        {
          id: 2,
          title: '所属',
          context: '　千葉大学 融合理工学府 基幹工学専攻 電気電子工学コース 修士1年'
        },
        {
          id: 3,
          title: '趣味',
          context: '　旅行, 映画, ゲーム etc',         
        },
        {
          id: 4,
          title: 'メール',
          context: 'harakazu778*chiba-u.jp (*を@に変えてください)',    
        },
      ],
      detail: `千葉大学 融合理工学府 基幹工学専攻 電気電子工学コース システム数理研究分野所属の大学院生。学部４年生では,<br/>
            Convolutional Neural Network のハードウェア化に関する研究をしており, Deep Learningを中心に<br/>
            研究に取り組んでいます。また, プログラミング能力の向上, チームでのITサービスの開発経験を積むことを目的に今年から,<br/>
            IT系ベンチャー企業にてGo言語を用いたシステム開発に携わっています。`
    }
  }
})
</script>

<style lang="sass">
.about
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


  .aboutme
    position: relative
    margin: 100px auto 60px
    justify-content: center
    z-index: 1

    .aboutme-left
      position: relative
      font-size: 50px
      text-align: center
      font-weight: bold
      color: #fff
      z-index: 1


      img
        width: 250px
        height: 250px
        border-radius: 50%

    ul 
      position: relative
      margin-top: 0px
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px
      border-radius: 10px
      margin: 0 auto
      padding: 10px
      width: 60%
      z-index: 1
      background: #dcdcdc

      li
        position: relative
        padding: 30px
        text-align: left
        font-size: 20px
        font-weight: bold
        width: 70%
        margin: 0 auto
        color: #333
        z-index: 1

        &:before
          content: ''
          position: absolute
          left: 0
          bottom: 0
          border-bottom: solid 2px #333
          animation: border_anim 2s ease forwards
          z-index: 1

          @keyframes border_anim
            0%
              width: 0%
            100%
              width: 100%
              z-index: 1

        span
          padding-right: 70px
          z-index: 1
  
  .detail
    position: relative
    color: #333
    font-size: 20px
    width: 60%
    margin: 10px auto
    text-align: left
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset
    padding: 10px
    background: #dcdcdc
    z-index: 1
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px
    border-radius: 10px


</style>



<!--
<style lang="sass" scoped>
.about
  position: relative
  height: 100vh
  background-color: #fff
  color: #ddd
  overflow: hidden

  .aboutme
    margin: 120px auto 60px
    display: flex
    justify-content: center

    .aboutme-left

      img
        width: 250px
        height: 250px
        border-radius: 50%

    ul 
      margin-top: 0px

      li
        position: relative
        padding: 30px
        text-align: left
        font-size: 20px
        font-weight: bold

        &:before
          content: ''
          position: absolute
          left: 0
          bottom: 0
          border-bottom: solid 2px #ddd
          animation: border_anim 2s ease forwards

          @keyframes border_anim
            0%
              width: 0%
            100%
              width: 100%

        span
          padding-right: 70px
  
  .detail
    width: 60%
    margin: 0 auto
    text-align: left
</style>
-->