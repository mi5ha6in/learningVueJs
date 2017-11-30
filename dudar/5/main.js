new Vue ({
  el: '#app',
  data: {
    show: true,
    message: 'Hello',
    cars: [
      {model: "BMW", speed: 250},
      {model: "Audi", speed: 240},
      {model: "Mercedes", speed: 350},
      {model: "Ford", speed: 160},
    ]
  },
  computed: {
    showMess () {
      return this.message.toUpperCase ();
    }
  },
});
