<template>
  <div class="wrapper-person">
    <div class="" v-if="item">
      <img :src="require(`@/assets/img/${item.img}`)" :alt="item.descr">
      <h1
        class="title"
        style="color: #fff"
        >{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <div class="card-stats">
        <div class="one-third" v-for="(stat, idx) in item.info" :key="idx" >
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat">{{ stat.title }}</p>
        </div>
      </div>

      <div class="">
        <RouterLink to="/" class="btn btnPrimary">Back to home</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import items from '../seeders/items.json'
  export default {
    data () {
      return {
        item: null,
      }
    },
    created () {
      const alias = this.$route.params.itemAlias;
      const item = items.find(elem => elem.alias === alias)

      if (item) {
        this.item = item
      } else {
        console.log('this.$router: ', this.$router);
        this.$router.push('/404')
      }

    }
  }
</script>

<style lang="scss">
  .wrapper-person {
    text-align: center;
  }

  .card-stats {
    border-radius: 14px;
    margin: 30px 0;
  }

</style>