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
        },
        {
          id: 2235,
          color: "blue",
        },
      ],
      sizes: ["S", "M", "L"],
    };
  },
});
