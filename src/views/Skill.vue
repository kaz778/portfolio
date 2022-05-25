<template>
  <div>
    <div class="skill">
      <div class="skil_v">
        <video autoplay loop muted preload>
          <source src="../assets/img/top/hero.mp4" type="video/mp4">
        </video>
      </div>
      <div class="skill-wrapper">
        <h1 class="skil_l">Languages</h1>
        <ul class="langs">
          <li class="card" v-for="lang in skills.langs" :key="lang.id">
            <img :src="lang.imgPath" alt="">
            <p>{{ lang.name }}</p>
          </li>
        </ul>

        <h1 class="skil_f">Frameworks and others</h1>
        <ul class="frameworks">
          <li class="card" v-for="framework in skills.frameworks" :key="framework.id">
            <img :src="framework.imgPath" alt="">
            <p>{{ framework.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <section class="section_fir">
    </section>
  </div>
</template>

<!--
<template>
  <div class="skill">
    <div class="skill-wrapper">
      <h1>Languages</h1>
      <ul class="langs">
        <li class="card" v-for="lang in skills.langs" :key="lang.id">
          <img :src="lang.imgPath" alt="">
          <p>{{ lang.name }}</p>
        </li>
      </ul>

      <h1>Frameworks and others</h1>
      <ul class="frameworks">
        <li class="card" v-for="framework in skills.frameworks" :key="framework.id">
          <img :src="framework.imgPath" alt="">
          <p>{{ framework.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
-->

<script lang="ts">
import { defineComponent } from 'vue'

type SkillContent = {
  id: number;
  imgPath: string,
  name: string;
};

type DataType = {
  skills: {
    langs: SkillContent[];
    frameworks: SkillContent[];
  };
};

export default defineComponent({
  data(): DataType {
    return {
      skills: {
        langs: [
          {
            id: 1,
            imgPath: require('../assets/img/skill/html-5.svg'),
            name: 'HTML',
          },
          {
            id: 2,
            imgPath: require('../assets/img/skill/css-3.svg'),
            name: 'CSS',
          },
          {
            id: 3,
            imgPath: require('../assets//img/skill/javascript.svg'),
            name: 'JavaScript',
          },
          {
            id: 5,
            imgPath: require('../assets//img/skill/python.svg'),
            name: 'Python',
          },
          {
            id: 6,
            imgPath: require('../assets//img/skill/C++.svg'),
            name: 'C++',
          },
          {
            id: 7,
            imgPath: require('../assets//img/skill/golang.svg'),
            name: 'Golang',
          },
        ],
        frameworks: [
          {
            id: 1,
            imgPath: require('../assets//img/skill/vue.svg'),
            name: 'Vue.js',
          },
          {
            id: 2,
            imgPath: require('../assets//img/skill/pytorch.svg'),
            name: 'Pytorch',
          },
          {
            id: 3,
            imgPath: require('../assets//img/skill/git.svg'),
            name: 'Git',
          },
          {
            id: 4,
            imgPath: require('../assets//img/skill/docker.svg'),
            name: 'Docker',
          },
        ],
      }
    }
  }
})
</script>


<style lang="sass" scoped>
.skil_l
  text-align: center
  font-size: 70px
  color: #fff

.skil_f
  text-align: center
  font-size: 70px
  color: #fff

.skill
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

  .skill-wrapper
    margin-top: 120px
    position: relative
    z-index: 1

    h2
      margin: 10px 0

    .langs, .frameworks, .others
      display: flex
      justify-content: center
      margin: 0
      padding: 0
    
    .card
      margin: 20px

      img
        width: 100px
        height: 100px
        text-align: center

      p
        width: 100px
        height: 60px
        text-align: center
        font-size: 20px
        font-weight: bold
        color: #fff

</style>

<!--
<style lang="sass" scoped>
.skill
  position: relative
  height: 100vh
  background-color: #222
  color: #ddd
  overflow: hidden

  .skill-wrapper
    margin-top: 120px

    h2
      margin: 10px 0

    .langs, .frameworks, .others
      display: flex
      justify-content: center
      margin: 0
      padding: 0
    
    .card
      margin: 20px

      img
        width: 60px
        height: 60px
</style>
-->