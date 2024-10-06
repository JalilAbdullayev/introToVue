const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      description: "A pair of warm, fuzzy socks.",
      selectedVariant: 0,
      url: "green-socks",
      inventory: 100,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: true,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onSale: false,
        },
      ],
      sizes: ["S", "M", "L"],
      cart: 0,
      activeClass: true,
      brand: "Vue Mastery",
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      this.cart -= 1;
      if (this.cart < 0) {
        this.cart = 0;
      }
    },
  },
  computed: {
    title() {
      if (this.variants[this.selectedVariant].onSale) {
        return this.brand + " " + this.product + " is on sale!";
      } else {
        return this.brand + " " + this.product;
      }
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
