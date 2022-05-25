<template>
  <div class="works">
    <div class="works-wrapper">
      <h1>Works</h1>
      <ul class="cards">
        <li class="card" v-for="card in cards" :key="card.id">
          <WorkCard 
            :imgPath="card.imgPath"
            :title="card.title"
            :githubUrl="card.githubUrl"
            :detail="card.detail"
            :langPaths="card.langPaths" 
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkCard from '@/components/WorkCard.vue'

type CardType = {
  id: number
  title: string;
  imgPath: string;
  githubUrl: string;
  detail: string;
  langPaths: string[];
}

type DataType = {
  cards: CardType[];
};

export default defineComponent({
  components: {
    WorkCard,
  },
  data(): DataType {
    return {
      cards: [
        {
          id: 1,
          title: 'Portfolio',
          imgPath: require('../assets/img/work/portfolio.png'),
          githubUrl: 'https://github.com/ta8i2chi8/portfolio',
          detail: '自己紹介サイトがほしくて作りました。',
          langPaths: [require('../assets/img/skill/vue.svg'), require('../assets/img/skill/typescript.svg')],
        },
        {
          id: 2,
          title: 'らくらく勤怠アプリ',
          imgPath: require('../assets/img/work/kintai.png'),
          githubUrl: 'https://github.com/ta8i2chi8/attendance_management',
          detail: 'お世話になっているITベンチャーでの勤怠管理を改良できそうと思い，現在開発中',
          langPaths: [require('../assets/img/skill/flutter.svg'), require('../assets/img/skill/dart.svg')],
        },
      ]
    };
  }
})
</script>


<style lang="sass" scoped>
.works
  position: relative
  height: 100vh
  background-color: #222
  color: #ddd
  overflow: hidden

  .works-wrapper
    margin-top: 120px

    .cards
      display: flex
      flex-wrap: wrap
      justify-content: center
      padding: 0px

      .card
        width: 25%
</style>