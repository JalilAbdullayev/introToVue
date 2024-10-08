app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: /*html*/ `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img
              :src="image"
              alt=""
              :class="{ 'out-of-stock-img': !inStock }"
            />
          </div>
          <div class="product-info">
            <a :href="url">
              <h1>{{ title }}</h1>
            </a>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>
                Shipping: {{ shipping }}
            </p>
            <p>{{ description }}</p>
            <product-details :details="details"></product-details>
            <ul>
              <li v-for="size in sizes">{{ size }}</li>
            </ul>
            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }"
            ></div>
            <button
              class="button"
              :class="{ disabledButton: !inStock }"
              @click="addToCart"
              :disabled="!inStock"
            >
              Add to Cart
            </button>
            <button class="button" @click="removeFromCart">
              Remove from Cart
            </button>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div>`,
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
      reviews: [],
      sizes: ["S", "M", "L"],
      activeClass: true,
      brand: "Vue Mastery",
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    addReview(review) {
      this.reviews.push(review);
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
