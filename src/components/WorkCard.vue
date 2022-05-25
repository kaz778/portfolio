<template>
  <div class="work-card">
    <img class="card-img" :src="imgPath" alt="">
    <div class="card-content">
      <div class="card-title">
        <p>{{ title }}</p>
        <a :href="githubUrl" class="card-link"><font-awesome-icon :icon="['fab','github']" class="web-icon github"/></a>
      </div>
      <p class="card-text">{{ detail }}</p>
      <ul class="card-langs">
        <li v-for="langPath in langPaths" :key="langPath">
          <img class="card-lang" :src="langPath" alt="">                 
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    imgPath: {
      type: String as PropType<string>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: true,
    },
    githubUrl: {
      type: String as PropType<string>,
      required: true,
    },
    detail: {
      type: String as PropType<string>,
      required: true,
    },
    langPaths: {
      type: Array as PropType<string[]>,
      required: true,
    }
  }
})
</script>

<style lang="sass" scoped>
.work-card
  margin: 5px
  border: 2px solid #ddd

  p
    margin: 0

  .card-img
    width: 95%
    margin: 5px auto
    border: 1px solid #ddd

  .card-content
    .card-title
      display: flex
      justify-content: center
      margin: 0 10px
      font-size: 25px
      font-weight: bold
      border-bottom: 2px solid #ddd

      a
        margin-left: 20px

        &:hover
          color: #888
    
    .card-text  
      margin: 10px 15px 15px
      text-align: left

    .card-langs
      display: flex
      justify-content: center
      padding: 0

      .card-lang
        width: 30px
        height: 30px
        margin: 0 10px

</style>