<template>
  <div>
    <item-component v-for="item in items" :item="item" :key="item.id"></item-component>
  </div>
</template>

<script>
  import ItemComponent from './ItemsComponent.vue'
  export default {
    components: {
      ItemComponent
    },
    props: ['items']
  }
</script>

<style scoped>
</style>
