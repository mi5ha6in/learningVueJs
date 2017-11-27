new Vue ({
  el: '#app',
  data: {
    title: "Hello World"
  },
  methods: {
    changeText () {
      this.title = 'Метод changeText() сработал'
    }
  }
});