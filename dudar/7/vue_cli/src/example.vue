<template>
  <div>
    <h1>Заголовок H1</h1>
    <app-input></app-input>
  </div>
</template>

<script>
  import Input from './field.vue';
  export default {
    components: {
      'app-input': Input
    }
  }
</script>
