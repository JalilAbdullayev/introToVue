const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks.",
      image: "./assets/images/socks_green.jpg",
      url: "green-socks",
      inStock: true,
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
        },
      ],
      sizes: ["S", "M", "L"],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      this.cart -= 1;
      if (this.cart < 0) {
        this.cart = 0;
      }
    },
  },
});
