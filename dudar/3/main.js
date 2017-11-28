new Vue ({
  el: '#app',
  data: {
    value: 1,
    doubleValue: 1
  },
  methods: {
    increment (value) {
      this.value = value
      this.doubleValue = value * 2
    }
  }
});