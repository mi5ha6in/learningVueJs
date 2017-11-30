Vue.component ('app-car', {
  data: function  () {
    return {
      cars: [
        {model: "BMW", speed: 250},
        {model: "Audi", speed: 240},
        {model: "Mercedes", speed: 350},
        {model: "Ford", speed: 160},
    ]
    }
  },
  template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue ({
  el: '#app',
  data: {
    
  },
});
