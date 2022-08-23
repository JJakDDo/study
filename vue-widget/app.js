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
        {
          title: "name of the wind1",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "name of the wind2",
          author: "patrick rothfuss",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "name of the wind3",
          author: "patrick rothfuss",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      url: "http//www.google.com",
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
    toggleFav(index) {
      this.books[index].isFav = !this.books[index].isFav;
      //console.log(this.books);
    },
    toggleFav2(book) {
      book.isFav = !book.isFav;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
