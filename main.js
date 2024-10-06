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
    };
  },
});
