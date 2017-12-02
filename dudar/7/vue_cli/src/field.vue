<template>
  <div>
    <h3>{{msg}}</h3>
    <input type="text" v-model="mess">
    <p>{{ mess }}</p>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data () {
      return {
        mess: ''
      }
    }
  }
</script>
