const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
      books: [
        { title: "name of the wind1", author: "patrick rothfuss" },
        { title: "name of the wind2", author: "patrick rothfuss" },
        { title: "name of the wind3", author: "patrick rothfuss" },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      //this.title = "Words of Radiance";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
