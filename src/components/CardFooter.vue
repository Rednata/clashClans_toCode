<template>
    <div class="card-stats" >
      <div class="one-third" v-for="(stat, idx) in info" :key="idx" >
        <p class="stat-value">{{ stat.value }}</p>
        <p class="stat">{{ stat.title }}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>