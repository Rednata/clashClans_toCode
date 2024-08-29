<template>
  <!-- <div class="md-body"> -->
    <Carousel
      v-bind="settings"
      :breakpoints="breakpoints"
    >
      <Slide
        class="card__wrapper"
        v-for="item in items"
        :key="item.id"
      >
        <Card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :alias="item.alias"
          :link="`/${item.alias}`"
          >
          <template #body>
            {{ item.descr }}
          </template>
          <template #footer>
            <CardFooter
              :info="item.info"
            />
          </template>
        </Card>
      </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

    <!-- <div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :alias="item.alias"
        :link="`/${item.alias}`"
        >
        <template #body>
          {{ item.descr }}
        </template>
        <template #footer>
          <div class="card-stats">
            <div class="one-third" v-for="(stat, idx) in item.info" :key="idx" >
              <p class="stat-value">{{ stat.value }}</p>
              <p class="stat">{{ stat.title }}</p>
            </div>
          </div>
        </template>
      </Card>
    </div> -->

  <!-- </div> -->

</template>

<script>
import Card from '@/components/UI/Card.vue'
import items from '@/seeders/items.json'
import CardFooter from '@/components/CardFooter.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  components: {
    Card,
    CardFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data () {
    return {
      items,
      settings: {
      itemsToShow: 3,
      snapAlign: 'center',
      transition: 3000,
      wrapAround: true
    },
      breakpoints: {
        320: {
          itemsToShow: 1
        },
        1100: {
          itemsToShow: 3
        }
      }
    }
  }
};
</script>

<style lang="scss">
  .carousel__prev, .carousel__next {
    background-color: rgb(236, 155, 59);
    border-radius: 50%;
  }
</style>
