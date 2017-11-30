Vue.filter ('capatilize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(/\b\w/g, function(l) { return l.toUpperCase() })
});

new Vue ({
  el: '#app',
  data: {
    cars: [
      {model: "BMW", speed: 250},
      {model: "Audi", speed: 240},
      {model: "Mercedes", speed: 350},
      {model: "Ford", speed: 160},
    ]
  },
});
