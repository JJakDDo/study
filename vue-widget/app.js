const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  template: "<p>{{title}} - {{author}} - {{age}}</p>",
});

app.mount("#app");
