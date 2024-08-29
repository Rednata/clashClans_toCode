<template>
  <div class="card">
    <div v-if="imgUrl" class="card-img__wrapper">
      <img class="card-img"
       :src="require(`@/assets/img/${imgUrl}`)" :alt="title">
    </div>
    <span class="card-name">{{ name }}</span>
    <RouterLink :to="`/${alias}`" class="card-title">{{ title }}
    </RouterLink>

    <div class="card-body">
      <slot name="body"></slot>
      <RouterLink
        :to="link"
        v-if="link"
        class="link"
        style="display: block; margin-top: 16px">
        See more</RouterLink>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      imgUrl: String,
      alias: {
        type: String,
        required: true
      },
      link: String
    }
  }
</script>

<style lang="scss" scoped>

</style>