<template>
  <AppV />

  <router-view :products="products" @fetchdata="fetchdata"> </router-view>
</template>
<script>
import axios from "axios";
import AppV from "@/components/AppHeader.vue";
const baseURL = "http://localhost:3000/products";
export default {
  data() {
    return {
      products: [],
      darkmode: false,
    };
  },
  components: {
    AppV,
  },
  mounted() {
    this.fetchdata();
  },
  methods: {
    async fetchdata() {
      axios
        .get(baseURL)
        .then((res) => {
          const data = res.data;
          this.products = data;
          console.log(data);
        })
        .catch((error) => {
          console.error("هناك خطاء فى استدعاء المنتجات", error);
        });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  box-sizing: border-box;
}

nav {
  padding: 22px;
  padding-right: 68px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
